import Proareaslide from "../components/professionnalareaslide.js";
import Layout from "../components/userlayout.js";
import Proareaslidestyle from "../styles/proareaslidestyle.js";
import Layoutstyle from "../styles/layoutstyle.js";
import Areasslidestyle from "../styles/areasslidestyle.js";
import Scolarareaslide from "../components/scolarareaslide.js";
import Scolarareaslidestyle from "../styles/scolarareaslidestyle.js";

export default function Main() {
  return (
    <>
      <Layout /><Layoutstyle />
      <Areasslidestyle />
      <Proareaslide /><Proareaslidestyle />
      <Scolarareaslide/><Scolarareaslidestyle/>
    </>
  );
}
