import { ButtonRocket } from "./Button";
import activeImg from "../assets/active.svg";
import deactivateImg from "../assets/destroyed.svg";
import unknownImg from "../assets/unknown.svg";
import { allRockets } from "../functions/functions";
import { useEffect, useState } from "react";

export default function Rocket() {
  const [rockets, setRockets] = useState(null);
  useEffect(() => {
    allRockets(setRockets);
  }, []);
  
  return (
    <div>
      <h2> Capsule status: </h2>
      <div className="all-buttons">
        <ButtonRocket text="Active" img={activeImg} />
        <ButtonRocket text="Destroyed" img={deactivateImg} />
        <ButtonRocket text="Unknown" img={unknownImg} />
      </div>

      <h2> All Capsules: </h2>
      <div className="all-capsules">
        {rockets != null
          ? rockets.map((rocket) => {
           const img = (status) => {
              switch(status){
                case "active": 
                return activeImg;
                case "unknown":
                  return unknownImg;
                case "retired":
                  return deactivateImg;
                default:
                  return deactivateImg
              }
           }
            
            return (
              <div className="rocket" key={rocket.capsule_serial}>
                <div className="rocket-title">
                  <h3>{rocket.capsule_serial}</h3>
                <img className="rocket-status" src={img(rocket.status)} alt={rocket.status}></img>
                </div>
                
                <p>{rocket.details}</p>
              </div>
            )})
          : "No hay cohetes"}
      </div>
    </div>
  );
}
