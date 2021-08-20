import React from "react";
import "./Contact.css";

// const handleSend =async (id) => {
//   const response = await axios.post(`http://localhost:5000/api/admin`)
//   if(response.data){
//     setUsers(users.map((item) => item.id !== id));
//   }
// };



const Contact = () => {
  return (
<div className="containerContac">
        <div className="contactHead">
          <h1>Contactez nous</h1>
          <p>
            Vous avez des questions ? n'esitez pas a les posez, Nous vous
            répondons au prochains délais.
          </p>
        </div>

        <div className="contactBody">
          <div className="contacInfo">
            <div className="box">
              <div className="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div className="text">
                <h3>Adresse</h3>
                <p>Bd.Mahdjoub Boualem N°156-Blida</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h3>E-mail</h3>
                <p>said190295@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h3>Téléphone</h3>
                <p>+213 558 320 883</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fab fa-facebook"></i>
              </div>
              <div className="text">
                <h3>Facebook</h3>
                <p>الخبير للهواتف النقالة</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form>
              <h2>Envoyer un message</h2>

              <div className="inputBox+">
                <input className="innerContact"
                  type="text"
                  name=""
                  required="required"
                  placeholder="Nom et Prénom"
                />
              </div>

              <div className="inputBox+">
                <input className="innerContact"
                  type="text"
                  name=""
                  required="required"
                  placeholder="E-mail"
                />
              </div>

              <div className="inputBox+">
                <textarea className="innerContact"
                  required="required"
                  placeholder="Taper votre message..."
                />
              </div>

              <div className="inputBox+">
              {/* onClick={() => handleSend(params.row.id)} */}
                <input className="send"  type="submit" name="" value="send" />
              </div>
            </form>
          </div>
        </div>
        </div>
          );
};

export default Contact;


// const Contact = () => {
//   return (
//     <div className="containerContac">
//       <div className="contactHead">
//         <h1>Contactez nous</h1>
//         <p>
//           Vous avez des questions ? n'esitez pas a les posez, Nous vous
//           répondons au prochains délais.
//         </p>
//       </div>

//       <div className="contactBody">
//         <div className="contacInfo">
//           <div className="box">
//             <div className="icon">
//               <i class="fas fa-map-marker-alt"></i>
//             </div>
//             <div className="text">
//               <h3>Adresse</h3>
//               <p>Bd.Mahdjoub Boualem N°156-Blida</p>
//             </div>
//           </div>

//           <div className="box">
//             <div className="icon">
//               <i class="fas fa-envelope"></i>
//             </div>
//             <div className="text">
//               <h3>E-mail</h3>
//               <p>said190295@gmail.com</p>
//             </div>
//           </div>

//           <div className="box">
//             <div className="icon">
//               <i class="fas fa-phone-volume"></i>
//             </div>
//             <div className="text">
//               <h3>Téléphone</h3>
//               <p>+213 558 320 883</p>
//             </div>
//           </div>

//           <div className="box">
//             <div className="icon">
//               <i class="fab fa-facebook"></i>
//             </div>
//             <div className="text">
//               <h3>Facebook</h3>
//               <p>الخبير للهواتف النقالة</p>
//             </div>
//           </div>
//         </div>

//         <div className="contactForm">
//           <form>
//             <h2>Envoyer un message</h2>

//             <div className="inputBox">
//               <input className="inputcontact"
//                 type="text"
//                 name=""
//                 required="required"
//                 placeholder="Nom et Prénom"
//               />
//             </div>

//             <div className="inputBox">
//               <input className="inputcontact"
//                 type="text"
//                 name=""
//                 required="required"
//                 placeholder="E-mail"
//               />
//             </div>

//             <div className="inputBox">
//               <textarea
//                 required="required"
//                 placeholder="Taper votre message..."
//               />
//             </div>

//             <div className="inputBox">
//               <input className="send" type="submit" name="" value="send" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;