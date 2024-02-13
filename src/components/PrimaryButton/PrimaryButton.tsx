import "./PrimaryButton.scss";

interface props {
  text: string;
  background: string;
}

export const PrimaryButton: React.FC<props> = (props) => {
  return (
    <button
      style={{ backgroundColor: props.background }}
      className="primary-button-main-div"
    >
      {props.text}
    </button>
  );
};
