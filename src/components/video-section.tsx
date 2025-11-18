 "use client"
import { BriefcaseBusiness } from "lucide-react";

export default function VideoSection() {
  return (
    <div 
    className="h-screen w-full grid place-items-center py-6 mt-12 overflow-clip px-4 lg:px-4 md:px-0 ">
      <div className="w-full h-full bg-black rounded-4xl grid place-items-center lg:bg-contain bg-no-repeat bg-contain">
        <div  
        
        className="size-24 rounded-full bg-white/80 grid place-items-center before:content-['see recent work'] relative cursor-pointer">
          <div className="w-42 absolute bg-white/75 top-[-50] p-2 rounded-full text-center rotate-12 translate-x-6">
            see recent work
          </div>
          <BriefcaseBusiness className="size-14" />
        </div>
      </div>
    </div>
  );
}
