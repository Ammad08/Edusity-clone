const About = () => {
  return (
    <main id="about" className="flex flex-col items-center lg:flex-row  px-4 lg:px-20 bg-[#F5F5F5] py-16">
      {/* content section  */}
      <div className="order-1 lg:order-2 w-full lg:w-4/6 space-y-3">
        <div className="space-y-2 lg:w-4/5 w-full">
          <h6 className="text-[#212EA0] font-bold text-lg">ABOUT UNIVERSITY</h6>
          <h1 className="font-bold text-4xl leading-[2.8rem]">
            Nurturing Tomorrow's Leaders Today
          </h1>
        </div>
        <div className="text-gray-500 font-medium space-y-4 leading-tight">
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>

      {/* video section  */}
      <div className="order-2 lg:order-1 w-full lg:w-2/5 pr-16 xl:ml-20 mt-3 py-9">
        <iframe
          width="100%"
          height="340"
          className="rounded-xl"
          src="https://greatstack.in/assets/college-video-6XtGR-D3.mp4"
          title=" video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default About;
