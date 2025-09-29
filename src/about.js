export { buildAboutPage }
import aboutPic from "./hammer-sickle.svg";

const buildAboutPage = () =>
{
    const content_dsp = document.querySelector( `#content` );
    content_dsp.textContent = ``;
    content_dsp.classList.remove( `home` );
    content_dsp.classList.remove( `menu` );
    content_dsp.classList.add( `about` );

    const picture = document.createElement( `img` );
    const about_info = document.createElement( `div` );
    const address_txt = document.createElement( `a` );
    const hoursOfOperation_txt = document.createElement( `p` );
    const phone_txt = document.createElement( `p` );
    const email_txt = document.createElement( `p` );

    picture.src = aboutPic;
    about_info.setAttribute(`id`, `about_info`);
    address_txt.setAttribute(`id`, `address`);
    address_txt.textContent = `5-1234 Fake Blvd., 2J3 J7K, AO USA`
    hoursOfOperation_txt.textContent = `MON-FRI: 12PM - 10PM || SAT-SUN: 10AM-10PM`
    phone_txt.textContent = `1-800-123-4567`
    email_txt.setAttribute(`id`, `email`);
    email_txt.textContent = `fake_restaurant@fake.com`;

    content_dsp.appendChild(picture);
    content_dsp.appendChild(about_info);
    about_info.appendChild(address_txt);
    about_info.appendChild(hoursOfOperation_txt);
    about_info.appendChild(phone_txt);
    about_info.appendChild(email_txt);
}