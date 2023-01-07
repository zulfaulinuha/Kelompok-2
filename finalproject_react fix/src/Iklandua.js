import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Iklandua(props) {
  const [Iklandua, setIklandua] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4567/iklandua")
      .then((response) => response.json())
      .then((response) => {
        setIklandua(response);
      });
  }, []);

  return (
    <table width="100%" border="0">
      <div className="">
        <tr>
          <td>
            {Iklandua.map((Iklandua) => (
              <a
                class=""
                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnew.c.mi.com%2Fth%2Fpost%2F123924%2F138_Agen_Slot_Daftar_Situs_Judi_Slot_Terbaik_Dan_T&psig=AOvVaw3t7WAnQ93xn4tGiNCKhglS&ust=1672905274324000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPiTsve3rfwCFQAAAAAdAAAAABAf"
              >
                <img
                  src={Iklandua.link_iklan}
                  alt="Post ADS 1"
                  width="990"
                  height="200"
                />
              </a>
            ))}
          </td>
        </tr>
      </div>
    </table>
  );
}
