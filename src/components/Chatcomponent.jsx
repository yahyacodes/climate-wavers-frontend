import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Chatcomponent = () => {
  const [textValue, setTextValue] = useState("");
  const [isSubbmited, setIsSubbmited] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [prevMessages, setPrevMessages] = useState([]);

  const produceMessage = async () => {
    try {
      await fetch(`${process.env.REACT_APP_KAFKA_URL}/${user_id}/produceMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textValue }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_CHATBOT}/${user_id}/getMessage`);
      const data = await response.json();

      // Update receivedMessages state with the fetched messages
      setPrevMessages(data.messages);
    } catch (error) {
      console.error(error);
    }
  };
  fetchMessages();

  useEffect(() => {
    // Fetch messages from the kafka consumer endpoint
    const consumeMessages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_KAFKA_URL}/${user_id}/consumeMessages`);
        const data = await response.json();

        // Update receivedMessages state with the fetched messages
        setReceivedMessages(data.messages);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchMessages function
    consumeMessages();
  }, []);
  return (
    <div className="max-h-fit h-[90%] flex flex-col justify-between">
      <div className="overflow-auto">
        {prevMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        {isSubbmited ? textValue : null}
		{receivedMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div className="bg-graylight p-1 mx-5 md:p-2 border-2 border-graydark  rounded-full flex flex-row items-center ">
        <input
          className="justify-self-end bg-transparent w-[80%] focus:outline-0 focus:bg-gray-200 focus:rounded-full p-2 text-black "
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
          placeholder="Ask waverx a question."
        />{" "}
        <AiOutlineSend
          size={25}
          onClick={() => {
            setIsSubbmited(true);
            produceMessage();
          }}
          className="items-end cursor-pointer "
          type="submit"
        />
      </div>
    </div>
  );
};

export default Chatcomponent;
