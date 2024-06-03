import GetFreeKitchenDesignSection from "@/app/_components/common/GetFreeKitchenDesignSection";
import SlidingArticleImg from "@/app/_components/common/SlidingArticleImg";
import ArticleContentImg from "@/assets/images/article-content-img1.png";
import Image from "next/image";

const ArticlePage = () => {
  return (
    <main
      className="grow flex flex-col gap-y-6 mobileXL:gap-y-8 tablet:gap-y-12
      laptop:gap-y-16"
    >
      {/* hero section  */}
      <section
        className="section-full-w bg-cover-article bg-cover bg-center
        bg-no-repeat flex justify-center items-center text-center py-28"
      >
        <h1
          className="uppercase text-white font-playfair-display text-[32px]
          mobileL:text-4xl mobileXL:text-6xl tablet:text-7xl/tight font-extrabold"
        >
          Из чего складывается стоимость кухни?
        </h1>
      </section>

      {/* article content */}
      <article className="flex flex-col gap-y-10 mobileXL:gap-y-16 laptop:gap-y-20">
        <h2 className="title-2-section max-w-[520px] mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur
        </h2>

        {/* block 1 */}
        <div
          className="max-w-[720px] laptopM:max-w-none mx-auto flex flex-col
          gap-y-6 laptopM:flex-row laptopM:items-center gap-x-10"
        >
          <p
            className="w-full mobileXL:text-lg bg-gray-100 rounded-[10px]
            p-4 mobileXL:p-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque sit amet porttitor eget dolor morbi non arcu. Lorem sed
            risus ultricies tristique nulla aliquet. Fames ac turpis egestas
            maecenas pharetra convallis posuere morbi.
            <br />
            <br />
            Volutpat blandit aliquam etiam erat velit scelerisque in. Netus et
            malesuada fames ac turpis egestas integer. Id neque aliquam
            vestibulum morbi blandit cursus. Et malesuada fames ac turpis
            egestas. Pellentesque dignissim enim sit amet. Turpis egestas sed
            tempus urna et pharetra. At imperdiet dui accumsan sit amet nulla
            facilisi morbi tempus. Ac orci phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt. Pellentesque dignissim enim sit
            amet venenatis urna. Turpis cursus in hac habitasse platea dictumst
            quisque sagittis purus.
          </p>

          <div className="w-full -order-1 laptopM:order-none">
            <Image
              src={ArticleContentImg}
              alt="Cover article about..."
              className="w-full max-h-[460px] object-cover rounded-[10px]"
            />
          </div>
        </div>

        {/* block 2 */}
        <div
          className="max-w-[720px] laptopM:max-w-none mx-auto flex flex-col
          gap-y-6 laptopM:flex-row laptopM:items-center gap-x-10"
        >
          <p
            className="w-full mobileXL:text-lg bg-gray-100 rounded-[10px]
            p-4 mobileXL:p-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque sit amet porttitor eget dolor morbi non arcu. Lorem sed
            risus ultricies tristique nulla aliquet. Fames ac turpis egestas
            maecenas pharetra convallis posuere morbi.
            <br />
            <br />
            Volutpat blandit aliquam etiam erat velit scelerisque in. Netus et
            malesuada fames ac turpis egestas integer. Id neque aliquam
            vestibulum morbi blandit cursus. Et malesuada fames ac turpis
            egestas. Pellentesque dignissim enim sit amet. Turpis egestas sed
            tempus urna et pharetra. At imperdiet dui accumsan sit amet nulla
            facilisi morbi tempus. Ac orci phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt. Pellentesque dignissim enim sit
            amet venenatis urna. Turpis cursus in hac habitasse platea dictumst
            quisque sagittis purus.
          </p>

          <div className="w-full -order-1">
            <Image
              src={ArticleContentImg}
              alt="Cover article about..."
              className="w-full max-h-[460px] object-cover rounded-[10px]"
            />
          </div>
        </div>

        {/* block 3 */}
        <div className="flex flex-col items-center gap-y-10">
          {/* slider */}
          <SlidingArticleImg />

          {/* texts */}
          <p
            className="max-w-[720px] mobileXL:text-lg bg-gray-100 rounded-[10px]
            p-4 mobileXL:p-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque sit amet porttitor eget dolor morbi non arcu. Lorem sed
            risus ultricies tristique nulla aliquet. Fames ac turpis egestas
            maecenas pharetra convallis posuere morbi.
            <br />
            <br />
            Arcu felis bibendum ut tristique. Vitae elementum curabitur vitae
            nunc sed. Viverra justo nec ultrices dui sapien. Sed risus ultricies
            tristique nulla aliquet enim tortor. Fringilla est ullamcorper eget
            nulla facilisi etiam dignissim diam quis. Volutpat blandit aliquam
            etiam erat velit scelerisque in.
          </p>
        </div>
      </article>

      {/* GetFreeKitchenDesignSection */}
      <GetFreeKitchenDesignSection />
    </main>
  );
};

export default ArticlePage;
