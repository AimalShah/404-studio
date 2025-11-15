import { useRef } from "react";
import Paragraph from "../paragraph";
import SideCard from "../side-card";

export default function Intro() {
  const constraint1Ref = useRef<HTMLDivElement | null>(null);
  const constraint2Ref = useRef<HTMLDivElement | null>(null);
  const container3Ref = useRef<HTMLDivElement | null>(null);
  return (
    <div className="mt-48">
      <Heading text="Hello" />

      <div className="lg:h-[70vh] w-3xl mx-auto mt-18 relative hidden lg:block md:block">
        <Paragraph paragraph="We help brands grow with standout design, clear branding, and content that drives results." />
        <div
          className="absolute w-1/2 top-0 left-[-28%] h-96"
          ref={constraint1Ref}
        >
          <SideCard
            constraintsRef={constraint1Ref}
            text="Development"
            color="#FF5E00"
            className="absolute top-0 left-[18%] rotate-6"
          />
          <SideCard
            constraintsRef={constraint1Ref}
            text="UI/UX Design"
            color="#474747"
            className="absolute top-16 left-[18%] rotate-2"
          />
          <SideCard
            constraintsRef={constraint1Ref}
            text="Strategy"
            color="#05A9FF"
            className="absolute top-32 left-[20%] rotate-[-10deg]"
          />
        </div>

        <div
          className="absolute w-1/2 top-0 right-[-28%] h-96"
          ref={constraint2Ref}
        >
          <SideCard
            constraintsRef={constraint2Ref}
            text="Animations"
            color="#52FF69"
            className="absolute top-0 right-[24%] rotate-[-6deg]"
          />
          <SideCard
            constraintsRef={constraint2Ref}
            text="Backend"
            color="#FB44A9"
            className="absolute top-16 right-[26%] rotate-[-2deg]"
          />
          <SideCard
            constraintsRef={constraint2Ref}
            text="Branding"
            color="#FED400"
            className="absolute top-32 right-[26%] rotate-[10deg]"
          />
        </div>
      </div>

      <div className="lg:hidden md:hidden block w-full">
        <Paragraph paragraph="We help brands grow with standout design, clear branding, and content that drives results." />

        <div className="">
          <div
            className="h-72 bg-transparent relative"
            ref={container3Ref}
          >
            <SideCard
              constraintsRef={container3Ref}
              text="Development"
              color="#FF5E00"
              className="absolute top-0 left-[8%] rotate-6"
            />
            <SideCard
              constraintsRef={container3Ref}
              text="UI/UX Design"
              color="#474747"
              className="absolute top-16 left-[8%] rotate-2"
            />
            <SideCard
              constraintsRef={container3Ref}
              text="Strategy"
              color="#05A9FF"
              className="absolute top-32 left-[10%] rotate-[-10deg]"
            />
             <SideCard
              constraintsRef={container3Ref}
              text="Animations"
              color="#52FF69"
              className="absolute top-0 right-[4%] rotate-[-6deg]"
            />
            <SideCard
              constraintsRef={container3Ref}
              text="Backend"
              color="#FB44A9"
              className="absolute top-16 right-[6%] rotate-[-2deg]"
            />
            <SideCard
              constraintsRef={container3Ref}
              text="Branding"
              color="#FED400"
              className="absolute top-32 right-[6%] rotate-[10deg]"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Heading({ text }: { text: string }) {
  return (
    <div className="relative flex items-center gap-2 justify-center">
      <div
        className="w-[69px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, #54545400 0%, #00000080, #00000080 100%)",
        }}
      ></div>
      <h1 className="italic text-[#545454] text-2xl font-heading">{text}</h1>
      <div
        className="w-[69px] h-[1px]"
        style={{
          background:
            "linear-gradient(270deg, #54545400 0%, #00000080, #00000080 100%)",
        }}
      />
    </div>
  );
}
