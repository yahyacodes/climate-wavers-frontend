import Postcomponent from "./Postcomponent";
import UserProfile from "./UserProfile";
import PostActions from "./PostActions";
import cwPic01 from "../assets/cw-pic-01.png";
import lamboCar from "../assets/lamboCar.png";
import { BsArrowLeft } from "react-icons/bs";

const Education = () => {
  return (
    <div className="text-2xl text-center pt-1 md:pt-5 ">
      <div className="border-b-2 text-left mx-5 gap-5 flex pb-1 md:pb-3 font-semibold">
        <BsArrowLeft />
        <h2 className="text-lg md:text-xl">Education</h2>
      </div>

      <UserProfile />

      <div className="text-gray-600 text-base text-left p-2">
        <p className="pb-2">
          The climate protest is not just an event; it`s a call to protect the
          world we all share. It`s a call to ensure that future generations
          inherit a planet where clean air, safe water, and a stable climate.
        </p>
        <p>
          Join us in demanding that the world`s leaders take meaningful action
          to combat climate change.
        </p>

        <img src={cwPic01} alt="Climate Wavers" className="mt-2" />
      </div>

      <PostActions />
      <Postcomponent category="education" />

      <UserProfile />

      <div className="text-gray-600 text-base text-left p-2">
        <p className="pb-2">
          AI is more than technology; it represents the ingenuity and limitless
          possibilities of the human mind. It is a tool for solving complex
          problems, enhancing our lives, and forging a path to a future limited
          only by our imagination.
        </p>
        <p>
          The potential of AI is boundless. It will continue to revolutionize
          industries.
        </p>
      </div>

      <PostActions />
      <Postcomponent category="education" />

      <UserProfile />

      <div className="text-gray-600 text-base text-left p-2">
        <p className="pb-2">
          Lamborghini is more than just a car; it`s a symbol of aspiration,
          ambition, and an unrelenting pursuit of excellence. With a legacy that
          spans decades, an array of iconic models.
        </p>

        <img src={lamboCar} alt="Climate Wavers" className="mt-2 rounded-2xl" />
      </div>

      <PostActions />
      <Postcomponent category="education" />
    </div>
  );
};

export default Education;
