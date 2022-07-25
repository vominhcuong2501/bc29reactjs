import React from "react";
import { useState } from "react";
let previousAvatar = "";

function UseState(props) {
  const [number, setNumber] = useState(1);
  const [avatar, setAvatar] = useState("https://i.pravatar.cc?u=1658293914378");

  // đối với class khi setState thì chỉ có hàm render được gọi lại
  // function component khi setState thì nguyên cái scope component được gọi lại
  //   console.log("render");
  return (
    <div>
      <h4>UseState</h4>
      <p>Number: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
        className="btn btn-danger"
      >
        Increase
      </button>
      <br />
      <div className="card w-25 p-0">
        <img className="card-img-top" src={avatar} alt="#" />
        <div className="card-body">
          <button
            onClick={() => {
              setAvatar(previousAvatar);
            }}
            className="btn btn-primary"
          >
            Previous
          </button>
          <button
            onClick={() => {
              const id = Date.now();
              previousAvatar = avatar;
              const newAvatar = `https://i.pravatar.cc?u=${id}`;
              setAvatar(newAvatar);
            }}
            className="btn btn-danger"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseState;
