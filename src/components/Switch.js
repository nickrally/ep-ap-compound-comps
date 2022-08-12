import "./Switch.css";
const Switch = ({ on, onClick }) => {
  return (
    <input class="switch" type="checkbox" checked={on} onClick={onClick} />
  );
};
export default Switch;
