import { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import RoomChat from "./RoomChat";

const Accordion = ({ rooms }: { rooms: string[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="top-16 left-0 w-full absolute">
      {rooms.map((room, index) => (
        <div key={index} className="relative mb-px">
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full h-full p-4 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-t-sm dark:border-gray-700 transition-all ease-in-out duration-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => handleClick(index)}>
              <span>{room}</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  stroke-LineCap="round"
                  stroke-LineCoin="round"
                  stroke-Width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={` relative overflow-hidden h-[80vh] w-full transition-all ease-in-out duration-500 ${
              activeIndex === index ? "" : "hidden"
            }`}
            aria-labelledby={`accordion-collapse-heading-${index}`}>
            <div className="relative h-full w-full ">
              <div className="p-5 h-full border w-full border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ">
                {isChatOpen && <RoomChat />}
                <AiOutlineWechat
                  className="text-2xl cursor-pointer absolute right-5 bottom-5 text-white"
                  onClick={() => setIsChatOpen(!isChatOpen)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
