import s from "./style.module.css";

export const Button = ({ children, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};
