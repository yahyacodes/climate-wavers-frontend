import Postcomponent from "./Postcomponent";
import { BsArrowLeft } from "react-icons/bs";
import cwFires from "../assets/cw-fires.png";
import cwFloods from "../assets/cw-floods.png";
import cwPic02 from "../assets/cw-pic-02.png";
import cwPic03 from "../assets/cw-pic-03.png";
import PostActions from "./PostActions";
import UserProfile from "./UserProfile";

const Disaster = () => {
  return (
    <div className="text-2xl text-center pt-1 md:pt-5 ">
      <div className="border-b-2 text-left mx-5 gap-5 flex pb-1 md:pb-3 font-semibold">
        <BsArrowLeft />
        <h2 className="text-lg md:text-xl">Disaster</h2>
      </div>

      <UserProfile />

      <div className="text-gray-600 text-base text-left p-2">
        <p className="pb-2">
          Fire outbreaks are a stark reminder of the destructive potential of
          this elemental force. As climate change and human activities
          contribute to more frequent and severe fire incidents, addressing this
          challenge requires a collective effort..
        </p>
        <p>Mitigating fire risks and managing outbreaks is paramount.</p>

        <img
          src={cwFires}
          alt="Climate Wavers"
          className="mt-2 rounded-tr-3xl rounded-tl-3xl"
        />
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
          Floods are among the most widespread and devastating natural disasters
          on our planet. From overflowing rivers to torrential rainfall,
          floodwaters can wreak havoc on communities, ecosystems, and economies.
        </p>

        <img src={cwFloods} alt="Climate Wavers" className="mt-2" />
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
          A fire outbreak is currently occurring to the north of Lokoja. We urge
          all drivers to exercise caution, and we kindly request that
          individuals in the vicinity call the emergency number for assistance.
        </p>
        <p>
          Join us in demanding that the world`s leaders take meaningful action
          to combat climate change.
        </p>

        <div className="flex gap-4">
          <img src={cwPic02} alt="Climate Wavers" className="mt-2" />
          <img src={cwPic03} alt="Climate Wavers" className="mt-2" />
        </div>
      </div>

      <PostActions />
      <Postcomponent category="happening" />
    </div>
  );
};

export default Disaster;
