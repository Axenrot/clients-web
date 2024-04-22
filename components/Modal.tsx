import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal({
  title,
  subtitle,
  buttonIs,
  className = "",
  funcButton,
  close,
  buttonPlaceholder = "",
  refuseButtonPlaceholder = "",
}: {
  title: string;
  subtitle: string;
  buttonIs: boolean;
  className: string;
  funcButton: () => void;
  close: () => void;
  buttonPlaceholder: string;
  refuseButtonPlaceholder: string;
}) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen fadein z-9999">
      <div
        className={`${
          className
            ? className
            : "bg-gray-gray1 text-white border-2 border-gray-200/5"
        } bg-opacity-95 m-5 flex flex-col min-w-[350px] sm:w-fit lg:max-w-[50%] text-center h-fit max-h-[90%] shadow-lg shadow-black/20 z-100 rounded-xl p-4`}
      >
        <div className="flex justify-end w-full text-[25px]">
          <AiFillCloseCircle
            onClick={close}
            className={`${
              className.includes("bg-gray-gray1")
                ? "hover:text-red-red1"
                : "text-gray-200 hover:text-red-red1 bg-gray-gray1 hover:bg-white rounded-full"
            } transition-all duration-300 cursor-pointer shadow-md shadow-black/20`}
          />
        </div>
        <div className="flex flex-col justify-between w-full h-full p-3 ">
          {title && <div className="text-lg">{title}</div>}
          {subtitle && (
            <div className="flex-grow overflow-y-auto text-base italic scroll2 h-fit max-h-[350px]">
              {subtitle}
            </div>
          )}
          {buttonIs && (
            <div className="flex justify-around w-full mt-6 text-white">
              <button
                onClick={() => {
                  funcButton();
                  close();
                }}
                className="px-4 py-2 font-semibold transition-all duration-300 border rounded-md shadow-md border-green-700/30 shadow-black/20 hover:bg-green-700 bg-green-green1"
              >
                {buttonPlaceholder ? buttonPlaceholder : "Sim"}
              </button>
              {refuseButtonPlaceholder != "disabled" && (
                <button
                  onClick={close}
                  className="px-4 py-2 transition-all duration-300 border rounded-md shadow-md border-red-700/30 shadow-black/20 hover:bg-red-700 bg-red-red1"
                >
                  {refuseButtonPlaceholder ? refuseButtonPlaceholder : "Não"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/*Modal Background*/}
      <div
        onClick={close}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
      />
    </div>
  );
}
