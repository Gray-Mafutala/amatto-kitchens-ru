import CoverArticle1 from "@/assets/images/cover-article-1.png";
import CoverArticle2 from "@/assets/images/cover-article-2.png";
import CoverArticle3 from "@/assets/images/cover-article-3.png";
import Image from "next/image";
import Link from "next/link";

const blogArticles = [
  {
    cover: CoverArticle1,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    summary: "рассказывает дизайнер Светлана...",
  },
  {
    cover: CoverArticle2,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    summary: "рассказывает дизайнер Светлана...",
  },
  {
    cover: CoverArticle3,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    summary: "рассказывает дизайнер Светлана...",
  },
];

const ContainerBlogArticles = () => {
  return (
    <div
      className="grid grid-cols-1 tablet:grid-cols-2 laptopM:grid-cols-3 gap-6
      w-full"
    >
      {blogArticles.map(({ cover, date, title, summary }) => (
        <Link
          key={title}
          href="/blog/article"
          className="bg-gray-100 rounded-[10px] p-5 flex flex-col
          shadow-[0_2px_8px_0px_#00000026] cursor-pointer border-2
          border-transparent hover:border-primary-yellow group
          duration-300"
        >
          <Image
            src={cover}
            alt={title}
            className="rounded-[10px] w-full max-h-80 object-cover
            group-hover:scale-105 duration-300"
          />

          <span className="mt-5 capitalize text-sm">{date}</span>

          <h3 className="mt-4 font-playfair-display font-bold text-xl mobileXL:text-2xl">
            {title}
          </h3>

          <p className="mt-2 text-base mobileXL:text-lg">{summary}</p>

          <button
            className="mt-6 px-5 py-2 capitalize bg-primary-yellow rounded-[28px]
            hover:bg-transparent duration-300 self-start"
          >
            Прочесть за 7 минут
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ContainerBlogArticles;
