import React from "react";
import "./Project.css";
import dashboard from "../../images/dashboard.png";
import food from "../../images/food.png";
import bank from "../../images/bank.png";
import fitness from "../../images/fitness.png";
import text from "../../images/text-io.png";

const Projects = () => {
  return (
    <section className="services section" id="project">
      <h2 className="section-title">My works</h2>
      <span className="section-subtitle">Recent Works</span>

      <div className="work-container container">
        <div className="work-overview ">
          <div className="work-flex grid">
            <div className="work-flex-img">
              <img src={dashboard} alt="dashboard" />

              <div className="work-project-links">
                <a
                  href="https://github.com/Ify01/Ultimate-dashboard"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-github-alt"></i>
                  <span> Github Link</span>
                </a>

                <a
                  href="https://ultimate-dashboard-nu.vercel.app/"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-expand-from-corner"></i>
                  <span> Demo</span>
                </a>
              </div>
            </div>

            <div className="work-flex-description">
              <div className="work-project-title">Ultimate Dashboard</div>
              <div className="work-project-text">
                A dashboard user interface is a visual representation of
                critical data and information presented in a concise and
                user-friendly manner. It provides users with a centralized view
                of key metrics, performance indicators, and insights relevant to
                their specific needs.
              </div>
              <div className="work-project-stack">
                <div className="react">React</div>
                <div className="react">Syncfusion</div>
                <div className="react">Tailwind</div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-overview ">
          <div className="work-flex grid">
            <div className="work-flex-description">
              <div className="work-project-title">Bank Interface</div>
              <div className="work-project-text">
                Hoobank typically provides comprehensive account management
                tools, allowing users to open new accounts, set up automatic
                payments, and update contact information. It also enables users
                to view and generate reports, and monitor their financial
                activities.
              </div>
              <div className="work-project-stack">
                <div className="react">React</div>
                <div className="react">Vite</div>
                <div className="react">Tailwind</div>
              </div>
            </div>

            <div className="work-flex-img">
              <img src={bank} alt="bank" />

              <div className="work-project-links">
                <a
                  href="https://github.com/Ify01/Bank-web"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-github-alt"></i>
                  <span> Github Link</span>
                </a>

                <a
                  href="https://ify-bank-web.vercel.app/"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-expand-from-corner"></i>
                  <span> Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-overview ">
          <div className="work-flex grid">
            <div className="work-flex-img">
              <img src={fitness} alt="fitness" />

              <div className="work-project-links">
                <a
                  href="https://github.com/Ify01/Gym-Club-Project"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-github-alt"></i>
                  <span> Github Link</span>
                </a>

                <a
                  href="https://gym-club-project.vercel.app/"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-expand-from-corner"></i>
                  <span> Demo</span>
                </a>
              </div>
            </div>

            <div className="work-flex-description">
              <div className="work-project-title">Fitness</div>
              <div className="work-project-text">
                Fitness is an online platform that represents a fitness facility
                and provides information, resources, and services to its members
                and potential customers. It serves as a virtual gateway to the
                gym, offering a range of features and functionalities to enhance
                the user experience and promote fitness goals.
              </div>
              <div className="work-project-stack">
                <div className="react">React</div>
                <div className="react">Email Js</div>
                <div className="react">Framer Motion</div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-overview ">
          <div className="work-flex grid">
            <div className="work-flex-description">
              <div className="work-project-title">Food Web</div>
              <div className="work-project-text">
                A food web is a web application designed to provide users with a
                convenient and efficient way to explore, order, and manage
                food-related activities. It offers a range of features and
                functionalities that enhance the overall dining experience and
                simplify food-related tasks.
              </div>
              <div className="work-project-stack">
                <div className="react">React</div>
                <div className="react">Firebase</div>
              </div>
            </div>

            <div className="work-flex-img">
              <img src={food} alt="food" />

              <div className="work-project-links">
                <a
                  href="https://github.com/Ify01/Food-Cart-Project"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-github-alt"></i>
                  <span> Github Link</span>
                </a>

                <a
                  href="https://food-cart-project-kappa.vercel.app/"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-expand-from-corner"></i>
                  <span> Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-overview ">
          <div className="work-flex grid">
            <div className="work-flex-img">
              <img src={text} alt="fitness" />

              <div className="work-project-links">
                <a
                  href="https://github.com/Ify01/text-io"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-github-alt"></i>
                  <span> Github Link</span>
                </a>

                <a
                  href="https://word-io.netlify.app/"
                  rel="noopener noreferrer"
                  className="work-github"
                  target="_blank"
                >
                  <i className="uil uil-expand-from-corner"></i>
                  <span> Demo</span>
                </a>
              </div>
            </div>

            <div className="work-flex-description">
              <div className="work-project-title">Text.io</div>
              <div className="work-project-text">
                Text.io is where users can typically copy and paste the text
                they want to summarize or input the URL of an article directly
                into the web application. The text summarizer then processes the
                input and generates a summary that captures the key points, main
                ideas, and relevant details of the original text.
              </div>
              <div className="work-project-stack">
                <div className="react">vite</div>
                <div className="react">Rapid Api</div>
                <div className="react">Tailwind</div>
                <div className="react">Redux</div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.github.com/Ify01"
          rel="noopener noreferrer"
          className="more-works"
          target="_blank"
        >
          <h1 className="more-works">More in my GitHub Page</h1>
        </a>
      </div>
    </section>
  );
};

export default Projects;
