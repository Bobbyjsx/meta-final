// import React from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../Home/index.css";
// follow naming convention for file names 
import logo2 from "../../assets/Group (1).png"
import mb from "../../assets/Group 59537.png";
import mm from "../../assets/Group 4040.png";
import os from "../../assets/Frame 4041.png";
import logo from "../../assets/Group.png";
import group from  "../../assets/Group 4028.png";
import learn from"../../assets/Frame 13 (1).png"
import nft1  from "../../assets/Group 4048.png";
import nft2  from "../../assets/Group 4049.png";
import nft3  from "../../assets/Group 4050.png";
import nft4  from "../../assets/Group 4051.png";
import nft5  from "../../assets/Group 4048 (1).png";
import nft6  from "../../assets/Group 4049 (1).png";
import nft7  from "../../assets/Group 4050 (1).png";
import nft8  from "../../assets/Group 4051 (1).png";
import nft3s from "../../assets/Frame 59546.png"
import fb  from "../../assets.nft/fb.png";
// 
function App() {
  return (
    <body>
    
    <header id="home">
     <img id="logo" src={logo} alt="logo" />

     <nav id="nav-head"> 
       <Link to="/" id="anchor" >Home</Link>
       <Link to="/PlaceTostay" id="anchor" >Place to stay</Link>
       <Link id="anchor" href="#nft">NFT's</Link>
       <Link id="anchor" href="#">Community</Link>
     </nav>
     <button id="connect">Connect wallet</button>
     </header>
     <div id="container">
     
       <div id="container-text">
          <h1>Rent a <span id="purple">Place</span> away from <span id="purple">Home</span> in the <span id="purple">Metaverse</span></h1>
          <p id="para"> we provide you access to luxury
              and affordable houses in the metaverse,
              get a chance to turn your imagination to
              reality at your comfort zone
          </p>
          <div id="input-el">
          <input id="in" type="text" placeholder="search for location" /><button id="s-btn">Search</button>
          </div>
       </div>
       <div id="container-img">
           <img src={group} />
       </div>
    </div>
   
    <div id="nfts">
    
     <div id="footer1">
       <img src={mb} />
       <img src={mm} />
       <img src={os} />
    </div>
    <div id="nft-home">
     <h2>Inspiration for your next adventure</h2>
     </div>
     <div id="nft-img">
     <img src={nft1} />
     <img src={nft2} />
     <img src={nft3} />
     <img src={nft4} />
     <img src={nft5} />
     <img src={nft6} />
     <img src={nft7} />
     <img src={nft8} />
     
    </div>
    </div>
    <div id="learn-more">
        <div id="lm-text">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection.
                Loyal customers gets amazing gift cards
                which are traded as NFTs. These NFTs gives
              our cutomer access to loads of our exclusive services.
            </p><img id="learn" src={learn} />
        </div>
        <img id="nf" src={nft3s} />
        
      </div>
         
      <footer id="footer-home">
       
       
          <div id="rows">
         
<div id="column">
            <img  id="logs" src={logo2} />
            <div className="row">
             <img src={fb} id="fbk" />
            <svg id="instas" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            <svg id="twitters" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
            </div>
            <p id="crs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
            </svg> 2022 Metabnb
          </p>
          </div>
          
          </div>
     
     <div id="f-txts">
     <div >
         <h3>Community</h3>
           <p>NFT</p>
           <p>Token</p>
           <p>Landlord</p>
           <p>Discord</p>
       </div>

       <div>
         <h3>Places</h3>
         <p>Castles</p>
         <p>Farms</p>
         <p>Beach</p>
         <p>Learn More</p>
       </div>

       <div>
       <h3>About us</h3>
         <p> Road map</p>
         <p>Creators</p>
         <p>Career</p>
         <p> Contact us</p>
       </div>
     </div>

      
       

      </footer>
    </body>
  );
}

export default App;
