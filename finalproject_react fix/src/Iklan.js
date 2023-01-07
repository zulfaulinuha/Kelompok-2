import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Iklan(props) {
  const [iklan, setIklan] = useState([]);
  console.log(props);
  useEffect(() => {
    fetch("http://localhost:4567/iklan")
      .then((response) => response.json())
      .then((response) => {
        setIklan(response);
      });
  }, []);

  return (
    <table width="100%" border="0">
      <div className="">
        <h2>Ceritanya Ini Iklan</h2>
        <center>
          <div className="postss">
            {iklan.map((iklan) => (
              <a key={iklan._id.$oid} class="" href={iklan.link_webnya}>
                <div className="posisi-iklan">
                  <img
                    src={iklan.link}
                    alt=""
                    width="200"
                    height="200"
                    display="flex"
                  />
                </div>
                <p>{iklan.judul_iklan}</p>
              </a>
            ))}
          </div>
        </center>
      </div>
    </table>
  );
}
