

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <footer className="border-t border-gray-800 border-r-2 px-2 md:px-20 py-4 w-full bg-gray-100 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-800 font-semibold mb-4 md:mb-0">
            &copy; 2024 Edusity. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-gray-800 font-semibold ">
              Terms of Services
            </a>
            <a href="#" className="text-gray-800 font-semibold ">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
