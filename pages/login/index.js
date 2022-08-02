import Image from "next/dist/client/image";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
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
          <Divider></Divider>
          <h5 className="Container">No recuerdo mi contraseña</h5>
        </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #343c4c;
          height: 100vh;
        }

        section {
          display: grid;
          width: 24%;
          border: 4px solid #ffffff;
          border-radius: 30px;
          padding: 3%;
          background-color: #2c2c2c;
        }
        .container-2 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8%;
        }
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5%;
        }
        h5 {
          color: #bcda21;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
