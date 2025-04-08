import icon from "./icon.svg";
const CheckSquareBroken = (): JSX.Element => {
  return (
    <div className="relative w-6 h-6">
      {" "}
      <img
        className="absolute w-[21px] h-5 top-0.5 left-0.5"
        alt="Icon"
        src={icon}
      />{" "}
    </div>
  );
};
export default CheckSquareBroken;