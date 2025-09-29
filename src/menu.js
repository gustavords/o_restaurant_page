export { buildMenuPage }

const buildMenuPage = () =>
{
    const content_dsp = document.querySelector( `#content` );
    content_dsp.textContent = `MENU PAGE`
    content_dsp.classList.remove(`home`);
    content_dsp.classList.remove(`about`);
    content_dsp.classList.add(`menu`);


}