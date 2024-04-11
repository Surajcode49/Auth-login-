import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../Assests/logo.png";
import "../styles/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const [activeNavItem, setActiveNavItem] = useState(0);
  const [name, setName] = useState("User");

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  const fetchName = async () => {
    const token = localStorage.getItem("userdbtoken");
    const { data } = await axios.get("https://pacific-login3.onrender.com/user/token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(token);
    console.log(data);
    setName(data.name || "User");
  };

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
    // console.log(token);
  };

  useEffect(() => {
    userValid();
    fetchName();
  }, [name]);
  return (
    <>
      <div className="dash-main">
        <div className="dashboard-main-part">
          <nav className="dashboard-main-menu">
            <h1>Pacific-overseas</h1>
            <ul>
              <li
                className={`nav-item ${activeNavItem === 0 ? "active" : ""}`}
                onClick={() => handleNavItemClick(0)}
              >
                <b></b>
                <b></b>
                <a href="#">
                  <i className="fa fa-house nav-icon"></i>
                  <span className="nav-text">Home</span>
                </a>
              </li>

              <li
                className={`nav-item ${activeNavItem === 1 ? "active" : ""}`}
                onClick={() => handleNavItemClick(1)}
              >
                <b></b>
                <b></b>
                <a href="#">
                  <i className="fa fa-user nav-icon"></i>
                  <span className="nav-text">Profile</span>
                </a>
              </li>

              <li
                className={`nav-item ${activeNavItem === 2 ? "active" : ""}`}
                onClick={() => handleNavItemClick(2)}
              >
                <b></b>
                <b></b>
                <a href="#">
                  <i className="fa fa-calendar-check nav-icon"></i>
                  <span className="nav-text">Schedule</span>
                </a>
              </li>

              <li
                className={`nav-item ${activeNavItem === 3 ? "active" : ""}`}
                onClick={() => handleNavItemClick(3)}
              >
                <b></b>
                <b></b>
                <a href="#">
                  <i className="fa fa-person-running nav-icon"></i>
                  <span className="nav-text">Activities</span>
                </a>
              </li>

              <li
                className={`nav-item ${activeNavItem === 4 ? "active" : ""}`}
                onClick={() => handleNavItemClick(4)}
              >
                <b></b>
                <b></b>
                <a href="#">
                  <i className="fa fa-sliders nav-icon"></i>
                  <span className="nav-text">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <section className="content">
</section> */}

          <section className="dash-content">
            <div className="dash-left-content">
              <div className="activities">
                <h1>Popular Activities</h1>
                <div className="activity-container">
                  {/* Repeat the following block for each activity */}
                  <div className="image-container img-one">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                      alt="tennis"
                    />
                    <div className="overlay">
                      <h3>Tennis</h3>
                    </div>
                  </div>
                  <div className="image-container img-two">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                      alt="tennis"
                    />
                    <div className="overlay">
                      <h3>Tennis</h3>
                    </div>
                  </div>
                  <div className="image-container img-three">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                      alt="tennis"
                    />
                    <div className="overlay">
                      <h3>Tennis</h3>
                    </div>
                  </div>
                  {/* <div className="image-container img-four">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd" alt="tennis" />
                            <div className="overlay">
                                <h3>Tennis</h3>
                            </div>
                        </div> */}
                  {/* <div className="image-container img-five">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd" alt="tennis" />
                            <div className="overlay">
                                <h3>Tennis</h3>
                            </div>
                        </div>
                        <div className="image-container img-six">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd" alt="tennis" />
                            <div className="overlay">
                                <h3>Tennis</h3>
                            </div>
                        </div> */}
                  {/* ... Repeat for other activities */}
                </div>
              </div>

              <div className="left-bottom">
                <div className="weekly-schedule">
                  <h1>Weekly Schedule</h1>
                  <div className="calendar">
                    {/* Repeat the following block for each scheduled activity */}
                    <div className="day-and-activity activity-one">
                      <div className="day">
                        <h1>13</h1>
                        <p>mon</p>
                      </div>
                      <div className="activity">
                        <h2>Swimming</h2>
                        <div className="participants">
                          <img
                            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                            style={{ "--i": 1 }}
                            alt=""
                          />
                          <img
                            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                            style={{ "--i": 2 }}
                            alt=""
                          />
                          <img
                            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                            style={{ "--i": 3 }}
                            alt=""
                          />
                          <img
                            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                            style={{ "--i": 4 }}
                            alt=""
                          />
                        </div>
                      </div>
                      <button className="btn">Join</button>
                    </div>
                    {/* ... Repeat for other scheduled activities */}
                  </div>
                </div>

                <div className="personal-bests">
                  <h1>Personal Bests</h1>
                  <div className="personal-bests-container">
                    {/* Repeat the following block for each personal best */}
                    <div className="best-item box-one">
                      <p>Fastest 5K Run: 22min</p>
                      <img
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                        alt=""
                      />
                    </div>
                    {/* ... Repeat for other personal bests */}
                  </div>
                </div>
              </div>
            </div>

            <div className="dash-right-content">
              {/* Continue with the remaining sections */}
              <div className="user-info">
                <div className="icon-container">
                  <i className="fa fa-bell nav-icon"></i>
                  <i className="fa fa-message nav-icon"></i>
                </div>
                {name === null ? <h3>Loading...</h3> : <h3>{name}</h3>}

                <img
                  src="https://avatars.mds.yandex.net/i?id=74e88edd9e669820d0fe365c1bd7e85cf08efedf-8220915-images-thumbs&n=13"
                  alt="user"
                />
              </div>

              <div className="active-calories">
                <h1 style={{ alignItems: "flex-start" }}>Active Calories</h1>
                <div className="active-calories-container">
                  <div className="box" style={{ "--i": `85%` }}>
                    <div className="circle">
                      <h2>
                        85<small>%</small>
                      </h2>
                    </div>
                  </div>
                  <div className="calories-content">
                    <p>
                      <span>Today:</span> 400
                    </p>
                    <p>
                      <span>This Week:</span> 3500
                    </p>
                    <p>
                      <span>This Month:</span> 14000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mobile-personal-bests">
                <h1>Personal Bests</h1>
                <div className="personal-bests-container">
                  <div className="best-item box-one">
                    <p>Fastest 5K Run: 22min</p>
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/05dfc444-9ed3-44cc-96af-a9cf195f5820"
                      alt=""
                    />
                  </div>
                  <div className="best-item box-two">
                    <p>Longest Distance Cycling: 4 miles</p>
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9ca170e9-1252-4fa6-8677-36493540c1f2"
                      alt=""
                    />
                  </div>
                  <div className="best-item box-three">
                    <p>Longest Roller-Skating: 2 hours</p>
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/262d1611-ed4c-4297-981c-480cf7f95714"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="friends-activity">
                <h1>Friends Activity</h1>
                <div className="dash-card-container">
                  <div className="dash-card">
                    <div className="dash-card-user-info">
                      <img
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9290037d-a5b2-4f50-aea3-9f3f2b53b441"
                        alt=""
                      />
                      <h2>Jane</h2>
                    </div>
                    <img
                      className="dash-card-img"
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bef54506-ea45-4e42-a1b6-23a48f61c5e8"
                      alt=""
                    />
                    <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
                  </div>

                  <div className="dash-card dash-card-two">
                    <div className="dash-card-user-info">
                      <img
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/42616ef2-ba96-49c7-80ea-c3cf1e2ecc89"
                        alt=""
                      />
                      <h2>Mike</h2>
                    </div>
                    <img
                      className="dash-card-img"
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2dcc1b94-06c5-4c62-b886-53b9e433fd44"
                      alt=""
                    />
                    <p>I just set a new record in cycling: 30 miles!💪</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
