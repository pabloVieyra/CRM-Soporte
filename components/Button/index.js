export default function Button({ contenido, color, colorLetra }) {
  return (
    <>
      <button>{contenido}</button>
      <style jsx>{`
        button {
          align-items: center;
          background: ${color};
          border-radius: 9999px;
          border: 0;
          color: ${colorLetra};
          cursor: pointer;
          display: flex;
          font-size: 15px;
          font-weight: bold;
          padding: 5px 18px;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </>
  );
}
