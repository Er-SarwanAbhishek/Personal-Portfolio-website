import React from 'react'
import Profile from "../../assets/abhishek.jpg"
// import Info from '../../components/Info'
// import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import './about.css'
import Skills from '../../components/Skills'

const About = () => {
  return (
    <main className="section container">
    {/* <section className='about'>
      <h2 className="section__title">About <span>Me</span></h2>
      <div className="about__container grid">
        <div className="about__info">
          
          
          <h3 className="section__subtitle">Personal Info</h3>
          <ul className="info__list grid">
            <Info />
           
          </ul>
          <a href="Abhishek_Updated_Resume.pdf" download="Abhishek_Updated_Resume.pdf" className='button'>Download Cv {' '}
          <span className="button__icon"><FaDownload /></span></a>
        </div>
        <div className="stats grid">

          <Stats />
          </div>
      
      </div>

    </section> */}

<section class="aboutSection">
		<div class="aboutContents">
			
			

			<div class="aboutImage">
				<img src={Profile} alt=''/>
			</div>

		

			<div class="aboutInfo">
				<h1>About Me</h1>
				<h2>I'm a MERN Stack Developer</h2>
				<p>I am passionate about creating responsive and user-friendly websites using MERN stack and Django framework. I have successfully created an E-commerce website using Django and SQLite. Currently I am working on creating a room booking web application. </p>
				<div class="aboutPersonalInfo">
					<div><span>Name:</span><span>Abhishek Kumar</span></div>
					<div><span>D.O.B:</span><span>25 March 2003</span></div>
					<div><span>Email:</span><span>abhisheknagina90@gmail.com</span></div>
					<div><span>Email:</span><span>abhisheknagina90@gmail.com</span></div>
					<div><span>Phone No:</span><span>8057802352</span></div>
					<div><span>Address:</span><span>Aurangjebpur Hardas Tehsil-Nagina, Dist-Bijnor (U.P) Pin code- 246762</span></div>
				</div>
				{/* <div class="button"> */}
					{/* <button>Download CV</button> */}
				{/* </div> */}
          <div className="about_btn">
          <a href="Abhishek_Updated_Resume.pdf" download="Abhishek_Updated_Resume.pdf" className='button cv_btn'>Download Cv {' '}
          <span className="button__icon "><FaDownload /></span></a>
          </div>
			</div>


<div class="aboutSkills">
	
<div class="skill">
	<div class="subject">Hard Work</div>
	<div class="progress_bar">
		<div class="progress_line" value="93%" style={{maxWidth: "93%"}}></div>
	</div>
</div>

<div class="skill">
	<div class="subject">Communication</div>
	<div class="progress_bar">
		<div class="progress_line" value="76%" style={{maxWidth: "76%"}}></div>
	</div>
</div>

<div class="skill">
	<div class="subject">Creativity</div>
	<div class="progress_bar">
		<div class="progress_line" value="74%" style={{maxWidth: "74%"}}></div>
	</div>
</div>

<div class="skill">
	<div class="subject">Adaptibility</div>
	<div class="progress_bar">
		<div class="progress_line" value="86%" style={{maxWidth: "86%"}}></div>
	</div>
</div>

</div>

			

		</div>
	</section>

    <div className="separator"></div>

	<section class="resumeSection" id="sectionResume">
		
		<header class="resumeTitle">
			<h1>Education & Achievements</h1>
		</header>

		<main class="resumeContentsRow">
			

			<div class="resumeEvenColumn">
				
				<div class="subTitle">
					<h3>Education</h3>
				</div>

				<div class="resumeContents">
					
					<div class="box">
						<h4>2017 - 2018</h4>
						<h3>High School</h3>
						<p>S S Bajwa Modern Academy Bansowala Bijnor (CBSE Board)</p>
						<h4>Aggregate - 81.17%</h4>
					</div>

					<div class="box">
					<h4>2019 - 2020</h4>
						<h3>Intermediate</h3>
						<p>S S Bajwa Modern Academy Bansowala Bijnor (CBSE Board)</p>
						<h4>Aggregate - 91.8%</h4>
					</div>

					<div class="box">
					<h4>2020 - 2024</h4>
						<h3>B.Tech (Computer Science and Engineering)</h3>
						<p>R V Institute Of Technology, Bijnor (AKTU University,Lucknow)</p>
						<h4>Aggregate - 81.17%</h4>
					</div>

				</div>

			</div>

			<div class="resumeEvenColumn">
				
				<div class="subTitle">
					<h3>Achievements</h3>
				</div>

				<div class="resumeContents">
					
					<div class="box">
						<h4>2020</h4>
						<h3>Quiz Competition</h3>
						<p>Got 1st Position</p>
					</div>

					<div class="box">
						<h4>2020</h4>
						<h3>Science Quiz Competition</h3>
						<p>Got 1st Postion</p>
					</div>


				</div>

			</div>


		</main>

	</section>

	<div className="separator"></div>

    <section className="skills">
      <h3 className="section__subtitle subtitle__center">TECHNICAL SKILLS</h3>
      <div className="skills__container grid">
        <Skills />
      </div>
    
    </section>

    <div className="separator"></div>
	
    </main>
  )
}

export default About
