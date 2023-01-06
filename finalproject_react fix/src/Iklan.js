import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function iklan(props) {
  return (
    <table width="100%" border="0">
      <div className="">
        <h2>Ceritanya Ini Iklan</h2>
        <tr>
          <td>
            <a
              class=""
              href="https://temon.kulonprogokab.go.id/detil/360/temonizen-pelanggan-telkomsel-segera-ganti-kartu-lama-ke-kartu-4g"
            >
              <img
                src="https://temon.kulonprogokab.go.id/files/news/normal/f5b4186c0fa34580e8a2dcdeb0138589.jpeg"
                alt="Post ADS 1"
                width="200"
                height="200"
              />
              <br></br> Promo Paket Data Telkomsel
            </a>
          </td>

          <td>
            <a
              class=""
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.officearte.co%2Fprofile%2Fcara-daftar-judi-bola-2022%2Fprofile&psig=AOvVaw0YRyAdFo5S6srABEVnTe9V&ust=1672806760539000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCJh_jIqvwCFQAAAAAdAAAAABAE"
            >
              <img
                src="https://static.wixstatic.com/media/5091d5_b4f870c39be14c44ac55119ed2bb6a95~mv2.jpg/v1/fill/w_600,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5091d5_b4f870c39be14c44ac55119ed2bb6a95~mv2.jpg"
                width="310"
                height="200"
              />
              <br></br> Slot Bola Sejagad Raya
            </a>
          </td>

          <td>
            <a
              class=""
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0m5orPptp3Q&psig=AOvVaw10xOBxp9UCHhUCPtuEIYM_&ust=1672995878471000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjo9LqJsPwCFQAAAAAdAAAAABAE"
            >
              <img
                src="https://i.ytimg.com/vi/0m5orPptp3Q/maxresdefault.jpg"
                width="310"
                height="200"
              />
              <br></br> Deposit minim untung banyak hanya dikita
            </a>
          </td>
        </tr>
      </div>
    </table>
  );
}
