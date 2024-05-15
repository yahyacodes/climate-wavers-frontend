import { BsBookmark } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa6";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";

const PostActions = () => {
  return (
    <div className="flex gap-20 p-4 text-gray-500 cursor-pointer">
      <div className="flex gap-2">
        <BsSuitHeart />
        <p className="text-lg -my-1">285</p>
      </div>

      <div className="flex gap-2">
        <FaRetweet />
        <p className="text-lg -my-1">76</p>
      </div>

      <div className="flex gap-2">
        <BsChat />
        <p className="text-lg -my-1">286</p>
      </div>

      <div>
        <BsBookmark />
      </div>

      <div>
        <AiOutlineEllipsis />
      </div>
    </div>
  );
};

export default PostActions;
