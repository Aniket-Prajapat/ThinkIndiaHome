import React from 'react'

const AboutSection = () => {
    return (
        <div className="container-fluid bg-dark text-light">
          <section className="py-3 text-center container" style={{margintop:"10%",marginLeft:"6%", marginBottom:"2%"}}>
    <div className="row py-lg-3">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">About Us!</h1>
        <p className="lead">Think India is an initiative to bring together the best talent of this country and to infuse them with a nation first attitude. An active forum of researchers, professionals and students where they debate on national issues, raise their concern and offer innovative solutions to problems. It is a platform for the leaders of tomorrow.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Learn more about us</a>
        </p>
      </div>
    </div>
  </section>  
        </div>
    )
}

export default AboutSection
