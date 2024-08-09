import "../styles/page/Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="content">
          <div className="name">
            <h1>Hello, I'm </h1>
            <h1>Thy Nguyen.</h1>
          </div>
          <h2>I'm a web developer.</h2>
        </div>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};
export default Home;
