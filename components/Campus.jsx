import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

const Campus = () => {
  return (
    <main id="campus" className="py-16 flex flex-col justify-center items-center px-4 xl:px-0 bg-[#F5F5F5]">
      <div className="space-y-1 items-center flex flex-col py-3">
        <h6 className="text-[#212EA0] font-semibold text-lg">Gallery</h6>
        <h3 className="text-3xl font-sans font-bold pb-14">Campus Photos</h3>
      </div>

      {/* image section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 lg:space-x-5 gap-y-6 md:space-y-0 place-items-center justify-items-center">
        {/* img1 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[330px] xl:w-[230px]  xl:h-[260px] rounded-lg overflow-hidden group">
          <Image
            src="/campus1.jpg"
            alt="g1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* img2 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[230px] mb-4 xl:w-[230px] xl:h-[260px] rounded-lg overflow-hidden group">
          <Image
            src="/campus2.jpg"
            alt="g2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* img3 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[230px] mb-4 xl:w-[230px] xl:h-[260px] rounded-lg overflow-hidden group">
          <Image
            src="/campus3.jpg"
            alt="g3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* img4 */}
        <div className="relative w-[210px] h-[210px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[230px] mb-4 xl:w-[230px] xl:h-[260px] rounded-lg overflow-hidden group">
          <Image
            src="/program1.jpg"
            alt="g4"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* button section  */}
      <div>
        <button className="flex border text-white bg-[#212EA0] my-8 py-3 px-6 font-semibold rounded-3xl">
          See more here
          <HiArrowLongRight className="size-6 ml-2" />
        </button>
      </div>
    </main>
  );
};

export default Campus;
