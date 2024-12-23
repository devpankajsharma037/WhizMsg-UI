import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/UI/Container";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-primary-light px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto  text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-secondary sm:text-7xl">
            Get in Touch with Us! 🚀
          </h2>
          <p className="mt-8 text-lg font-medium text-balance sm:text-xl/8">
            Got questions or issues? We're here to help! Reach out for platform
            guidance or sales inquiries. Message us now!
          </p>
        </div>
      </div>
      <Container>
        <div className="bg-[#f5f5f5] p-5 my-10 rounded-xl">
          <div className="relative rounded-xl overflow-hidden isolate bg-white">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
              <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-20 bg-primary-light">
                <div className="mx-auto max-w-xl lg:mx-0">
                  <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2" />
                  <h2 className="text-pretty text-4xl font-semibold tracking-tight text-secondary  sm:text-5xl">
                    Get in touch
                  </h2>
                  <p className="mt-6 text-lg/8 text-secondary">
                    Proin volutpat consequat porttitor cras nullam gravida at.
                    Orci molestie a eu arcu. Sed ut tincidunt integer elementum
                    id sem. Arcu sed malesuada et magna.
                  </p>
                  <dl className="mt-10 space-y-4 text-base/7 text-secondary">
                    <div className="flex ">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                      </dt>
                      <dd>
                        545 Mavis Island
                        <br />
                        Chicago, IL 99191
                      </dd>
                    </div>
                    <div className="flex ">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                      </dt>
                      <dd>
                        <a
                          href="tel:+1 (555) 234-5678"
                          className="hover:text-secondary"
                        >
                          +1 (555) 234-5678
                        </a>
                      </dd>
                    </div>
                    <div className="flex ">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                      </dt>
                      <dd>
                        <a
                          href="mailto:hello@example.com"
                          className="hover:text-secondary"
                        >
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <form
                action="#"
                method="POST"
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-20"
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        Phone number
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="phone-number"
                          name="phone-number"
                          type="tel"
                          autoComplete="tel"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <PrimaryButton>Submit</PrimaryButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
