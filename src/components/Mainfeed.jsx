import Postcomponent from "./Postcomponent";
import cwPic01 from "../assets/cw-pic-01.png";
import PostActions from "./PostActions";
import UserProfile from "./UserProfile";
import Rectangle from "../assets/Rectangle28.png";
import { BsArrowLeft } from "react-icons/bs";

const Mainfeed = () => {
  return (
    <div className="text-2xl pt-1 md:pt-5 ">
      <div className="border-b-2 text-left mx-5 gap-5 flex pb-1 md:pb-3 font-semibold">
        <BsArrowLeft />
        <h2 className="text-lg md:text-xl ">Post</h2>
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
      <Postcomponent />

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src="../../pic1.png"
              alt=""
            />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Jese Leos</div>
              <div className="flex gap-4">
                <div className="text-xs text-gray-500">
                  @titisimon21. 6h ago
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <button className="bg-black text-xs text-white font-semibold py-2 px-6 ml-2  rounded-full">
            follow
          </button>
        </div>
      </div>

      <div className="text-gray-600 text-base text-left p-2">
        <p className="">
          Our climate protest is not merely an expression of frustration; it`s a
          collective call to action rooted in science, empathy, and the shared
          desire to protect our planet.
        </p>
      </div>

      <PostActions />
      <Postcomponent />

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src="../../pic1.png"
              alt=""
            />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Jese Leos</div>
              <div className="flex gap-4">
                <div className="text-xs text-gray-500">
                  @titisimon21. 6h ago
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <button className="bg-black text-xs text-white font-semibold py-2 px-6 ml-2  rounded-full">
            follow
          </button>
        </div>
      </div>

      <div className="text-gray-600 text-base text-left p-2">
        <p className="">
          Our climate protest is not merely an expression of frustration; it`s a
          collective call to action rooted in science, empathy, and the shared
          desire to protect our planet.
        </p>
      </div>

      <PostActions />
      <Postcomponent />

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src="../../pic1.png"
              alt=""
            />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Jese Leos</div>
              <div className="flex gap-4">
                <div className="text-xs text-gray-500">
                  @titisimon21. 6h ago
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <button className="bg-black text-xs text-white font-semibold py-2 px-6 ml-2  rounded-full">
            follow
          </button>
        </div>
      </div>

      <div className="text-gray-600 text-base text-left p-2">
        <p className="pb-2">
          Our climate protest is not merely an expression of frustration; it`s a
          collective call to action rooted in science, empathy, and the shared
          desire to protect our planet.
        </p>

        <img src={Rectangle} alt="Climate Wavers" className="mt-2" />
      </div>

      <PostActions />
      <Postcomponent />
    </div>
  );
};

export default Mainfeed;
