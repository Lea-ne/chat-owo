export default function Thinking() {
  const style = {
    animation: 'fadePulse 1.5s ease-in-out infinite',
    opacity: 0.6,
  };

  return (
    <>
      <span style={style} className="thinking-text">Thinking...</span>

      <style>{`
        @keyframes fadePulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
