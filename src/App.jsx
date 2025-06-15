import { useState } from "react";

import "./App.css";

function App() {
  const [] = useState(0);

  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="nav">
              <div className="logo1">
                <img width={"37px"} src="./src/assets/Logo.svg" alt="" />
                <img width={"87px"} src="./src/assets/Nexcent.svg" alt="" />
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <button className="btn1">Register Now➡️</button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="section-flex">
              <div>
                <div className="header-text">
                  <p>
                    Lessons and insights <span>from 8 years</span>
                  </p>
                </div>
                <div>
                  <p className="p1">
                    Where to grow your business as a photographer: site or
                    social media?
                  </p>
                  <button className="btn2">Register</button>
                </div>
              </div>
              <div className="img-div">
                <img
                  height={"335px"}
                  width={"330px"}
                  src="./src/assets/hero1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="div2">
              <p>Our Clients</p>
            </div>
            <div className="div3">
              <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="section-flex2">
              <div>
                <img width={"50px"} src="/src/assets/company1.svg" alt="" />
              </div>
              <div>
                <img width={"50px"} src="/src/assets/company2.svg" alt="" />
              </div>
              <div>
                <img width={"50px"} src="/src/assets/company3.svg" alt="" />
              </div>
              <div>
                <img width={"50px"} src="/src/assets/company4.svg" alt="" />
              </div>
              <div>
                <img width={"50px"} src="/src/assets/company5.svg" alt="" />
              </div>
              <div>
                <img width={"50px"} src="/src/assets/company6.svg" alt="" />
              </div>
              <div>
                <img width={"50px"} src="/src/assets/company7.svg" alt="" />
              </div>
            </div>

            <div className="div6">
              <p className="p5">
                Manage your entire community in a single system
              </p>
            </div>
            <div className="div8">
              <div className="card">
                <div className="card-img">
                  <img width={"50px"} src="./src/assets/people.svg" alt="" />
                </div>
                <div>
                  <p className="card-text">Membership Organisations</p>
                  <p className="card-text-p">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img width={"50px"} src="./src/assets/people2.svg" alt="" />
                </div>
                <div>
                  <p className="card-text">National Associations</p>
                  <p className="card-text-p">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img width={"50px"} src="./src/assets/people3.svg" alt="" />
                </div>
                <div>
                  <p className="card-text">Clubs And Groups</p>
                  <p className="card-text-p">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="main-div-end">
              <div>
                <img src="./src/assets/heroes2.png" alt="" />
              </div>
              <div>
                <div>
                  <h2>The unseen of spending three years at Pixelgrade</h2>
                </div>
                <div className="div7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet justo ipsum. Sed accumsan quam vitae est varius
                    fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                    risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </p>
                </div>
                <button className="btn2">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
