import React from "react";
const Home = (props) => {
  return (
    <center>
      <div
        className=" container-white home"
        style={{
          textAlign: "center",
          width: "800px",
          marginTop: "175px",
          color: "orange",
        }}
      >
        <div className="big-title" style={{ fontSize: "20px", width: "750px" }}>
          <marquee>Primary Thanks On Reaching Out To Us !!</marquee>
        </div>
        <div
          className="big-title "
          style={{
            fontStyle: "'Comic Sans MS', sans-serif",
            marginTop: "50px",
            fontSize: "60px",
            color: "purple",
            textShadow:
              "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
          }}
        >
          <b>
            <i>YOU ARE BRAVE !!</i>
          </b>
        </div>
        <div
          className="big-title"
          style={{
            fontStyle: "'Comic Sans MS', sans-serif",
            marginTop: "50px",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          <b>We Are Here To Assist!!</b>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-outline-warning btn-lg"
            style={{ fontWeight: "500" }}
            onClick={() => {
              props.setIsHome(false);
            }}
          >
            Tell Us More
          </button>
        </div>
      </div>
    </center>
  );
};

export default Home;
