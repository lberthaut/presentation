import Proareaslide from "../components/professionnalareaslide.js";
import Layout from "../components/userlayout.js";
import Proareaslidestyle from "../styles/proareaslidestyle.js";
import Layoutstyle from "../styles/layoutstyle.js";
import Areasslidestyle from "../styles/areasslidestyle.js";
import Scolarareaslide from "../components/scolarareaslide.js";
import Scolarareaslidestyle from "../styles/scolarareaslidestyle.js";
import background from '../assets/background.png'
import Hobbiesareaslide from "../components/hobbiesareaslide.js";
import Hobbiesareaslidestyle from "../styles/hobbiesareaslidestyle.js";

export default function Main() {
  return (
    <>
      <Layout /><Layoutstyle />
      <Areasslidestyle />
      <div className="main_container">
      <Scolarareaslide/><Scolarareaslidestyle/>
      <Proareaslide /><Proareaslidestyle />
      <Hobbiesareaslide/><Hobbiesareaslidestyle/>
      </div>
      <img src={background} alt="background octopus" className="background"/>
    </>
  );
}
