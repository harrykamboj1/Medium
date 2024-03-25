import { AppBar } from "./AppBar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Fullblog = ({ blog, date }: { blog: Blog; date: string }) => {
  const navigate = useNavigate();
  const deleteArticle = () => {
    axios
      .delete(`${BACKEND_URL}/api/v1/blog/delete/${blog.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/blogs");
      })
      .catch((e) => {
        console.log(e);
        alert(e.response.message);
      });
  };
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="flex justify-between mt-2">
              <div className="text-slate-500 pt-2">{date}</div>
              <button
                onClick={deleteArticle}
                type="button"
                className="mr-6 text-white bg-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Delete Article
              </button>
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  {generateRandomQuote()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Life is either a daring adventure or nothing at all. – Helen Keller",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "It is never too late to be what you might have been. – George Eliot",
];

// Function to generate a random quote
function generateRandomQuote() {
  // Generate a random index within the range of the quotes array
  const index = Math.floor(Math.random() * quotes.length);
  // Return the randomly selected quote
  return quotes[index];
}
