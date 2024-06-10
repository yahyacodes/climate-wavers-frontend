import Postcomponent from "./Postcomponent";
import { BsArrowLeft } from "react-icons/bs";
import waversBot from "../assets/wavers-bot-logo.png";
import PostActions from "./PostActions";

const AiAnalysis = () => {
  return (
    <div className="text-2xl pt-1 md:pt-5 ">
      <div className="border-b-2 text-left mx-5 gap-5 flex pb-1 md:pb-3 font-semibold">
        <BsArrowLeft />
        <h2 className="text-lg md:text-xl">Ai analysis</h2>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img className="w-10 h-10 rounded-full" src={waversBot} alt="" />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Wavers Bot</div>
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
      <Postcomponent />

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img className="w-10 h-10 rounded-full" src={waversBot} alt="" />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Wavers Bot</div>
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
      <Postcomponent />

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img className="w-10 h-10 rounded-full" src={waversBot} alt="" />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Wavers Bot</div>
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
      <Postcomponent />

      <div className="grid grid-flow-row-dense grid-cols-3  p-4">
        <div className="col-span-2">
          <div className="flex gap-4">
            <img className="w-10 h-10 rounded-full" src={waversBot} alt="" />
            <div className="font-medium">
              <div className="text-gray-900 text-base">Wavers Bot</div>
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
      <Postcomponent category="happening" />
    </div>
  );
};

export default AiAnalysis;
