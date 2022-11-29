import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <h1 className="title">FACTOR TIERRA</h1>
      <h1 className="subtitle">Todo lo que necesitas para armar la huerta de tus sueños</h1>
      <div className="homeNav">
        <Link  to='/category/tierra' style={{textDecoration: 'none'}}><h1 className="btn from-center">Tierra</h1></Link>
        <Link  to='/category/semillas' style={{textDecoration: 'none'}}><h1 className="btn from-center">Semillas</h1></Link>
        <Link  to='/category/fertilizantes' style={{textDecoration: 'none'}}><h1 className="btn from-center">Fertilizante</h1></Link>
      </div>
    </>
  );
};

export default Home;