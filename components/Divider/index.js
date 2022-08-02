export default function Divider({ contenido, color, colorLetra }) {
  return (
    <>
      <div>
        <hr />
        <h2>O</h2>
        <hr />
      </div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 10%
        }

        hr {
          width: 40%;
          height: 1px;
          border-style: none;
          background: white;
          margin-top: 7px:
          
        }

        h2 {
          font-size: 6px;
          color: white;
          
        }
      `}</style>
    </>
  );
}
