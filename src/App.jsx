import { useState } from 'react';

import './App.css';

import { DashedLineLeft, DashedLineRight, Logo, Week1 } from './assets';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Footer from './components/Footer/Footer';

export default function App() {
  const [pageCount, setPageCount] = useState(0);
  const pages = [Page1, Page2];

  const CurrentPage = pages[pageCount];

  return (
    <div className="min-h-screen max-w-[74rem] w-full font-stack bg-[#f8d1e0] grid grid-rows-[auto_1fr] pt-4 mx-auto relative isolate">
      <img
        className="absolute left-0 -z-[1]"
        src={DashedLineLeft}
        alt="dashed line"
        role="presentation"
      />
      <img
        className="absolute right-0 -z-[1]"
        src={DashedLineRight}
        alt="dashed line"
        role="presentation"
      />
      <header className="flex gap-8">
        <div>
          <img src={Logo} alt="funfox logo" width="130" />
        </div>

        <div>
          <img src={Week1} alt="week 1" />
        </div>
      </header>

      <CurrentPage />

      <Footer
        pages={pages.length}
        pageCount={pageCount}
        setPageCount={setPageCount}
      />
    </div>
  );
}
