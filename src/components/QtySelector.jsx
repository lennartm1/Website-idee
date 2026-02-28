export const QtySelector = ({ value, onChange, min = 1, max = 10 }) => (
  <div className="qty-selector" aria-label="Aantal selector">
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      aria-label="Aantal verlagen"
      className="qty-btn"
    >
      −
    </button>
    <input
      type="number"
      min={min}
      max={max}
      value={value}
      onChange={(event) => {
        const next = Number(event.target.value);
        if (Number.isNaN(next)) return;
        onChange(Math.min(max, Math.max(min, next)));
      }}
      aria-label="Aantal"
    />
    <button
      type="button"
      onClick={() => onChange(Math.min(max, value + 1))}
      aria-label="Aantal verhogen"
      className="qty-btn"
    >
      +
    </button>
  </div>
);
