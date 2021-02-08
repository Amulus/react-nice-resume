import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><a href={education.site} target="_blank"> <h3>{education.school}</h3></a>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
          var project = work.projects.map(function(project){
              var langage = project.langages.map(function(langage){
                  return <div key={project.id}> <ul>
                      <li>{langage.name}</li>
                  </ul>
                  </div>
              })

              return <div key={project.id}> <p>{project.description}</p>
                  {langage}
              </div>
          })
          return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              {project}

        </div>
      })

      var skills = this.props.data.skills.map((skills)=>{
          var className = 'bar-expand '+skills.name.toLowerCase();
          return (

                  <li key={skills.name}>
                    <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
                  </li>
                )
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Cursus Universitaire</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Cursus Professionnel</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Compétences</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
