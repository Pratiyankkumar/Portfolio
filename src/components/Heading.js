export function Heading({ upperText, belowText, fontSize }) {
  return (
    <h1 className={`text-white sm:text-6xl text-4xl font-bold xmd:text-8xl`}>
      {upperText} <span className="block text-color1">{belowText}</span>
    </h1>
  );
}
