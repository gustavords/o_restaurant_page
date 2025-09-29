export { buildHomePage };
import homePic from "./hammer-sickle.svg";


const buildHomePage = () =>
{
    const content_dsp = document.querySelector( `#content` );
    content_dsp.textContent = ``;
    content_dsp.classList.remove(`menu`);
    content_dsp.classList.remove(`about`);
    content_dsp.classList.add(`home`);

    const picture = document.createElement( `img` );
    picture.setAttribute(`id`, `menu_pic_1`);
    picture.src = homePic;
    picture.style.height = `200px`;
    // picture.style.width = `200px`;
    picture.style.border = `1px purple solid`;

    const headline = document.createElement( `h3` );
    headline.setAttribute(`id`, `menu_headline`);

    headline.textContent = `A wonderful place! Food so good, you'll dream about your next time!\n -Food Critic`

    const menu_txt = document.createElement( `p` );
    menu_txt.setAttribute(`id`, `menu_txt`);
    menu_txt.textContent = `Come in and enjoy a hardy meal! Fresh ingredients, hot meals at affordable prices. From various cuisine such as Indian, Mexican and Thai.`
    
    content_dsp.appendChild( picture );
    content_dsp.appendChild( headline );
    content_dsp.appendChild( menu_txt );

}

