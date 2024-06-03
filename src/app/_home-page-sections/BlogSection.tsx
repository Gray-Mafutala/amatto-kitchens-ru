import CoverArticle1 from "@/assets/images/cover-article-1.png";
import CoverArticle2 from "@/assets/images/cover-article-2.png";
import CoverArticle3 from "@/assets/images/cover-article-3.png";
import Image from "next/image";
import Link from "next/link";
import ContainerBlogArticles from "../_components/common/ContainerBlogArticles";

const blogArticles = [
  {
    cover: CoverArticle1,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    summary: "рассказывает дизайнер Светлана",
  },
  {
    cover: CoverArticle2,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    summary: "рассказывает дизайнер Светлана",
  },
  {
    cover: CoverArticle3,
    date: "март 11, 2022",
    title: "Из чего складывается стоимость кухни?",
    summary: "рассказывает дизайнер Светлана",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="flex flex-col items-center gap-y-10 mobileXL:gap-y-16
      laptop:gap-y-20"
    >
      {/* section title */}
      <h2 className="title-2-section">Блог</h2>

      {/* container blog articles */}
      <ContainerBlogArticles />
    </section>
  );
};

export default BlogSection;
