import { openLink } from "./openLink";

export function ContactLinks({ name, url, redirectUrl }) {
  return (
    <div
      onClick={() => openLink(redirectUrl)}
      className="flex relative flex-row mb-5 sm:ml-4 items-center cursor-pointer w-80 sm:w-96 mt-3 rounded-md shadow-lg transition-transform transform hover:shadow-2xl hover:-translate-y-2"
    >
      <img
        src={url}
        alt=""
        className="w-16 h-16 rounded-md shadow-md shadow-blue-600"
      />
      <p className="text-white text-xl font-bold ml-4">{name}</p>
      <img
        className="w-7 h-7 absolute right-6 sm:ml-48"
        src="images/arrow.svg"
        alt=""
      />
    </div>
  );
}
