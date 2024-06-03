import React from "react";
import HeroSection from "./HeroSection";
import ContainerBlogArticles from "@/app/_components/common/ContainerBlogArticles";
import GetFreeKitchenDesignSection from "@/app/_components/common/GetFreeKitchenDesignSection";

const BlogPage = () => {
  return (
    <main
      className="grow flex flex-col gap-y-6 mobileXL:gap-y-8 tablet:gap-y-12
      laptop:gap-y-16"
    >
      <HeroSection />
      <section className="flex flex-col gap-y-6">
        <ContainerBlogArticles />
        <ContainerBlogArticles />
      </section>
      <GetFreeKitchenDesignSection />
    </main>
  );
};

export default BlogPage;
