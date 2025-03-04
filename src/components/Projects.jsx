import { useState } from "react";
const Projects = () => {
  const [iframeSrc1, setIframeSrc1] = useState("");
  const [iframeSrc2, setIframeSrc2] = useState("");

  const changeIframeSrc1 = (url) => {
    setIframeSrc1(url);
  };
  const changeIframeSrc2 = (url) => {
    setIframeSrc2(url);
  };
  return (
    <>
      <div className="projects">
        <div>
          <h1>Major Projects</h1>
          <ul>
            <li>
              <b>Myntra-Clone </b>
            </li>
            <p>
              {" "}
              <a
                href="https://github.com/Vishal-Rajpoot-1530/Myntra-clone-using-HTML--CSS-and-Java-Script"
                target="_blank"
              >
                GitHub
              </a>
              <br />
              URL :{" "}
              <a
                href="https://chic-beijinho-2d09e9.netlify.app/"
                target="_blank"
              >
                https://chic-beijinho-2d09e9.netlify.app/
              </a>
              <button
                onClick={() =>
                  changeIframeSrc1("https://chic-beijinho-2d09e9.netlify.app/")
                }
              >
                View Page
              </button>
              {iframeSrc1 && (
                <div style={{ position: "relative", display: "inline-block",zIndex:"0" }}>
                  <button
                    className="close"
                    onClick={() => changeIframeSrc1("")}
                    style={{
                      position: "absolute",
                      // top: "1px",
                      right: "5px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    X
                  </button>
                  <iframe
                    src={iframeSrc1}
                    width="350"
                    height="500"
                    style={{ border: "1px solid black", marginTop: "10px" }}
                    title="Dynamic Iframe"
                  ></iframe>
                </div>
              )}
            </p>

            <li>
              <b>Portfolio-Website</b>
            </li>
            <p>
              URL:{" "}
              <a
                href="https://delicate-cobbler-8e393a.netlify.app"
                target="_blank"
              >
                https://delicate-cobbler-8e393a.netlify.app
              </a>{" "}
              <button
                onClick={() =>
                  changeIframeSrc2(
                    "https://delicate-cobbler-8e393a.netlify.app"
                  )
                }
              >
                View Page
              </button>
              {iframeSrc2 && (
                <div style={{ position: "relative", display: "inline-block", zIndex:"0" }}>
                  <button
                    className="close"
                    onClick={() => changeIframeSrc2("")}
                    style={{
                      position: "absolute",
                      // top: "5px",
                      right: "5px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    X
                  </button>
                  <iframe
                    src={iframeSrc2}
                    width="350"
                    height="500"
                    style={{ border: "1px solid black", marginTop: "10px" }}
                    title="Dynamic Iframe"
                  ></iframe>{" "}
                </div>
              )}
            </p>
          </ul>
        </div>

        <div>
          <h1>Minor Projects</h1>
          <ul>
            <li>
              <b>Calculator </b>
            </li>

            <p>
              <a
                href="https://github.com/Vishal-Rajpoot-1530/calculator"
                target="_blank"
              >
                GitHub
              </a>
            </p>

            <li>
              <b>Todo-App</b>
            </li>
            <p>
              <a
                href="https://github.com/Vishal-Rajpoot-1530/Todo-app"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <li>
              <b>Social_Media_App</b>
            </li>
            <p>
              <a
                href="https://github.com/Vishal-Rajpoot-1530/Social-Media-Project"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <li>
              <b>eCommerce-platform</b>
            </li>
            <p>
              <a
                href="https://github.com/Vishal-Rajpoot-1530/eCommerce-platform"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <li>
              <b>Currency-Convertor </b>
            </li>
            <p>
              <a
                href="https://github.com/Vishal-Rajpoot-1530/currency_convertor"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </ul>
        </div>
        <div>
          <h2> Tech Stack:</h2>
          <p>
            “Reacr.js”, "Redux.js", "React-Router", "Bootstrap", "React-icons",
            “HTML”, “JavaScript”, “CSS3”, "Node.js", "Express.js", "Mongoose",
            and "MongoDB"
          </p>

          <h2>Key Features:</h2>
          <p>
            “React.js” for building interactive and reuseable UI components .{" "}
            <br />
            “CSS” for building attractive User Interface. <br />
            "Node.js" for back-end development <br />
            "MongoDB" for dynamic data fatch.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
