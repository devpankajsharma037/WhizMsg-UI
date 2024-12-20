import Container from "@/components/UI/Container";

export default function HomePage() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-primary-light px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto  text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-secondary sm:text-7xl">
            Help
          </h2>
          <p className="mt-8 text-lg font-medium text-balance sm:text-xl/8">
            Have any questions? We’re here to assist you.
          </p>
          <div className="mt-5 grid grid-cols-1 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="rounded-md outline-none bg-white w-full py-2 pr-3 text-base text-gray-900 placeholder:text-gray-400 pl-4 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <Container>
        <div className="flex justify-center mx-auto my-10 max-w-[500px]">
          {[
            "All",
            "Others",
            "Broadcasting",
            "Account",
            "Payments",
            "Returns",
          ].map((tab) => {
            return (
              <a
                key={tab}
                className={"rounded-md px-3 py-2 text-lg  font-medium"}
              >
                {tab}
              </a>
            );
          })}
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center justify-between p-4 bg-[#f6f6f6] rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-secondary font-semibold">
              Can ChatGPT respond in different languages on WhatsApp Business?
            </span>
            <div className="flex items-center justify-center w-6 h-6 bg-secondary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
