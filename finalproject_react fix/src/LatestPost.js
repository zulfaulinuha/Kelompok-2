import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LatestPost(props) {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(props.apiUrl + "posts/latest")
      .then((response) => response.json())
      .then((response) => {
        setLatest(response);
      });
  }, []);

  return (
    <section>
      <header className="major">
        <h2>Latest Posts...</h2>
      </header>
      <div className="posts">
        {latest.map((post) => (
          <article key={post._id.$oid}>
            <h3>{post.title}</h3>
            <p>{post.resume}</p>
            <ul className="actions">
              <li>
                <Link to={"posts/" + post._id.$oid}>Read more...</Link>
              </li>
            </ul>
          </article>
        ))}
      </div>

      {/* <table width="100%" border="0">
        <header className="">
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
                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffineartamerica.com%2Ffeatured%2F1-situs-judi-online-terpercaya-dan-resmi-di-indonesia-aktif4d-agen-togel-online-terpercaya.html%3Fproduct%3Dpuzzle%26puzzleType%3Dpuzzle-18-24&psig=AOvVaw29pCyCQEzI0lke6aa25JtZ&ust=1672806194079000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiP5unGqvwCFQAAAAAdAAAAABAJ"
              >
                <img
                  src="https://render.fineartamerica.com/images/rendered/default/flat/puzzle/images/artworkimages/medium/3/1-situs-judi-online-terpercaya-dan-resmi-di-indonesia-aktif4d-agen-togel-online-terpercaya.jpg?&targetx=-325&targety=0&imagewidth=1650&imageheight=750&modelwidth=1000&modelheight=750&backgroundcolor=763824&orientation=0&producttype=puzzle-18-24&brightness=76&v=6"
                  alt="Post ADS 1"
                  width="260"
                  height="200"
                />
                <br></br> Agen Judi Online Terbaik
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
              <a class="" href="https://www.youtube.com/watch?v=dQLXgVQyiNo">
                <img
                  src="https://avatars.githubusercontent.com/u/71883916?v=4"
                  width="310"
                  height="200"
                />
                <br></br> Telah ditemukan di TKP...
              </a>
            </td>
          </tr>
        </header>
      </table> */}
    </section>
  );
}
