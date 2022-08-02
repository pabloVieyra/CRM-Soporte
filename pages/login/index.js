import Image from "next/dist/client/image";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../public/Logo.jpg";

export default function Login() {
  return (
    <>
      <div className="container">
        <section>
          <div className="image">
            <Image
              src={logo}
              alt="Logo de Nucleo Calls"
              width="70"
              height="45"
            ></Image>
          </div>
          <Input nombre={"Email"}></Input>
          <Input nombre={"Clave"}></Input>

          <div className="container-2">
            <Button
              contenido={"ingresar"}
              color={"#BCDA21"}
              colorLetra={"#343C4C"}
            />
          </div>
          <h6 className="Container">No recuerdo mi contraseña</h6>
        </section>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #2c2c2c;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
        }

        .container-2 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 5%;
        }

        .image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h6 {
          color: #bcda21;
        }
      `}</style>
    </>
  );
}
