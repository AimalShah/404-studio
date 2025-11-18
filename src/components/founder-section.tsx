import {  InstagramIcon, Linkedin } from "lucide-react";
import { Heading } from "./services/intro";

export default function FounderSection() {
  return (
    <div className="h-screen mt-62 space-y-12">
      <Heading text="The Founder" />
      <h1 className="text-gray-500 text-5xl text-center">
        <span className="text-black">Pushing Brands</span> Since 2023
      </h1>
      <div className="lg:w-[84rem] mx-auto grid lg:grid-cols-2 grid-cols-1 px-4">
        <div>
          <div className="bg-[#E3E3E3] rounded-4xl p-1 lg:h-[680px] lg:w-[590px] shadow-[-4px_0px_21px_1px_rgba(0,_0,_0,_0.35)] rotate-[-2deg]">
            <div className="w-full h-full overflow-hidden rounded-4xl inset-shadow-xs">
              <img src={"/pale.jpeg"} className="w-full h-full object-cover " />
            </div>
          </div>
          <div className="flex justify-between mt-6 px-6">
            <div className="flex gap-4">
              <InstagramIcon className="text-gray-500 hover:text-black cursor-pointer size-5" />
              <Linkedin className="text-gray-500 size-5 hover:text-black cursor-pointer" />
            </div>
            <div className="flex flex-col mt-[-20px]">
              <span className="">Amir Iqbal</span>
              <span className="font-normal text-xs text-gray-600">
                404-Studio,Founder
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-10 lg:mt-0">
          <h3 className="lg:text-[18px] lg:w-[70%] font-poppins lg:text-start text-center">
            Amir Iqbal is a full-stack developer who blends robust functionality
            with intuitive design, building scalable web applications and
            engaging digital experiences for startups and companies.
          </h3>

          <div className="translate-y-[-5px] h-[200px] border-l border-[#00000040] lg:flex items-end hidden">
            <div className="overflow-x-auto bg-transparent w-full pl-10">
              <table className="min-w-full text-left text-xs whitespace-nowrap w-full">
                <tbody className="w-full">
                  <tr className="border-b border-[#00000040]">
                    <td scope="row" className="px-6 py-4">
                      Design & Prototyping
                    </td>
                    <td className="px-6 py-4 text-[#00000088]">
                      Figma, Framer, Webflow
                    </td>
                    <td className="px-6 py-4">Expert</td>
                  </tr>

                  <tr className="border-b border-[#00000040] ">
                    <td scope="row" className="px-6 py-4 ">
                      Development
                    </td>
                    <td className="px-6 py-4 text-[#00000088]">Mern Stack</td>
                    <td className="px-6 py-4">Expert</td>
                  </tr>

                  <tr className="border-b border-[#00000040]">
                    <td scope="row" className="px-6 py-4">
                      Project Management
                    </td>
                    <td className="px-6 py-4 text-[#00000088]">
                      Notion, Slack, Asana
                    </td>
                    <td className="px-6 py-4">Advanced</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
