import { useEffect, useRef, useState } from "react";

function GraphicSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sources"
      ref={sectionRef}
      className={`graphic-section ${isVisible ? "show-graphic" : ""}`}
    >
      <h1>Sources</h1>
      <p>
        Data entries from collectors, recyclers, manufacturers, and processors.
      </p>

      <div className="source-buttons">
        <button>Collectors & Sorters</button>
        <button>Pre-processors</button>
        <button>Recyclers</button>
        <button>Manufacturers</button>
      </div>

      <div className="trace-graphic">
        <svg viewBox="0 0 1200 1200" className="flow-svg">
          <path className="flow-line grey" d="M120 120 C280 320 500 520 600 720" />
          <path className="flow-line muted" d="M250 120 C380 320 540 520 600 720" />
          <path className="flow-line white" d="M380 120 C500 320 570 520 600 720" />

          <path className="flow-line gold" d="M820 120 C700 320 630 520 600 720" />
          <path className="flow-line green" d="M950 120 C780 320 660 520 600 720" />
          <path className="flow-line white" d="M1080 120 C850 320 700 520 600 720" />

          <path className="flow-line muted" d="M600 840 C450 980 220 1080 -50 1180" />
          <path className="flow-line muted" d="M600 840 C500 980 320 1080 100 1180" />
          <path className="flow-line white" d="M600 840 C560 980 430 1080 250 1180" />

          <path className="flow-line gold" d="M600 840 C650 980 780 1080 950 1180" />
          <path className="flow-line green" d="M600 840 C720 980 920 1080 1100 1180" />
          <path className="flow-line white" d="M600 840 C820 980 1080 1080 1250 1180" />

          <g className="indicator indicator-1">
            <text x="70" y="260">Origin</text>
            <text x="70" y="290">country</text>
            <line x1="170" y1="280" x2="360" y2="280" />
            <circle cx="360" cy="280" r="10" />
          </g>

          <g className="indicator indicator-2">
            <text x="180" y="520">Resource use</text>
            <line x1="320" y1="510" x2="560" y2="510" />
            <circle cx="560" cy="510" r="10" />
          </g>

          <g className="indicator indicator-3">
            <text x="460" y="400">Quality</text>
            <text x="460" y="430">Metrics</text>
            <line x1="560" y1="410" x2="720" y2="410" />
            <circle cx="720" cy="410" r="10" />
          </g>

          <g className="indicator indicator-4">
            <line x1="720" y1="520" x2="900" y2="520" />
            <circle cx="720" cy="520" r="10" />
            <text x="910" y="510">Process</text>
            <text x="910" y="540">location</text>
          </g>

          <g className="indicator indicator-5">
            <line x1="840" y1="250" x2="1030" y2="250" />
            <circle cx="840" cy="250" r="10" />
            <text x="1050" y="260">Fiber Loss</text>
          </g>
        </svg>

        <div className="trace-box">Trace</div>
      </div>

      <h1>Destinations</h1>
      <p>
        Trace provides the data infrastructure that connects circular materials
        across the entire value chain.
      </p>

      <div className="destination-buttons">
        <button>Digital Material Passport</button>
        <button>Shareable Data sheets</button>
        <button>Compliance data</button>
        <button>Life cycle data</button>
      </div>
    </section>
  );
}

export default GraphicSection;