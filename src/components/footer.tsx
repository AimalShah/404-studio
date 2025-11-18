"use client";
import { Instagram, Linkedin, Mail, MoveRight } from "lucide-react";
import { Heading } from "./services/intro";

export default function Footer() {
  return (
    <div className="lg:h-screen h-screen w-full lg:px-10 px-4 mt-10">
      <div className="bg-black w-full lg:h-[80%] h-[90%] text-white relative overflow-hidden rounded-4xl">
        <div
          style={{
            background:
              "radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, var(--token-00af65c3-92fd-4f69-9228-cfe71d95f29a, rgb(0, 0, 0)) 100%)",
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="w-full h-full absolute"
        ></div>
        <div className="opacity-[0.1] absolute w-full h-full z-0">
          <div
            style={{
              backgroundImage: `url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256")`,
              backgroundRepeat: "repeat",
              backgroundPositionX: "left",
              backgroundPositionY: "top",
              backgroundSize: "150px",
            }}
            className="inset-0 absolute w-full h-full "
          ></div>
        </div>
        <div className="w-full h-full z-10 absolute lg:space-y-20 space-y-10 px-4">
          <Heading text="Avaliable to work" className="z-20 mt-20" />
          <h1 className="text-white text-center lg:text-8xl text-4xl">
            Let's <span className="text-[#535353]">Connect</span>
          </h1>
          <p className="text-center lg:text-lg text-sm">
            Feel free to contact me if having any questions.
            <br />
            I'm available for new projects or just for chatting.
          </p>
          <div className="w-full flex justify-center">
          <div className="lg:w-[20rem] md:w-fit  p-2 bg-white rounded-4xl cursor-pointer w-full shadow-[-4px_0px_21px_1px_rgba(0,_0,_0,_0.35)]">
            <button className="text-white bg-black p-4 rounded-4xl shadow-2xl flex items-center gap-4 relative  w-full justify-center cursor-pointer">
              Book a Meeting
              <MoveRight className="font-thin" />
            </button>
          </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between px-10 lg:w-7xl mx-auto gap-8">
            <div className="w-full lg:block flex justify-center">
                <div className="py-2 border-y border-white w-fit">
                    © Denqid, 2025
                </div>
            </div>
            <div>
                <div className="flex gap-4 justify-center">
                    <span className="group flex p-2 border justify-center items-center rounded-full border-[#535353] hover:border-white cursor-pointer">
                    <Mail className="text-[#5a5a5a] font-thin group-hover:text-white"/>
                    </span>
                    <span className="group flex p-2 border justify-center items-center rounded-full border-[#535353] hover:border-white cursor-pointer">
                    <Instagram  className="text-[#5a5a5a] font-thin group-hover:text-white"/>
                    </span>
                    <span className="group flex p-2 border justify-center items-center rounded-full border-[#535353] hover:border-white cursor-pointer">  
                    <Linkedin className="text-[#5a5a5a] font-thin group-hover:text-white"/>
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
