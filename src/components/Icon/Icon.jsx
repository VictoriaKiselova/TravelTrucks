import sprite from "../../Image/Icons.svg";
import css from "./Icon.module.css";

const Icon = ({ iconId }) => {
  return (
    <svg className={css.icon}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

export default Icon;
