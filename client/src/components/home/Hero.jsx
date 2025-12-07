import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];
  const [logoSvgs, setLogoSvgs] = React.useState([]);

  React.useEffect(() => {
    let mounted = true;
    const fetchSvgs = async () => {
      try {
        const svgs = await Promise.all(
          logos.map(async (url) => {
            try {
              const res = await fetch(url);
              const text = await res.text();
              // Keep original SVGs intact (colorful logos)
              return text;
            } catch (e) {
              return null;
            }
          })
        );
        if (mounted) setLogoSvgs(svgs);
      } catch (e) {
        // ignore
      }
    };
    fetchSvgs();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a href="/">
            <h2 className="text-purple-700 font-semibold">RESUME-Q</h2>
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <a href="#" className="hover:text-purple-600 transition">
              Home
            </a>
            <a href="#features" className="hover:text-purple-600 transition">
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-600 transition"
            >
              Testimonials
            </a>
            <a href="#cta" className="hover:text-purple-600 transition">
              Contact
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-purple-500 hover:bg-purple-700 active:scale-95 transition-all rounded-md text-white"
              hidden={user}
            >
              Get started
            </Link>
            <Link
              to="/app?state=login"
              className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-md text-slate-700 hover:text-slate-900"
              hidden={user}
            >
              Login
            </Link>
            <Link
              to="/app"
              className="hidden md:block px-8 py-2 bg-purple-500 hover:bg-purple-700 active:scale-95 transition-all rounded-full text-white"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#testimonials" className="text-white">
            Testimonials
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-purple-300 blur-[100px] opacity-30"></div>

          {/* Avatars + Stars */}
          <div className="flex items-center mt-24">
            <div className="flex -space-x-3 pr-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-5"
              />
            </div>

            <div>
              <div className="flex ">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-purple-600"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by 10,000+ users</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl text-center mt-4 leading-tight md:leading-tight">
            Building stunning
            <span className="relative bg-linear-to-r from-purple-700 to-[#764de1] bg-clip-text text-transparent">
              {" "}
              resumes
              <div className="z-10 absolute bottom-0 left-0 w-full">
                <svg
                  viewBox="0 0 274 10"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <g clipPath="url(#clip0_7800_845)">
                    <g clipPath="url(#clip1_7800_845)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M270.35 8.05003C166.243 2.31162 49.189 6.91915 3.70057 9.93972C2.32357 10.0312 1.12538 9.11882 1.02434 7.90197C0.923295 6.68511 1.95766 5.62453 3.33467 5.53309C48.9581 2.50355 166.258 -2.11573 270.67 3.63956C272.049 3.71549 273.094 4.76438 273.006 5.98231C272.917 7.20022 271.729 8.12598 270.35 8.05003Z"
                        fill="url(#paint0_linear_7800_845)"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_7800_845"
                      x1="25.986"
                      y1="8.76207"
                      x2="210.015"
                      y2="-91.3561"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3D1DFF" />
                      <stop offset="0.223953" stopColor="#6147FF" />
                      <stop offset="0.46354" stopColor="#D451FF" />
                      <stop offset="0.750004" stopColor="#EC458D" />
                      <stop offset="1" stopColor="#FFCA8B" />
                    </linearGradient>
                    <clipPath id="clip0_7800_845">
                      <rect
                        width="272"
                        height="8"
                        fill="white"
                        transform="translate(0.976562 1.96387) rotate(-0.405928)"
                      />
                    </clipPath>
                    <clipPath id="clip1_7800_845">
                      <rect
                        width="272"
                        height="8"
                        fill="white"
                        transform="translate(0.976562 1.96387) rotate(-0.405928)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </span>
            <br />
            that will land you interviews with
            <span className="relative bg-linear-to-r from-purple-700 to-[#764de1] bg-clip-text text-transparent">
              {" "}
              Resume-Q.
            </span>
          </h1>

          <p className="max-w-md text-center text-base my-7">
            Create professional, impactful resumes in minutes—designed to help
            you stand out.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ">
            <Link
              to="/app"
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-md px-9 h-12 m-1 ring-offset-2 ring-1 ring-purple-400 flex items-center transition-colors"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <button className="flex items-center gap-2 border border-slate-400 hover:bg-purple-50 transition rounded-md px-7 h-12 text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file size-5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>Templates</span>
            </button>
          </div>

          <p className="py-6 text-slate-600 mt-14">
            Trusting by leading brands, including
          </p>

          <div
            className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4"
            id="logo-container"
          >
            {logos.map((logo, index) => {
              const svg = logoSvgs && logoSvgs[index];
              return svg ? (
                <div
                  key={index}
                  className="h-6 w-auto max-w-xs"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              ) : (
                <img
                  key={index}
                  src={logo}
                  alt="logo"
                  className="h-6 w-auto max-w-xs"
                />
              );
            })}
          </div>
        </div>
      </div>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
