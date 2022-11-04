import { Logo } from "../assets/images";


function Score({ scoreValue, initialScore }) {

  return (
    <section className={"score"}>
      <Logo />
      <div
        className="score__container"
      >
        <p className={"score__container-title"}>score</p>
        <p className="score__container-value">
          {" "}{scoreValue}
        </p>
      </div>
    </section>
  );
}

export default Score;
