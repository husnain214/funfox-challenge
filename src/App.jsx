import { useState } from 'react';

import './App.css';

import {
  Bag,
  ClosedBook,
  GradCap,
  Logo,
  OpenBook,
  Pencil,
  Ruler,
  Week1,
} from './assets';

import Page1 from './pages/Page1';

import Page2 from './pages/Page2';

import Footer from './components/Footer/Footer';

export default function App() {
  const [pageCount, setPageCount] = useState(0);

  const pages = [Page1, Page2, null, null];

  const CurrentPage = pages[pageCount];

  return (
    <div className="min-h-screen max-w-[74rem] w-full font-stack bg-[#f8d1e0] grid grid-rows-[auto_1fr] pt-4 mx-auto relative">
      <header className="flex gap-8">
        <div>
          <img src={Logo} alt="funfox logo" width="130" />
        </div>

        <div>
          <img src={Week1} alt="week 1" />
        </div>
      </header>

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
            <CurrentPage />
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

          <img
            src={ClosedBook}
            alt="closed book"
            role="presentation"
            width="70"
            decoding="async"
          />

          <img
            src={GradCap}
            alt="graduation cap"
            role="presentation"
            width="70"
            decoding="async"
          />
        </div>
      </div>

      <Footer
        pages={pages.length}
        pageCount={pageCount}
        setPageCount={setPageCount}
      />
    </div>
  );
}
