(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();class y extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.slidesIndex=0,this.slidePercentage=100,this.autoslideIntervall=3e3,this.slides=[{src:"img/Screenshot 2025-04-22 004710.png"},{src:"img/Screenshot 2025-04-22 004727.png"},{src:"img/Screenshot 2025-04-22 004830.png"},{src:"img/Screenshot 2025-04-22 004921.png"},{src:"img/Screenshot 2025-04-22 005051.png"}]}async connectedCallback(){this.shadow.innerHTML=`
        <div id="container">
            <h1>Welcome to the Pixel Paradise of Piep's Soft!</h1>
            <div id="carousell-container">
                <slot></slot>
            </div>
        </div>
        <style>
            @font-face {
                font-family: piepsi;
                src: url("../fonts/PermanentMarker-Regular.ttf");
            }

            h1 {
                display: flex;
                max-width: 80%;
                text-align: center;
                position: absolute;
                z-index: 10;
                font-family: piepsi;
                color: white;
                top: 100px;
                text-shadow: 2px 2px 2px black;
                font-size: 6rem;
            }
            #container {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }

            #carousell-container {
                display: flex;
                flex-direction: row;
                transition: transform 0.5s ease-in-out;
            }

            .carousell-images {
                flex-shrink: 0;
                width: 100%;
            }

            img {
                display: block;
                width: 100%;
                height: auto;
                object-fit: cover;
            }

            @media (max-width: 1500px) {
                h1 {
                    font-size: 3rem;
                }
            }

            @media (max-width: 768px) {
                h1 {
                    font-size: 2.0rem;
                }
            }

        }
        </style>
        `,this.carousellContainer=this.shadow.querySelector("#carousell-container"),this.slides.forEach(({src:t})=>{const o=document.createElement("img");o.classList.add("carousell-images"),o.src=t,this.carousellContainer.append(o)}),this.startAutoSlide()}startAutoSlide(){this.intervall=setInterval(()=>{this.slidesIndex=(this.slidesIndex+1)%this.slides.length,this.renderSlideAnimation()},this.autoslideIntervall)}renderSlideAnimation(){const t=-this.slidesIndex*this.slidePercentage;this.carousellContainer.style.transform=`translateX(${t}%)`}}const k=`
<div id="container">
    <img src="img/PiepsmitTasse.png" alt="">
    <section class="info-text">
        <h3>Look forward to our 2D pixel art games that we develop using Phaser, Electron, JavaScript, Lua (Löve), Python (Pygame), and Godot.</h3>
    </section>
    <div class="spacer"></div>
    <section class="info-text">
        <h3>Hey, Pixel Pioneer! Ready to dive into a world where every corner bursts with creativity and every pixel tells a story? Then you’ve come to the right place! Here at Piep’s Soft, we live and breathe 2D pixel art games. Our mission? To create games that not only captivate but also pay tribute to the golden era of pixel art.</h3>
    </section>
</div>
<style>
    @font-face {
        font-family: piepsi;
        src: url("fonts/PermanentMarker-Regular.ttf");
    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: piepsi;
    }

    img {
        width: 20%;
        filter: drop-shadow(2px 2px 3px black);
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 60px;
    }

    #last-spacer {
        margin-bottom: 20px;
    }

    .spacer {
        height: 2px;
        align-self: center;
        background-color: black;
        width: 80%;
    }

    .info-text {
        width: 80%;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 60px;
        text-shadow: 
        1px 1px 2px white, 
        -1px -1px 2px white, 
        1px -1px 2px white,
        -1px 1px 2px white;
        font-weight: 600;
        font-size: 1.3rem;
    }
    @media (max-width: 768px) {
        .info-text {
            font-size: 1rem;
        }
    }

</style>
`;class L extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.shadow.innerHTML=k}}const E=[{heading:"🔥 Currently in the spotlight: FlamingTrails 🔥",text:"Get ready to make your mark in “FlamingTrails” – our brand-new game, crafted with passion and a hearty dose of nostalgia. From tricky puzzles to epic boss battles, every detail is lovingly designed in retro style. Are you ready to take on the challenge and embark on this pixelated journey with us? Join us and become part of a community that knows true art lies in the details. Piep's Soft – where games are more than just games. They are a pixel masterpiece.",buttonLink:null},{heading:"🔥Flaming Trails NEW to STEAM!!!🔥",text:`At the end of time, an ancient, well-known evil awakens and threatens the remaining life in the universe.
        Join Ember on a journey in this fantasy adventure where exploration, combat, and puzzles await you.
        Traverse beautifully crafted landscapes, from enchanted forests to ancient ruins, as you fight the forces of darkness and restore balance to a world on the brink of destruction.`,buttonLink:"https://store.steampowered.com/app/3083010/Flaming_Trails__Lost_Ember/",linkName:"TO STEAM"}],S=`
<div id="container">
    <h1>News</h1>
    <div class="wrapper"></div>
</div>
<style>
    @font-face {
        font-family: piepsi;
        src: url("fonts/PermanentMarker-Regular.ttf");
    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    h1 {
        font-size: 4rem;
        color: white;
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: piepsi;
        padding-bottom: 20px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;
    }

    .spacer {
        height: 2px;
        background-color: white;
        margin-top: 20px;
        width: 80%;
        justify-self: center;
        align-self: center;
    }

    .news-container {
        margin-top: 20px;
    }

    .news-container h1 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .news-container p {
        font-size: 1.5rem;
    }

    .news-button {
        margin-top: 10px;
        border-radius: 20px;
        border: 2px solid rgb(255, 255, 255);
        background-color: black;
        color: white;
        padding: 10px;
        font-family: piepsi;
        font-size: 1rem;
        transition: all 1s;
    }

    .news-button:hover {
        border: 2px solid rgb(0, 0, 0);
        background-color: rgb(255, 255, 255);
        color: black;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
        .news-container h1 {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }

        .news-container p {
            font-size: 1.0rem;
        }
    }
</style>
`;class T extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.shadow.innerHTML=S,this.wrapper=this.shadow.querySelector(".wrapper"),E.forEach(({heading:t,text:o,buttonLink:i,linkName:e})=>{const n=document.createElement("div");n.classList.add("news-container");const r=document.createElement("h1");r.textContent=t;const d=document.createElement("p");d.textContent=o;let c=document.createElement("button");c.classList.add("news-button");const p=document.createElement("div");p.classList.add("spacer"),n.append(r,d),i!=null&&(c.innerText=e,c.addEventListener("click",()=>{const x=i;window.open(x,"_blank")}),n.append(c)),this.wrapper.append(n,p)})}}const A=`
<div id="container">
    <h1 id="heading">GAMES</h1>
    <div class="game-grid-container">
        <ol class="selector">
            <li id="All" class="selector-item active">ALL Games</li>
            <li id="HTML" class="selector-item">HTML Games</li>
            <li id="Pixel" class="selector-item">Pixel Games</li>
            <li id="3D" class="selector-item">3D Games</li>
        </ol>
        <div class="grid-elements">
            <div name="HTML" redirect="https://www.piepssoft.de/peeps-deep-dive/" class="game-card active">
                <h2>Piep´s Deep Dive</h2>
                <img src="img/peepsDeepDive.png" alt="">
                <p>Help Pieps in this Sea Adventure. A demo of an WebGL Project of an Exploration Game with our mascot 'Pieps'</p>
            </div>
            <div name="Pixel" redirect="https://store.steampowered.com/app/3083010/Flaming_Trails__Lost_Ember/" class="game-card active">
                <h2>Flaming Trails</h2>
                <img src="img/FlamingTrails.jpg" alt="">
                <p>Help Ember in this "Flaming" Adventure. Explore a Dark World at the end of Time.</p>
            </div>
            <div name="HTML" redirect="https://www.piepssoft.de/helloween/" class="game-card active">
                <h2>Pumpkin Mayham</h2>
                <img src="img/halloweenImg.png" alt="">
                <p>A smal Web Based WebGL Shooter, Shot dozens of Pumpins and Gosts. SPOOKYYYY!!!</p>
            </div>
            <div name="HTML" redirect="https://piepssoft.de/pieps-breakout/" class="game-card active">
                <h2>Piep´s Breakout</h2>
                <img src="img/piepsBreakout.png" alt="">
                <p>WORK IN PROGRESS, Breakout like BALL BALL Game.<br>Go and Piep´s it Out!!!!!!</p>
            </div>
        </div>
    </div>
</div>
<style>
    @font-face {
        font-family: piepsi;
        src: url("fonts/PermanentMarker-Regular.ttf");
    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: piepsi;
    }

    #heading {
        margin-bottom: 20px;
        text-shadow: 
        1px 1px 2px white, 
        -1px -1px 2px white, 
        1px -1px 2px white,
        -1px 1px 2px white;
        font-size: 3.5rem;
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .game-grid-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .selector {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 30px;
        margin-bottom: 10px;
    }
    
    .selector-item {
        cursor: pointer;
        text-shadow: 
        1px 1px 2px white, 
        -1px -1px 2px white, 
        1px -1px 2px white,
        -1px 1px 2px white;
        font-size: 1.2rem;
        transition: all 1s;
        margin-bottom: 10px;
    }

    .selector-item::after {
        content: "";
        display: block;
        position: absolute;
        width: 0px;
        height: 2px;
        margin-top: -3px;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 2px rgb(0, 0, 0), 
        -1px -1px 2px rgb(0, 0, 0), 
        1px -1px 2px rgb(0, 0, 0),
        -1px 1px 2px rgb(0, 0, 0);;
        transition: all 1s;
    }

    .selector-item:hover::after,
    .selector-item.active::after {
        width: 120px;
    }

    .selector-item:hover,
    .selector-item.active {
        color: white;
        text-shadow: 
        1px 1px 2px rgb(0, 0, 0), 
        -1px -1px 2px rgb(0, 0, 0), 
        1px -1px 2px rgb(0, 0, 0),
        -1px 1px 2px rgb(0, 0, 0);
    }

    .grid-elements {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 80%;
        gap: 20px;
        margin-bottom: 50px;
        grid-template-columns: 1fr 1fr;
    }

    .game-card {
        display: none;
        min-height: 350px;
        padding: 10px;
        gap: 10px;
        border: 1px solid white;
        background-color: black;
        color: white;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 2px rgb(0, 0, 0), 
        -1px -1px 2px rgb(0, 0, 0), 
        1px -1px 2px rgb(0, 0, 0),
        -1px 1px 2px rgb(0, 0, 0);
        cursor: pointer;
        animation: fadeIn 1s ease-in;
        transition: all 0.5s;
    }

    .game-card:hover {
        box-shadow: 5px 5px 10px black;
        border: 1px solid rgb(0, 0, 0);
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }

    .game-card.active {
        display: flex;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }

    .game-card img {
        object-fit: contain;
        max-width: 600px;
    }

    @media (max-width: 768px) {
        .selector {
            gap: 10px;
        }
        .selector-item {
            font-size: 0.9rem;
        }

        .selector-item::after {
            margin-top: 0px;
        }

        .selector-item:hover::after {
            width: 70px;
        }

        .selector-item.active::after {
            width: 70px;
        }

        .grid-elements {
            grid-template-columns: 1fr;
        }

        #heading {
            font-size: 2.0rem;
        }
    }

    @media (max-width: 1630px) {
        .game-card img {
            object-fit: contain;
            max-width: 350px;
        }
    }

</style>
`;class P extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}async connectedCallback(){this.shadow.innerHTML=A,this.addSelectorFunctions(),this.addRedirectToCards()}addSelectorFunctions(){const t=Array.from(this.shadow.querySelectorAll(".selector-item"));t.forEach(o=>{o.addEventListener("click",i=>{t.forEach(e=>{e.id===i.target.id?e.classList.add("active"):e.classList.remove("active")}),this.updateGameCards(i.target.id)})})}updateGameCards(t){Array.from(this.shadow.querySelectorAll(".game-card")).forEach(i=>{let e=i.getAttribute("name");t==="All"||t===e?i.classList.add("active"):i.classList.remove("active")})}addRedirectToCards(){this.shadow.querySelectorAll(".game-card").forEach(o=>{let i=o.getAttribute("redirect");o.addEventListener("click",()=>{window.open(i,"_blank")})})}}const M=`
<div id="container">
    <h1 id="heading">TEAM</h1>
    <h3>Our Team of Game Developer´s and Digital Artists</h3>
    <div class="wrapper">
        <div class="team-card" linkData="https://www.piepssoft.de/nadine/">
            <h1>Nadine</h1>
            <img src="img/portrait.jpg" alt="">
            <h3>Digital Artist</h3>
        </div>
        <div class="team-card" linkData="https://www.piepssoft.de/sven/">
            <h1>Sven</h1>
            <img src="https://lh3.googleusercontent.com/pw/ABLVV86PmNS9H0UtFkspv6DPE9h_9R-f3Qk13vzmTuyl_2nfxelUBvu_BX-_vwcKG3Ceq84ZowHiFa6yrTXAstwqstuyO7oHmKUrtOn6HvzN_w11J8I598FNaDLUc4VDjHjrN27Klrwjl9mxmpzrwDW5I53f=w598-h797-s-no-gm?authuser=0" alt="">
            <h3>Game Designer, Programmer</h3>
        </div>
    </div>
</div>
<style>
    @font-face {
        font-family: piepsi;
        src: url("fonts/PermanentMarker-Regular.ttf");
    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    #container {
        font-family: piepsi;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    #heading {
        font-size: 4rem;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 30px;
        margin-bottom: 50px;
        gap: 20px;
    }

    .team-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 5px;
        border: 1px solid white;
        transition: all 0.5s;
        cursor: pointer;
    }

    .team-card:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
        box-shadow: 1px 1px 2px rgb(255, 255, 255), 
        -1px -1px 2px rgb(255, 255, 255), 
        1px -1px 2px rgb(255, 255, 255),
        -1px 1px 2px rgb(255, 255, 255);
    }

    .team-card img {
        width: 300px;
    }

    @media (max-width: 768px) {
        #heading {
            font-size: 2.5rem;
        }
        .wrapper {
            grid-template-columns: 1fr;
        }
    }
</style>
`;class z extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}async connectedCallback(){this.shadow.innerHTML=M,this.addRedirectToPortfolios()}addRedirectToPortfolios(){this.shadow.querySelectorAll(".team-card").forEach(o=>{let i=o.getAttribute("linkData");o.addEventListener("click",()=>{window.open(i,"_blank")})})}}const H=`
<div id="container">
    <h1 id="heading">Contact</h1>
    <div class="contact-content">
        <div class="icons">
            <img src="img/icons/anruf.png" alt="">
            <div class="icon-text-box">
                <h1>Phone</h1>
                <h3>+49 151 40741961</h3>
            </div>
        </div>
        <div class="icons">
            <img src="img/icons/briefumschlag.png" alt="">
            <div class="icon-text-box">
                <h1>Mail</h1>
                <h3>info@piepssoft.de</h3>
            </div>
        </div>
        <div class="icons">
            <img src="img/icons/haus.png" alt="">
            <div class="icon-text-box">
                <h1>Location</h1>
                <h3>Mainz, Germany</h3>
            </div>
        </div>
    </div>
    <a id="sendMail" href="mailto:info@piepssoft.de">E-Mail senden</a>
</div>
<style>
    @font-face {
        font-family: piepsi;
        src: url("fonts/PermanentMarker-Regular.ttf");
    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: piepsi;
    }

    img {
        max-width: 50px;
        max-height: 50px;
        filter: drop-shadow(1px 1px 1px white)
        drop-shadow(-1px -1px 1px white)
        drop-shadow(1px -1px 1px white)
        drop-shadow(-1px 1px 1px white);
    }

    #heading {
        margin-bottom: 20px;
        text-shadow: 
        1px 1px 2px white, 
        -1px -1px 2px white, 
        1px -1px 2px white,
        -1px 1px 2px white;
        font-size: 3.5rem;
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        place-self: center;
        width: 80%;
    }

    .contact-content {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-direction: row;
    }

    .icon-text-box {
        display: flex;
        flex-direction: column;
        text-shadow: 
        1px 1px 2px white, 
        -1px -1px 2px white, 
        1px -1px 2px white,
        -1px 1px 2px white;
    }

    #sendMail {
        all: unset;
        cursor: pointer;
        margin-top: 60px;
        padding: 10px;
        border-radius: 10px;
        background-color: black;
        color: white;
        border: 1px solid white;
        transition: all 0.5s;
    }

    #sendMail:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        border: 1px solid rgb(0, 0, 0);
        box-shadow: 2px 2px 5px black;
    }

    @media (max-width: 880px) {
        #heading {
            font-size: 2.0rem;
        }

        .contact-content {
            flex-direction: column;
        }
    }
</style>
`;class C extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}async connectedCallback(){this.shadow.innerHTML=H}}document.addEventListener("DOMContentLoaded",()=>{customElements.define("carousell-element",y),customElements.define("about-element",L),customElements.define("news-element",T),customElements.define("game-element",P),customElements.define("team-element",z),customElements.define("contact-element",C);const s=document.querySelector("#home"),t=document.querySelector("#about"),o=document.querySelector("#news"),i=document.querySelector("#games"),e=document.querySelector("#teams"),n=document.querySelector("#contact"),r=document.createElement("carousell-element");s.append(r);const d=document.createElement("about-element");t.append(d);const c=document.createElement("news-element");o.append(c);const p=document.createElement("game-element");i.append(p);const x=document.createElement("team-element");e.append(x);const u=document.createElement("contact-element");n.append(u);const m=document.querySelector(".mobile-menu-toggle"),h=document.querySelector(".nav-links"),w=document.querySelectorAll("section");m&&h&&m.addEventListener("click",function(){h.classList.toggle("active"),document.body.classList.toggle("menu-open"),m.querySelectorAll("span").forEach(a=>a.classList.toggle("active"))});const f=document.querySelectorAll(".nav-links a");function b(){let l="";w.forEach(a=>{const g=a.offsetTop,v=a.clientHeight;window.scrollY>=g-v/3&&(l=a.getAttribute("id"))}),f.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${l}`&&a.classList.add("active")})}window.addEventListener("scroll",b),f.forEach(l=>{l.addEventListener("click",()=>{h.classList.contains("active")&&(h.classList.remove("active"),document.body.classList.remove("menu-open"),m.querySelectorAll("span").forEach(g=>g.classList.remove("active")))})})});
