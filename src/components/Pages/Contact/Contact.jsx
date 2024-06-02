import s from "./style.module.css";
import pageStyle from "../style.module.css";

export default function Contact() {
  return (
    <>
      <h1 className={pageStyle.title}>Contact</h1>
      <div className={pageStyle.content}>
        <ul className={s.contactList}>
          <li>
            <h3>Телефон</h3>
            <div>8 988 999 88 99</div>
          </li>
          <li>
            <h3>Почта</h3>
            <div>pochta@mail.ru</div>
          </li>
          <li>
            <h3>Адрес</h3>
            <div>Дахадаева 88к2</div>
          </li>
        </ul>
      </div>
    </>
  );
}
