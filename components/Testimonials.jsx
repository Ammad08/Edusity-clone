"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section  id="testimonials"className="body-font bg-[#F5F5F5]">
      <div className="container px-5  mx-auto flex justify-center flex-col items-center">
        {/* heading  */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className=" font-bold text-[#212EA0] tracking-widest  title-font mb-1">
            TESTIMONIALS
          </h2>
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
            What Student Says
          </h1>
        </div>

        {/* Slider  Section  */}
        <div className="relative w-full sm:w-4/5 md:w-3/4 ">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="p-4">
                <div className="max-w-sm mx-auto py-8 flex rounded-lg h-full p-4 flex-col shadow-lg bg-[#F5F5F5]">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full overflow-hidden border-4 border-[#212EA0] flex-shrink-0">
                      <Image
                        src="/slider1.jpg"
                        alt="Profile of Emily Williams"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="title-font font-bold text-[#212EA0]">
                        Emily Williams
                      </h2>
                      <h3 className="text-sm text-gray-600">Edusity, USA</h3>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-700">
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I have ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="p-4">
                <div className="max-w-sm mx-auto py-8 flex rounded-lg h-full p-4 flex-col shadow-lg bg-[#F5F5F5]">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full overflow-hidden border-4 border-[#212EA0] flex-shrink-0">
                      <Image
                        src="/slider2.jpeg"
                        alt="Profile of William Jackson"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="title-font font-bold text-[#212EA0]">
                        William Jackson
                      </h2>
                      <h3 className="text-sm text-gray-600">Edusity, USA</h3>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-700">
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I have ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="p-4">
                <div className="max-w-sm mx-auto py-8 flex rounded-lg h-full p-4 flex-col shadow-lg bg-[#F5F5F5]">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full overflow-hidden border-4 border-[#212EA0] flex-shrink-0">
                      <Image
                        src="/slider3.jpg"
                        alt="Profile of Emily Williams"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="title-font font-bold text-[#212EA0]">
                        Emily Williams
                      </h2>
                      <h3 className="text-sm text-gray-600">Edusity, USA</h3>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-700">
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I have ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="p-4">
                <div className="max-w-sm mx-auto py-8 flex rounded-lg h-full p-4 flex-col shadow-lg bg-[#F5F5F5]">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full overflow-hidden border-4 border-[#212EA0] flex-shrink-0">
                      <Image
                        src="/slider4.jpg"
                        alt="Profile of Emily Williams"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="title-font font-bold text-[#212EA0]">
                        Emily Williams
                      </h2>
                      <h3 className="text-sm text-gray-600">Edusity, USA</h3>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-700">
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I have ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Navigation buttons */}
            <div className="swiper-button-prev absolute top-1/2 left-4 pr-6 transform -translate-y-1/2 text-white  ">
              <svg
                className="w-8 h-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white pl-6">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
