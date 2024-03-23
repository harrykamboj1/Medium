import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks";
import { useLocation, useParams } from "react-router-dom";

export const Blog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedDate = searchParams.get("date");

  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog || !encodedDate) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Fullblog blog={blog} date={encodedDate} />
    </div>
  );
};
