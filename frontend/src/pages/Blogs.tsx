import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={getRandomDate()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function getRandomDate() {
  // Default start date (January 1, 1970)
  const startDate = new Date("2024-01-01");

  // Default end date (current date)
  const endDate = new Date();

  // Convert start and end dates to milliseconds
  const startMillis = startDate.getTime();
  const endMillis = endDate.getTime();

  // Get a random date within the range
  const randomMillis = startMillis + Math.random() * (endMillis - startMillis);

  // Create a new Date object from the random milliseconds
  const randomDate = new Date(randomMillis);

  // Format the date as a string
  const dateString = randomDate.toDateString(); // Example: "Fri Mar 22 2024"

  return dateString;
}
