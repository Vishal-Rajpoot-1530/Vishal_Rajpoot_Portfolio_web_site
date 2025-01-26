import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, []);

  const handleOnclickActive = (tage) => {
    setActive(tage);
  };
  return (
    <div className="header">
      <div className="container  ">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <img src="img5.jpg" alt="Profile Image" />{" "}
            <span className="fs-4">Vishal Rajpoot Porfolio</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${active === "/" && "active"} `}
                onClick={() => handleOnclickActive("/")}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${active === "/projects" && "active"} `}
                onClick={() => handleOnclickActive("/projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className={`nav-link ${active === "/skills" && "active"} `}
                onClick={() => handleOnclickActive("/skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/educations"
                className={`nav-link ${active === "/educations" && "active"} `}
                onClick={() => handleOnclickActive("/educations")}
              >
                Educations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${active === "/contact" && "active"} `}
                onClick={() => handleOnclickActive("/contact")}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item"></li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
