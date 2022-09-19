import NavL from "./NavL";
import React from "react";

const Header = () => {
  // const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <div className="header">
        <header>
          <div
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/new/slides/041.webp')",
              height: "400px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100"></div>
            </div>
          </div>
        </header>
        <NavL />
      </div>
    </header>
  );
};

export default Header;
