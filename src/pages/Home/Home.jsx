import pageStyle from "../style.module.css";
export default function Home() {
  return (
    <div className="home">
      <h1 className={pageStyle.title}>Home</h1>
      <div className={pageStyle.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        expedita quo cum tempora magnam libero assumenda aperiam dolorem, non
        nisi laborum placeat culpa itaque architecto doloremque inventore quae
        veritatis error!
      </div>
    </div>
  );
}
