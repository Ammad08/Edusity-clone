import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";

const Program = () => {
  return (
    <main id="program" className="pt-16 flex flex-col justify-center items-center bg-[#F5F5F5]">
      <div className="space-y-1 items-center flex flex-col py-3">
        <h6 className="text-[#212EA0] text-sm font-bold">OUR PROGRAM</h6>
        <h3 className="text-3xl font-sans font-bold pb-20">What We Offer</h3>
      </div>
      {/* Container for image*/}
      <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-10 space-y-8 md:space-y-0">
        {/* img1 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[270px] xl:w-[300px] xl:h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/program1.jpg"
            alt="wwo1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 hover:bg-[#212EA0]/50 opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <div className="transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center">
              <span className="text-white text-lg flex flex-col items-center justify-center">
                <PiStudentBold className="transform size-12 transition-transform duration-300 ease-in-out group-hover:scale-150" />
                Graduation Degree
              </span>
            </div>
          </div>
        </div>

        {/* img2 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[270px] xl:w-[300px] xl:h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/program2.jpg"
            alt="wwo2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 hover:bg-[#212EA0]/50 opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <div className="transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center">
              <span className="text-white text-lg flex flex-col items-center justify-center">
                <PiStudentBold className="transform size-12 transition-transform duration-300 ease-in-out group-hover:scale-150" />
                Masters Degree
              </span>
            </div>
          </div>
        </div>

        {/* img3 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[270px] xl:w-[300px] xl:h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/program3.jpg"
            alt="wwo3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 hover:bg-[#212EA0]/50 opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <div className="transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center">
              <span className="text-white text-lg flex flex-col items-center justify-center">
                <PiStudentBold className="transform size-12 transition-transform duration-300 ease-in-out group-hover:scale-150" />
                Post Graduation
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Program;
