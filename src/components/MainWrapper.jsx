import {
  Bag,
  ClosedBook,
  GradCap,
  OpenBook,
  Pencil,
  QuestionMark,
  Ruler,
} from '../assets';

export default function MainWrapper({ setModalOpen = null, children }) {
  return (
    <div className="grid grid-cols-[0_1fr_0] md:grid-cols-[minmax(0,_auto)_1fr_minmax(0,_auto)]">
      <div className="grid content-between mb-16">
        <img
          src={Pencil}
          alt="pencil"
          role="presentation"
          width="70"
          decoding="async"
        />

        <img
          src={Bag}
          alt="bag"
          role="presentation"
          width="70"
          decoding="async"
        />

        <img
          src={OpenBook}
          alt="open book"
          role="presentation"
          width="70"
          decoding="async"
        />
      </div>

      <div className="grid grid-cols-[1fr_auto]">
        <main className="bg-[#f7f9fe] text-2xl *:mb-4 px-4 pb-6 pt-4 rounded-3xl">
          {children}
        </main>
      </div>

      <div className="grid content-between mb-16">
        <img
          src={Ruler}
          alt="ruler"
          role="presentation"
          width="70"
          decoding="async"
        />

        {setModalOpen ? (
          <button
            onClick={() => setModalOpen(true)}
            className="absolute top-10 right-10 md:static"
          >
            <img src={QuestionMark} alt="question mark" />
          </button>
        ) : (
          <img
            src={ClosedBook}
            alt="closed book"
            role="presentation"
            width="70"
            decoding="async"
          />
        )}

        <img
          src={GradCap}
          alt="graduation cap"
          role="presentation"
          width="70"
          decoding="async"
        />
      </div>
    </div>
  );
}
