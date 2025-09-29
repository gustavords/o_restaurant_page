export { buildMenuPage }
import menuPic from "./hammer-sickle.svg";

const buildMenuPage = () =>
{
    const content_dsp = document.querySelector( `#content` );
    content_dsp.textContent = ``;
    content_dsp.classList.remove( `home` );
    content_dsp.classList.remove( `about` );
    content_dsp.classList.add( `menu` );

    const buildMenuItem = ( id, pic_name, parentElement, title, food_description ) =>
    {
        const food_card = document.createElement( `div` );
        const food_pic = document.createElement( `img` );
        const food_info = document.createElement( `div` );
        const food_title = document.createElement( `h4` );
        const food_txt = document.createElement( `p` );

        food_card.classList.add( `food_card` );
        food_card.setAttribute( `id`, `menu_pic_${ id }` );
        food_pic.src = pic_name;
        food_title.textContent = title;
        food_txt.textContent = food_description;

        parentElement.appendChild( food_card );
        food_card.appendChild( food_pic );
        food_card.appendChild( food_info );
        food_info.appendChild( food_title );
        food_info.appendChild( food_txt );
    }

    const pageTitle = document.createElement( `h2` );
    const date = document.createElement( `p` );
    pageTitle.textContent = `Menu`;

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = new Date().toLocaleDateString("en-US", options);

    content_dsp.appendChild(pageTitle);
    content_dsp.appendChild(date);

    buildMenuItem( `1`, menuPic, content_dsp, `menu item 1`, `good yummy stuff` );
    buildMenuItem( `2`, menuPic, content_dsp, `menu item 1`, `good yummy stuff` );
    buildMenuItem( `1`, menuPic, content_dsp, `menu item 1`, `good yummy stuff` );
}