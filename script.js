
// ==========================================
// CONFIGURACIÓN DE LOS MENÚS
// ==========================================

// 0 = Domingo
// 1 = Lunes
// 2 = Martes
// 3 = Miércoles
// 4 = Jueves
// 5 = Viernes
// 6 = Sábado

const menus = {

    0: {
        entrada: "Ensalada fresca",
        descripcionEntrada: "Ensalada de vegetales frescos.",

        fuerte: "Pescado a la plancha",
        descripcionFuerte: "Acompañado de arroz y vegetales.",

        postre: "Flan de caramelo",
        descripcionPostre: "Postre casero de la casa."
    },

    1: {
        entrada: "Crema de champiñones",
        descripcionEntrada: "Crema suave de champiñones.",

        fuerte: "Pollo a la plancha",
        descripcionFuerte: "Acompañado de arroz y vegetales.",

        postre: "Brownie de chocolate",
        descripcionPostre: "Brownie casero de chocolate."
    },

    2: {
        entrada: "Sopa del día",
        descripcionEntrada: "Preparación fresca de la casa.",

        fuerte: "Carne en salsa",
        descripcionFuerte: "Acompañada de arroz y papas.",

        postre: "Helado",
        descripcionPostre: "Helado del día."
    },

    3: {
        entrada: "Bruschettas",
        descripcionEntrada: "Pan tostado con tomate y albahaca.",

        fuerte: "Pasta a la boloñesa",
        descripcionFuerte: "Pasta con salsa de carne.",

        postre: "Tiramisú",
        descripcionPostre: "Postre italiano tradicional."
    },

    4: {
        entrada: "Ensalada de la casa",
        descripcionEntrada: "Vegetales frescos de temporada.",

        fuerte: "Cerdo a la plancha",
        descripcionFuerte: "Acompañado de arroz y ensalada.",

        postre: "Torta del día",
        descripcionPostre: "Porción de torta artesanal."
    },

    5: {
        entrada: "Crema de verduras",
        descripcionEntrada: "Crema preparada con vegetales frescos.",

        fuerte: "Pescado del día",
        descripcionFuerte: "Acompañado de patacón y arroz.",

        postre: "Cheesecake",
        descripcionPostre: "Tarta de queso de la casa."
    },

    6: {
        entrada: "Sopa casera",
        descripcionEntrada: "Sopa preparada del día.",

        fuerte: "Lasaña",
        descripcionFuerte: "Lasaña de carne y queso.",

        postre: "Mousse de chocolate",
        descripcionPostre: "Mousse artesanal de chocolate."
    }
};


// ==========================================
// IDENTIFICAR EL DÍA ACTUAL
// ==========================================

//const ahora = new Date();

//const diaActual = ahora.getDay();
const diaActual = 5;

const menuHoy = menus[diaActual];


// ==========================================
// MOSTRAR LA FECHA
// ==========================================

const opcionesFecha = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Bogota"
};

document.getElementById("fecha").textContent =
    new Intl.DateTimeFormat("es-CO", opcionesFecha).format(ahora);


// ==========================================
// MOSTRAR EL MENÚ
// ==========================================

if (menuHoy) {

    document.getElementById("entrada").textContent =
        menuHoy.entrada;

    document.getElementById("descripcionEntrada").textContent =
        menuHoy.descripcionEntrada;

    document.getElementById("fuerte").textContent =
        menuHoy.fuerte;

    document.getElementById("descripcionFuerte").textContent =
        menuHoy.descripcionFuerte;

    document.getElementById("postre").textContent =
        menuHoy.postre;

    document.getElementById("descripcionPostre").textContent =
        menuHoy.descripcionPostre;

} else {

    document.getElementById("menu").innerHTML =
        '<div class="sin-menu">No hay menú disponible hoy.</div>';

}
