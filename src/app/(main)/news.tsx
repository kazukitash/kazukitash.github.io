import Image from "next/image";
import { news } from "@/constants/news";

const News = () => {
  return (
    <div className="md:container mx-auto px-3 md:px-10">
      <h2 className="text-xl w-max mt-4 mb-2 border-b-2 border-accent">News</h2>
      {news.map((article) => {
        return (
          <div
            key={article.date}
            className="grid [grid-template-areas:'i_i''d_c'] md:[grid-template-areas:'d_i_c'] md:grid-cols-[8rem_min-content_auto] items-center md:py-1"
          >
            <div className="[grid-area:d] w-32 font-bold text-center">
              {article.date}
            </div>
            <div className="[grid-area:i] mt-4 mb-1 md:w-32 md:m-0">
              <Image
                src={article.image}
                alt={"news-" + article.date}
                width={1800}
                height={360}
                sizes="100vw"
                className="rounded-lg md:rounded-full w-full h-auto"
              />
            </div>
            <div className="[grid-area:c] mr-2 md:ml-4 md:m-0">
              {article.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
