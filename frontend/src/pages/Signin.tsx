import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
export const Signin = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
};
