// index.js
import "./styles.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
// import { buildAboutPage } from "./about.js";

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

buildHomePage();
tabSwitching();