import Navbar from "../../components/Header";
import "./stylesHome.css";
import Contacts from "../../components/footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <section>
        <Outlet/>
      </section>
      <Contacts />
    </div>
  );
}

export default Home;
