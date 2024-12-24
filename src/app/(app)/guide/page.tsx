import Container from "@/components/UI/Container";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your  ",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Guide() {
  return (
    <div className="mt-10 px-6 sm:mt-16 lg:px-8">
      <Container>
        <div className="mx-auto max-w-[700px] ">
          <h1 className="text-4xl md:text-5xl text-center font-semibold tracking-tight text-secondary xl:text-7xl">
            Guide
          </h1>
          <div className="mt-10 lg:mt-14 transform: none; height: 100%;">
            {posts.map((post) => (
              <section key={post.id} className="your-section-class">
                <div>
                  <a className="flex flex-col md:flex-row gap-8 p-2 sm:p-4 mb-8 border border-gray-300 scale-100 hover:scale-[1.025] hover:shadow-[0px_0px_20px_2px_#dcdcdc] transition-all rounded-lg">
                    <div>
                      <img
                        src="https://res.cloudinary.com/dno9rw4ax/image/upload/v1717887190/Screenshot_2024_06_09_at_3_51_13_AM_ab9234faa3.png"
                        alt="WhatsApp Notes feature"
                        className="rounded-md w-full md:w-[300px] h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col justify-between md:py-4">
                      <p className="text-gray-600">Guide</p>
                      <h2 className="text-2xl xl:text-4xl text-black xl:leading-[50px] font-poppins font-semibold hover:text-secondary my-4">
                        {post.title}
                      </h2>
                      <p className="text-gray-600">Jun 9, 2024</p>
                    </div>
                  </a>
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
