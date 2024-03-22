import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"adsf"}
            title={"title of the blog"}
            content={"Content of the blog"}
            publishedDate="2nd Feb 2024"
          />
        </div>
      </div>
    </div>
  );
};
