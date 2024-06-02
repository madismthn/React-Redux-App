import pageStyle from "../style.module.css";
export default function About() {
  return (
    <>
      <h1 className={pageStyle.title}>About</h1>
      <div className={pageStyle.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        expedita quo cum tempora magnam libero assumenda aperiam dolorem, non
        nisi laborum placeat culpa itaque architecto doloremque inventore quae
        veritatis error!
      </div>
    </>
  );
}
