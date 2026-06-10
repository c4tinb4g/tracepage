function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
<source
  src={`${import.meta.env.BASE_URL}videos/280649_chriange.mp4`}
  type="video/mp4"
/>
      </video>

      <div className="hero-content">
        <h1>
          Trace Every
          <br />
          Fiber&apos;s Journey
        </h1>

        <p>
          Transform textile supply chain data into transparent,
          traceable material passports.
        </p>

        <div className="hero-actions">
          <button className="hero-btn">
            How does it work?
          </button>

          <div
            className="scroll-circle"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;