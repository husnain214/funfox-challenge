import { useState, useRef, useEffect } from 'react';
import { DownArrow } from '../../assets';

export default function PageMenu({ pageCount, maxPage }) {
  const [menuVisble, setMenuVisible] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClick(event) {
      if (!menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const pages = Array(maxPage)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-stretch bg-[#cd3f97] rounded-lg border-2 border-[#f8ebfd] aria-expanded:border-[#aa1070] flex-grow text-white transition duration-200"
        aria-controls="page-menu"
        aria-expanded={menuVisble}
        onClick={() => setMenuVisible((prev) => !prev)}
      >
        <span className="py-2 px-5">{pageCount + 1}</span>

        <img
          src={DownArrow}
          alt="down arrow"
          className="py-2 px-1.5 border-l-2 border-[#aa1070]"
        />
      </button>

      <ul
        role="list"
        className="absolute inset-0 -top-5 h-fit -translate-y-[100%] p-2 rounded-lg grid gap-5 bg-[#cd3f97] text-white z-auto visible opacity-100 aria-hidden:-z-[1] aria-hidden:invisible aria-hidden:opacity-0 transition-opacity duration-250 ease-in-out"
        aria-hidden={!menuVisble}
        id="page-menu"
      >
        {pages.map((page) => (
          <li key={page} className="text-center">
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}
