import outside from "./outside.jpg";

const Outside = ({ on }) => {
  return on ? (
    <img
      src={outside}
      alt="two martini glasses"
      style={{ border: "1px solid black", width: "200px" }}
    />
  ) : (
    <div
      style={{ border: "1px solid black", width: "200px", height: "250px" }}
    />
  );
};

export default Outside;
