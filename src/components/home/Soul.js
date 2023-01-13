import testPhoto2 from "./test-photo-2.jpeg";

export const Soul = () => {
  return (
    <div>
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
          <img src={testPhoto2} alt="fashion" width={500} class="center" />
        </section>
      </div>
    </div>
  );
};
