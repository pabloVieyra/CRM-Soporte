export default function Input({ nombre }) {
  return (
    <>
      <h3>{nombre}</h3>
      <input></input>
      <style jsx>
        {`
          h3 {
            color: #bcda21;
          }
          input {
            border-radius: 5px;
            border: 1px solid #39c;
            height: 160%;
          }
        `}
      </style>
    </>
  );
}
