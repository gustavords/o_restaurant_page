// index.js
import "./styles.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
// import { buildAboutPage } from "./about.js";
import { test } from "./test.js";
import hammerSickle from "./hammer-sickle.svg";

// const image = document.createElement("img");
// image.src = hammerSickle;

// document.body.appendChild(image);
// console.log( test );



//tab switching logic
const tabSwitching = () =>
{
    const nav_btns = document.querySelectorAll( `.tab` );
    nav_btns.forEach( ( nav_btn ) =>
    {
        nav_btn.addEventListener( `click`, ( e ) =>
        {
            switch ( e.target.value )
            {
                case `home`:
                    buildHomePage();
                    break;
                case `menu`:
                    buildMenuPage();
                    break;
                case `about`:
                    buildHomePage();
                    break;
            }
        } );
    } );
}

tabSwitching();