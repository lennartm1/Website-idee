export const Toast = ({ message, visible }) => (
  <div className={`toast ${visible ? 'visible' : ''}`} role="status" aria-live="polite">
    {message}
  </div>
);
