import { Clock, Cross, House } from '../../assets';

export default function Modal({ modalOpen, setModalOpen }) {
  return (
    <div
      aria-hidden={!modalOpen}
      className="aria-hidden:hidden absolute inset-0 bg-[#6C5D4A] bg-opacity-70 p-5 md:p-16 text-white grid backdrop-blur-sm z-10"
    >
      <div className="bg-[#111111] border-[3px] border-white bg-opacity-20 rounded-lg relative grid items-start py-20 px-10">
        <button
          className="absolute right-3 top-3"
          onClick={() => setModalOpen(false)}
        >
          <img src={Cross} alt="" />
        </button>

        <h1 className="text-3xl text-center">Guide Sheet</h1>

        <div className="flex flex-col md:flex-row gap-3 text-xl items-center">
          <div className="flex flex-1 flex-col md:flex-row gap-2 justify-stretch items-center">
            <label htmlFor="">Any guesses?</label>
            <div className="flex-1 border-[3px] border-dashed border-[#CCCCCC] py-1 px-6 rounded-xl">
              <p className="border-b-2 bg-transparent outline-none w-full">
                {'>'} Setting is the time and place of a story.
              </p>
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
      </div>
    </div>
  );
}
