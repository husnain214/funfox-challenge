import { useState } from 'react';
import { Clock, DarkNight, House, SunnyBeach } from '../assets';
import Modal from '../components/Footer/Modal';
import MainWrapper from '../components/MainWrapper';

export default function Page2() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MainWrapper setModalOpen={setModalOpen}>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <p className="text-3xl">
        Can you figure out the definition of setting from the following
        examples?
      </p>

      <p>(take a minute to think about this)</p>

      <div className="flex justify-evenly flex-wrap gap-5 md:gap-0 items-center">
        <div className="border-[3px] border-dashed border-[#CCCCCC] py-3 px-6 rounded-xl">
          <img src={SunnyBeach} alt="" />
        </div>
        <div className="border-[3px] border-dashed border-[#CCCCCC] py-3 px-6 rounded-xl">
          <img src={DarkNight} alt="" />
        </div>
      </div>

      <p>So, what do you think the definition of setting is?</p>

      <div className="flex gap-3 flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-col md:flex-row gap-2 justify-stretch items-center">
          <label htmlFor="">Any guesses?</label>
          <div className="flex-1 border-[3px] border-dashed border-[#CCCCCC] py-1 px-6 rounded-xl">
            <input
              type="text"
              className="border-b-2 bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <span>Hint:</span>
          <button>
            <img className="align-middle" src={Clock} alt="" />
          </button>
          <button>
            <img className="align-middle" src={House} alt="" />
          </button>
        </div>
      </div>

      <p className="bg-[#25a3a1] border-[3px] border-dashed border-[#a4fdfb] text-[#f7f9fe] p-3">
        Setting is the time <img className="inline" src={Clock} alt="" /> and
        place <img className="inline" src={House} alt="" /> of a story. It often
        answers the questions: when? and where?
      </p>

      <p>
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </MainWrapper>
  );
}
