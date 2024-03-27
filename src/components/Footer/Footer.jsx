import { Help, LeftArrow, RightArrow, Sound } from '../../assets';
import PageMenu from './PageMenu';

export default function Footer({ pageCount, setPageCount, pages }) {
  return (
    <footer className="mx-16 my-4 flex items-center justify-between">
      <button>
        <img src={Sound} alt="" />
      </button>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setPageCount((prev) => (prev === 0 ? prev : prev - 1))}
        >
          <img src={LeftArrow} alt="" />
        </button>

        <PageMenu pageCount={pageCount} maxPage={pages} />

        <button
          className="next"
          onClick={() =>
            setPageCount((prev) => (prev === pages - 1 ? prev : prev + 1))
          }
        >
          <img src={RightArrow} alt="" />
        </button>
      </div>
      <button>
        <img src={Help} alt="" />
      </button>
    </footer>
  );
}
