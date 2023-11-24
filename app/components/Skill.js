import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export const Skill = () => {
  return (
    <section id="skill">
      <h1 className="text-center mt-20 p-2 font-bold max-sm:sticky max-sm:top-0 max-sm:bg-gradient-to-r from-[#000428] to-[#072f52]">MY SKILL</h1>
      <div className="grid gap-4 lg:grid-col-2 max-sm:m-4 max-lg:m-4 ">
        <div className="bg-[rgb(15,25,49)] h-96 rounded ">
          <h2 className="text-center mb-12">Front-end</h2>
          <div className="flex items-center flex-col ">
            <i className="fa-brands fa-react text-[#09bfec] text-3xl mb-6">
              <FontAwesomeIcon icon={faReact} className="fa-brands fa-react text-[#09bfec] text-3xl" />
              <span className="text-3xl">React</span>
            </i>

            <i className="flex mb-6">
              <Image width={100} height={100} src="/next-js.png" alt="next-js logo" className="bg-white rounded-full h-12 w-12" /> <span className="text-3xl pt-1 pl-2">Next Js</span>
            </i>
            <i className="flex mb-6">
              <Image width={100} height={100} src="/tailwind-css.png" alt="tailwind logo" className="w-10 h-10" />
              <span className="text-3xl pt-1 pl-2">Tailwind</span>
            </i>
          </div>
        </div>
        <div className="bg-[rgb(15,25,49)] h-96 rounded">
          <h2 className="text-center mb-12">Back-End</h2>
          <div className="flex items-center flex-col ">
            <i className="flex mb-6">
              <Image width={100} height={100} src="/spring.png" alt="next-js logo" className="bg-white rounded-full h-12 w-12" /> <span className="text-3xl pt-1 pl-2">Spring Boot</span>
            </i>
            <i className="flex mb-6">
              <Image width={100} height={100} src="/express-js.png" alt="next-js logo" className="w-10 h-9" /> <span className="text-3xl pt-1 pl-2">Express Js</span>
            </i>
            <i className="flex mb-6">
              <Image width={100} height={100} src="/postgresql.png" alt="tailwind logo" className="w-12 h-12" />
              <span className="text-3xl pt-1 pl-2">Postgresql</span>
            </i>
          </div>
        </div>
        <div className="bg-[rgb(15,25,49)] h-96 rounded lg:col-span-2 ">
          <h2 className="text-center mb-12">Language-p</h2>
          <div className="flex items-center flex-col ">
            <i className="flex mb-6">
              <Image width={100} height={100} src="/java.png" alt="next-js logo" className="h-12 w-12" /> <span className="text-3xl pt-1 pl-2">Java</span>
            </i>
            <i className="flex mb-6">
              <Image width={100} height={100} src="/javascript.png" alt="next-js logo" className="w-9 h-9" /> <span className="text-3xl pt-1 pl-2">Javascript</span>
            </i>
            <i className="flex mb-6">
              <Image width={100} height={100} src="/php.png" alt="tailwind logo" className="w-12 h-12" />
              <span className="text-3xl pt-1 pl-2">PHP</span>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};
