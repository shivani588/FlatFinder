import React, { useEffect } from "react";
import './Highlight.css'

function Highlight() {
  useEffect(() => {
    document.title = "Highlight";
  }, []);

  

  // return (
  //   <section id="meet-our-team" className="team-section text-center">
  //     <h2 className="section-title">Meet Our Team</h2>
  //     <Slider {...settings}>
  //       <div className="team-member tg">
  //         <img
  //           src="public/img/team1.jpg"
  //           alt="Team Member 1"
  //           className="team-photo"
  //         />
  //         <h3 className="member-name">John Doe</h3>
  //         <p className="member-role">Head Barista</p>
  //         <p className="member-bio">
  //           John has been crafting exceptional coffee for over 10 years and
  //           loves experimenting with new brewing techniques.
  //         </p>
  //       </div>

  //       <div className="team-member tg">
  //         <img
  //           src="public/img/team2.jpg"
  //           alt="Team Member 2"
  //           className="team-photo"
  //         />
  //         <h3 className="member-name">Jane Smith</h3>
  //         <p className="member-role">Pastry Chef</p>
  //         <p className="member-bio">
  //           Jane is passionate about creating delicious pastries that perfectly
  //           complement our coffee offerings.
  //         </p>
  //       </div>
  //       <div className="team-member tg">
  //         <img
  //           src="public/img/team3.jpg"
  //           alt="Team Member 3"
  //           className="team-photo"
  //         />
  //         <h3 className="member-name">Emily Brown</h3>
  //         <p className="member-role">Cafe Manager</p>
  //         <p className="member-bio">
  //           Emily ensures that everything runs smoothly in our café, from
  //           customer service to daily operations.
  //         </p>
  //       </div>
  //       <div className="team-member tg">
  //         <img
  //           src="public/img/team4.jpg"
  //           alt="Team Member 4"
  //           className="team-photo"
  //         />
  //         <h3 className="member-name">Emily Brown</h3>
  //         <p className="member-role">Cafe Manager</p>
  //         <p className="member-bio">
  //           Emily ensures that everything runs smoothly in our café, from
  //           customer service to daily operations.
  //         </p>
  //       </div>
  //       <div className="team-member tg">
  //         <img
  //           src="public/img/team5.jpg"
  //           alt="Team Member 5"
  //           className="team-photo"
  //         />
  //         <h3 className="member-name">Emily Brown</h3>
  //         <p className="member-role">Cafe Manager</p>
  //         <p className="member-bio">
  //           Emily ensures that everything runs smoothly in our café, from
  //           customer service to daily operations.
  //         </p>
  //       </div>
  //       {/* Add more team members as needed */}
  //     </Slider>
  //   </section>
  // );


  return (
    < >
    <div className="hightlightcontainer">
      <div className="heading">
        <h1 className="head">Highlights of Windsong Residence</h1>
      </div>
      <div>
        <div className="container1">
          <div className="row mx-5 g-5">
            <div className="col">
              <img className=" img1" src="src\img\s2.jpeg" />
            </div>
            <div className="col">
              <img className=" img1" src="src\img\s1.jpeg" />
            </div>
            <div className="col">
              <img className="img1" src="src\img\s3.jpeg" />
            </div>
          </div>
        </div>
        <hr />

        <div className="container2">
          <div className="row mx-5 g-5">
            <div className="col">
              <img className=" img1" src="http://trident-homes.in/images/biometric.jpg" />
            </div>
            <div className="col">
              <img className=" img1" src="http://trident-homes.in/images/amenities/am2.webp" />
            </div>
            <div className="col">
              <img className="img1" src="http://trident-homes.in/images/amenities/terrace.webp" />
            </div>
          </div>
        </div>
  


<hr></hr>
        <div>
          <h1 className="heading">Gallery Of Windsong Residences</h1>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide ms-5 me-5"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <img
                  src="http://trident-homes.in/images/gallery/image-1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ color: "bisque" }}>welcome to flatFinder</h5>
                  <p
                    style={{
                      fontSize: "larger",
                      fontWeight: "bolder",
                      color: "burlywood",
                    }}
                  >
                    A Higher Quality of Living.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img
                  src="http://trident-homes.in/images/gallery/image-2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="http://trident-homes.in/images/gallery/image-3.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>



        <div className="fashion">
          <h1 className="heading">
            <marquee>FASHION HUB</marquee>
          </h1>
        </div>



        <div className="container3 ms-5 mt-5">
          <div className="row">
            <div className="col-4">
              <img
                height=" 300px"
                // width="400px"
                src="https://media.istockphoto.com/id/2153897857/photo/pregnant-wife-and-husband-looking-for-clothes-for-baby.webp?b=1&s=170667a&w=0&k=20&c=_lfgN60q3ugItbFVZpcQkIUSse03KaK1jvvpS8zOuek="
              />
            </div>
            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
              {" "}
              <h4 className="heading3">Find near by Shopping Market's</h4>
              <p className="heading3 mt-3 text-center">
                Just a 10-minute walk from the flats, Fashion Hub is a one-stop
                shop for all your clothing needs. Whether you're looking for the
                latest trends, classic pieces, or comfy loungewear, Fashion Hub
                has a diverse collection that caters to all styles and budgets.
                Their friendly staff and well-organized layout make shopping
                here a pleasant experience
              </p>
            </div>
            <div className="col-4">
              <img
                height=" 300px"
                // width="350px"
                src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F1c3VhbCUyMCUyMGNsb3RoaW5nJTIwZm9lJTIwd29tZW5ufGVufDB8fDB8fHww"
              />
            </div>
          </div>
        </div>

        <h1 className="heading">
      
          <marquee>GREEN VALLY</marquee>
        </h1>

        
        <div className="container3 ms-5 mt-5">
          <div className="row">
            <div className="col-4">
              <img
                height=" 300px"
                // width="400px"
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnaXRhYmxlcyUyMGFuZCUyMGZvb2QlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
              />
            </div>
            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
              {" "}
              <h4 className="heading3">Find near by Shopping Market's</h4>
              <p className="heading3 mt-3 text-center">
                Just a 10-minute walk from the flats, Fashion Hub is a one-stop
                shop for all your clothing needs. Whether you're looking for the
                latest trends, classic pieces, or comfy loungewear, Fashion Hub
                has a diverse collection that caters to all styles and budgets.
                Their friendly staff and well-organized layout make shopping
                here a pleasant experience
              </p>
            </div>
            <div className="col-4">
              <img
                height=" 300px"
                 width="450px"
                src="https://th.bing.com/th/id/R.1afe0e8940cad2fbd4343758266b4dd8?rik=RuTc77qM%2feMnRg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-r5Qj4fG5j2w%2fUZfpnPZI9HI%2fAAAAAAAAAY8%2fHCe-eRTWZ64%2fs1600%2fnaan%2bcholay.jpg&ehk=QMp2lpv0J4sLknRgckWWgaBkrT%2feJIuEiZ%2bbmLCHhQA%3d&risl=&pid=ImgRaw&r=0"
              />
            </div>
          </div>
        </div>
 </div>
 </div>
    </>
  );
}

export default Highlight;
