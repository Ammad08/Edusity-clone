import { HiArrowLongRight } from "react-icons/hi2";

const Home = () => {
  return (
    <main id="home" className="bg-[url('/background.jpg')] bg-cover bg-center h-screen  font-sans-serif">
      <div className="flex flex-col justify-center items-center text-center h-full  bg-purple-950 bg-opacity-60">
        {/* content section  */}
        <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0  xl:px-20 ">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-5xl   text-white  md:leading-[3.2rem] lg:leading-[4.5rem] xl:leading-[4.0rem]  font-bold mb-4">
            We Ensure better education for a better world
          </h1>
          <p className="text-white lg:px-14 text-sm md:text-base xl:px-2 mb-6  ">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
        </div>
        {/* button section  */}
        <div>
          <button className="border bg-white text-black text-sm md:text-base flex px-6  py-3 rounded-3xl">
            Explore more
            <HiArrowLongRight className="ml-2 md:mt-1 mt-0" size={21} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
