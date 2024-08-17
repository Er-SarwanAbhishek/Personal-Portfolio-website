import Profile from "../../assets/abhishek.jpg"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import './home.css';
import Typical from 'react-typical';
import About from "../about/About";
import { FaDownload } from 'react-icons/fa'


const Home = () => {
  return (
    <>
    <section className='home section grid'>
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
      {/* <h1 className="wlc"> Welcome To My Website
    
      </h1> */}
        <div className="home__data">
          {" "}
          <h1 className="home__title">
            <span>I'm Abhishek Kumar.</span>
            {" "}
            <Typical
            loop={Infinity}
            steps={[
              "Web developer",
              2000,
              "Mern Stack Developer",
              2000,
              "Django Developer",
              2000,
              "Java Programmer",
              2000,
            ]}
            />
          </h1>
          <p className="home__description">Hi there! I'm Abhishek kumar a Web Developer. I am passionate about creating responsive, beautiful and user-friendly web applications through careful crafted code and user-cengtric design.</p>
          <Link to='/about' className="button">
            More About Me{''}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
          
        {/* <a href="Abhishek_Updated_Resume.pdf" download="Abhishek_Updated_Resume.pdf">
            <button className="button Res_btn">Download CV</button>
          </a> */}
          <a href="Abhishek_Updated_Resume.pdf" download="Abhishek_Updated_Resume.pdf" className='button cv_btn'>Download Cv {' '}
          <span className="button__icon "><FaDownload /></span></a>
        </div>
        <div className="social__media">
          <a href="facebook.com"><FaFacebook /></a>
        <a href="www.instagram.com"><FaInstagram /></a>
        <a href="www.instagram.com"><FaGoogle /></a>
        <a href="www.instagram.com"><FaLinkedin /></a>
      
        </div>
      </div>
      <div className="color__block"></div>
    </section>
    {/* <About/> */}
    </>
  )
}

export default Home
