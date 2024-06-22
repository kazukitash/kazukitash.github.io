import Link from "next/link";
import ZenRSS from "@/models/zenn_rss";

const Blog = async () => {
  const zennRSS = new ZenRSS();
  const blogs = await zennRSS.fetch();

  return (
    <div className="md:container mx-auto px-3 md:px-10">
      <h2 className="text-xl w-max mt-4 mb-2 border-b-2 border-accent">Blog</h2>
      {blogs.map((blog) => {
        return (
          <Link
            href={blog.link}
            key={blog.key}
            className="flex items-center py-1 hover:text-accent"
          >
            <div className="flex-none text-center font-bold w-32">
              {blog.date}
            </div>
            <div className="ml-1">{blog.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
