import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Campus from "@/components/Campus";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

import Program from "@/components/Program";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Program />
      <About />
      <Campus />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
