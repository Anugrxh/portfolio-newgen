const center = 200;
const radius = 190;
const toRad = (deg: number) => (deg * Math.PI) / 180;

const meridians = [15, 30, 45, 60, 75].map((deg) => radius * Math.cos(toRad(deg)));
const parallels = [-60, -40, -20, 0, 20, 40, 60].map((deg) => ({
  cy: center - radius * Math.sin(toRad(deg)),
  rx: radius * Math.cos(toRad(deg)),
}));

export function WireframeGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true" className={className}>
      <g transform={`rotate(-18 ${center} ${center})`} strokeWidth={1} vectorEffect="non-scaling-stroke">
        <circle cx={center} cy={center} r={radius} />
        <line x1={center} y1={center - radius} x2={center} y2={center + radius} />
        {meridians.map((rx) => (
          <ellipse key={rx} cx={center} cy={center} rx={rx} ry={radius} />
        ))}
        {parallels.map(({ cy, rx }) => (
          <ellipse key={cy} cx={center} cy={cy} rx={rx} ry={rx * 0.18} />
        ))}
      </g>
    </svg>
  );
}
