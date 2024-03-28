import { Cloud1, Cloud2, Cloud3, Girl, Note } from '../assets';
import MainWrapper from '../components/MainWrapper';

export default function Page1() {
  return (
    <MainWrapper>
      <h1 className="mx-auto bg-[#fe6784] text-3xl border-[3px] border-dashed border-[#ffaebe] text-[#f7f9fe] rounded-full w-fit text-center py-1.5 px-6">
        Elements of Story Writing
      </h1>

      <p>
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey? Over the next week, we will be practicing the different
        elements of story writing. Our aim is to make stories more interesting
        and exciting.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center py-2 px-6 bg-[#25a3a1] border-[3px] border-dashed border-[#a4fdfb] text-[#f7f9fe]">
        <p>
          There are <strong>five</strong> elements which make the foundation for
          story writing. An element is an essential part of something and every
          fiction story has the same key elements:
        </p>

        <img src={Girl} alt="girl in thought" />
      </div>

      <div className="flex flex-wrap justify-between items-center *:flex-1 *:min-w-[180px] *:bg-no-repeat *:h-[120px] *:flex *:justify-center *:items-center *:bg-center *:text-center">
        <div style={{ backgroundImage: `url(${Cloud1})` }}>Settings</div>
        <div style={{ backgroundImage: `url(${Cloud2})` }}>Characters</div>
        <div style={{ backgroundImage: `url(${Cloud1})` }}>Plot</div>
        <div style={{ backgroundImage: `url(${Cloud2})` }}>
          Problem or Conflict
        </div>
        <div style={{ backgroundImage: `url(${Cloud3})` }}>Resolution</div>
      </div>

      <p>
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </p>

      <div className="bg-[#fe6784] px-8 py-2 rounded-xl shadow-[0px_8px_2px_0px_#00000040]">
        <p
          className="bg-no-repeat bg-cover px-8 pt-4 pb-8"
          style={{ backgroundImage: `url(${Note})` }}
        >
          For today’s lesson, we will try to understand and practice writing the
          setting for our stories. The setting is an important element of every
          fiction story.
        </p>
      </div>
    </MainWrapper>
  );
}
