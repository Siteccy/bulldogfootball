/**
 * ==========================================
 * BULLDOG FOOTBALL FLAG
 * Component Loader
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("header", "components/header.html");

    loadComponent("footer", "components/footer.html");

});

/**
 * Load HTML component
 */

async function loadComponent(id, file){

    const container = document.getElementById(id);

    if(!container) return;

    try{

        const response = await fetch(file);

        const html = await response.text();

        container.innerHTML = html;

    }

    catch(error){

        console.error(

            "Component Error:",

            error

        );

    }

}