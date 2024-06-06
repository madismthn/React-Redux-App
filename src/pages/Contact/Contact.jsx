import s from "./style.module.css";
import pageStyle from "../style.module.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className={pageStyle.title}>Contact</h1>
      <div className={pageStyle.content}>
        <ul className={s.contactList}>
          <li>
            <h3>Phone number</h3>
            <div>8 988 999 88 99</div>
          </li>
          <li>
            <h3>Email</h3>
            <div>pochta@mail.ru</div>
          </li>
          <li>
            <h3>Address</h3>
            <div>Street 1</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
