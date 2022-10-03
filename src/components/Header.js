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
                "url('https://images.unsplash.com/photo-1638291792853-5ab967de3611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')",
              height: "400px",
            }}
          >
            <h2>Country API - weather API</h2>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100"></div>
            </div>
          </div>
        </header>
      </div>
    </header>
  );
};

export default Header;
