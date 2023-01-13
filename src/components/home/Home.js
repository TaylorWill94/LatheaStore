import "./Home.css";
import { Soul } from "./Soul";
import testPhoto from "./test-photo.jpeg";

export const Home = () => {
  return (
    <>
      <div>
        <section className="website-title">
          <h1 className="store-title">Lathea Knight Store</h1>
        </section>
        <div className="home-wrapper">
          <div className="info-sec">
            <section className="website-info">
              <div>
                <p>sweet to the soul</p>
              </div>
              <div>
                <h2 className="exclusives-title">Exclusive</h2>
              </div>
              <div>
                <h3>SHOP NOW</h3>
              </div>
            </section>
          </div>
          <section className="img-section">
            <img src={testPhoto} alt="fashion" width={500} class="center" />
          </section>
        </div>
      </div>
      <Soul />
    </>
  );
};
