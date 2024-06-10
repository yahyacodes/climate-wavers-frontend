import Postcomponent from "./Postcomponent";
import { BsArrowLeft } from "react-icons/bs";
import waversBot from "../assets/wavers-bot-logo.png";
import { AiOutlineSend } from "react-icons/ai";

const WaverX = () => {
  return (
    <div className="text-2xl pt-1 md:pt-5 ">
      <div className="border-b-2 mx-5 gap-5 flex pb-1 md:pb-3 font-semibold">
        <BsArrowLeft />
        <h2 className="text-lg md:text-xl">WaverX</h2>
      </div>

      <div className="flex gap-5 p-5">
        <div className="w-20 h-20">
          <img className="rounded-full" src={waversBot} alt="" />
        </div>

        <div>
          <p className="rounded-md text-left bg-green text-white text-lg p-2">
            Hey there! I am your AI assistant ---- Climate waver AI will assist
            you with any climate questions you have! just ask me!
          </p>

          <p className="text-left text-sm mt-2 font-semibold">
            You may want to ask.
          </p>

          <div className="border border-gray-200 rounded-md text-left text-sm mt-2 p-2">
            What is climate change, and what are its primary causes?
          </div>
          <div className="border border-gray-200 rounded-md text-left text-sm mt-2 p-2">
            How can agriculture be made more sustainable to address climate
            change?
          </div>
          <div className="border border-gray-200 rounded-md text-left text-sm mt-2 p-2">
            Explain the concept of climate resilience.
          </div>
          <div className="border border-gray-200 rounded-md text-left text-sm mt-2 p-2">
            Tell me about the role of oceans in climate regulation and their
            current health.
          </div>
        </div>
      </div>

      <footer className="mt-64 p-4 shadow-current">
        <div className="bg-white shadow rounded-md p-5 max-w-xl">
          <div className="grid grid-cols-3 gap-56">
            <div className="col-span-2">
              <p className="text-left text-sm text-gray-500">
                Ask a question....
              </p>
            </div>

            <div>
              <AiOutlineSend className="text-gray-500" />
            </div>
          </div>
        </div>
      </footer>
      <Postcomponent category="waverx" />
    </div>
  );
};

export default WaverX;
