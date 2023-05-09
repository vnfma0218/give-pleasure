import Image from 'next/image';
const BlogPage = () => {
  return (
    <div className="px-8 py-10 relative">
      <div className="mx-4">
        <main className="max-w-screen-xl mx-auto">
          <section>
            <h3>Books</h3>
            <div>
              <ul className="flex">
                <li className="flex flex-col">
                  <div className="relative w-60 h-32 ">
                    <Image
                      src={'/images/pic.webp'}
                      fill
                      objectFit="cover"
                      alt="이미지"
                    ></Image>
                  </div>

                  <div className="w-60 p-7">
                    <p className="text-xs font-bold">
                      생각한대로 모든 결과가 이루어진다면?
                    </p>
                  </div>
                </li>
                <li className="w-40 relative">
                  <Image
                    src={'/images/pic.webp'}
                    fill
                    objectFit="cover"
                    alt="이미지"
                  ></Image>

                  <div>
                    <p>생각한대로 모든 결과가 이루어진다면?</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
