document.addEventListener("DOMContentLoaded", () => {
    const productTableBody = document.querySelector("#productTable tbody");
    const partialOrderBody = document.querySelector("#partialOrder tbody");
    const searchInput = document.querySelector("#searchInput");
    const submitOrderButton = document.querySelector("#submitOrder");

    const products = [ { code: "242", name: "Balde Banana a la Crema", description: "Balde Común" },
        { code: "276", name: "Balde Crema Americana", description: "Balde Común" },
        { code: "231", name: "Balde Crema Chantilly", description: "Balde Común" },
        { code: "241", name: "Balde Crema de Coco", description: "Balde Común" },
        { code: "230", name: "Balde Crema de Vainilla", description: "Balde Común" },
        { code: "270", name: "Balde Crema del Cielo", description: "Balde Común" },
        { code: "260", name: "Balde Mousse Limón", description: "Balde Común" },
        { code: "220", name: "Balde Dulce de Leche", description: "Balde Común" },
        { code: "253", name: "Balde Ananá", description: "Balde Común" },
        { code: "250", name: "Balde Durazno", description: "Balde Común" },
        { code: "254", name: "Balde Frutilla al Agua", description: "Balde Común" },
        { code: "251", name: "Balde Limón", description: "Balde Común" },
        { code: "278", name: "Balde Limón Primavera", description: "Balde Común" },
        { code: "252", name: "Balde Naranja", description: "Balde Común" },
        { code: "267", name: "Balde Manzana Verde", description: "Balde Común" },
        { code: "020", name: "Balde Combinado Chocolate Dulce de Leche Chantilly", description: "Balde Combinado" },
        { code: "021", name: "Balde Combinado Chocolate Dulce de Leche Vainilla", description: "Balde Combinado" },
        { code: "023", name: "Balde Combinado Chocolate Chantilly Frutilla", description: "Balde Combinado" },
        { code: "024", name: "Balde Combinado Dulce de Leche Frutilla Chantilly", description: "Balde Combinado" },
        { code: "025", name: "Balde Combinado Chocolate Frutilla Dulce de Leche", description: "Balde Combinado" },
        { code: "026", name: "Balde Combinado Dulce de Leche Frutilla Vainilla", description: "Balde Combinado" },
        { code: "590", name: "Almendrado x 20 unidades", description: "Postre Helados" },
        { code: "607", name: "Alfajor Helado x 20 unidades", description: "Postre Helados" },
        { code: "603", name: "Bombón Suizo x 20 unidades", description: "Postre Helados" },
        { code: "602", name: "Bombón Escocés x 16 unidades", description: "Postre Helados" },
        { code: "600", name: "Gran Mixto Dulce de Leche Americana x 25 unidades", description: "Postre Helados" },
        { code: "608", name: "Gran Casata Veneto x 25 unidades", description: "Postre Helados" },
        { code: "637", name: "Torta Rey Entera", description: "Tortas Heladas" },
        { code: "912", name: "Torta Rey Chocolate", description: "Tortas Heladas" },
        { code: "914", name: "Torta Rey Dulce de Leches", description: "Tortas Heladas" },
        { code: "913", name: "Torta Rey Limón", description: "Tortas Heladas" },
        { code: "915", name: "Línea Dorada Mascarpone", description: "Linea Dorada" },
        { code: "916", name: "Línea Dorada Flan Casero", description: "Linea Dorada" },
        { code: "917", name: "Línea Dorada Chocolate", description: "Linea Dorada" },
        { code: "918", name: "Línea Dorada Tiramisú", description: "Linea Dorada" },
        { code: "919", name: "Línea Dorada Chantilly con Frutilla", description: "Linea Dorada" },
        { code: "975", name: "NEW Veneto 300 Super Chocolate Suizo", description: "Pote 300g x 4 unidades" },
        { code: "973", name: "NEW Veneto 300 Banana Split", description: "Pote 300g x 4 unidades" },
        { code: "974", name: "NEW Veneto 300 Cookies and Cream", description: "Pote 300g x 4 unidades" },
        { code: "976", name: "NEW Veneto 300 Crema Tramontana", description: "Pote 300g x 4 unidades" },
        { code: "971", name: "NEW Veneto 300 Flan con Dulce de Leche", description: "Pote 300g x 4 unidades" },
        { code: "970", name: "NEW Veneto 300 Frutilla a la Crema", description: "Pote 300g x 4 unidades" },
        { code: "972", name: "NEW Veneto 300 Super Dulce de Leche", description: "Pote 300g x 4 unidades" },
        { code: "920", name: "TOO GOOD AM FRUTOS ROJOS", description: "SIN TACC X 230g" },
        { code: "921", name: "TOO GOOD CHOCOLATE", description: "SIN TACC X 230g" },
    { code: "922", name: "TOO GOOD DULCE DE LECHE", description: "SIN TACC X 230g" },
    { code: "923", name: "TOO GOOD FRUTILLA", description: "SIN TACC X 230g" },
    { code: "924", name: "TOO GOOD GRANIZADO", description: "SIN TACC X 230g" },
    { code: "925", name: "TOO GOOD LIMON", description: "SIN TACC X 230g" },
    { code: "926", name: "TOO GOOD SUPER FLAN", description: "SIN TACC X 230g" },
    { code: "925", name: "TOO GOOD BANANA", description: "SIN TACC X 230g" },
    { code: "311", name: "TOO GOOD COCO", description: "SIN TACC X 230g" },
    { code: "927", name: "TOOGOOD KETO CHOCONEGR", description: "SIN TACC X 230g" },
    { code: "928", name: "TOOGOOD KETO PEANUTBUTT", description: "SIN TACC X 230g" },
    { code: "929", name: "TOOGOOD VEGANO DL GRANIZ", description: "SIN TACC X 230g" },
    { code: "930", name: "TOOGOOD VEGANO LIMON", description: "SIN TACC X 230g" },
    { code: "245", name: "Balde Banana Split c/Dulce de Leche", description: "Balde especiales 10L" },
    { code: "332", name: "Balde Chantilly con Frutillas", description: "Balde especiales 10L" },
    { code: "210", name: "Balde Chocolate", description: "Balde especiales 10L" },
    { code: "288", name: "Balde Coconut split", description: "Balde especiales 10L" },
    { code: "291", name: "Balde Crema Tramontana", description: "Balde especiales 10L" },
    { code: "402", name: "Balde Crema Borracha", description: "Balde especiales 10L" },
    { code: "221", name: "Balde Dulce de Leche Granizado", description: "Balde especiales 10L" },
    { code: "248", name: "Balde Durazno al Oporto", description: "Balde especiales 10L" },
    { code: "274", name: "Balde Frambuesa", description: "Balde especiales 10L" },
    { code: "331", name: "Balde Frutilla Granizada", description: "Balde especiales 10L" },
    { code: "244", name: "Balde Flan con Dulce de Leche", description: "Balde especiales 10L" },
    { code: "240", name: "Balde Frutilla a la Crema", description: "Balde especiales 10L" },
    { code: "271", name: "Balde Granizado", description: "Balde especiales 10L" },
    { code: "283", name: "Balde Mascarpone con Frut. del Bosque", description: "Balde especiales 10L" },
    { code: "290", name: "Balde Lemon Pie", description: "Balde especiales 10L" },
    { code: "273", name: "Balde Mantechoc", description: "Balde especiales 10L" },
    { code: "238", name: "Balde Crema Veneto bombón", description: "Balde especiales 10L" },
    { code: "247", name: "Balde Menta Granizada", description: "Balde especiales 10L" },
    { code: "272", name: "Balde Sambayón al Oporto", description: "Balde especiales 10L" },
    { code: "285", name: "Balde Cookies & Cream", description: "Balde especiales 10L" },
    { code: "013", name: "Balde Base Planta BANANA", description: "Balde Basado en Plantas 10L" },
    { code: "016", name: "Balde Base Planta FRUTILLA", description: "Balde Basado en Plantas 10L" },
    { code: "018", name: "Balde Base Planta LIMON", description: "Balde Basado en Plantas 10L" },
    { code: "019", name: "Balde Base Planta FLAN C/CARAMELO", description: "Balde Basado en Plantas 10L" },
    { code: "030", name: "Balde Base Planta CHOCOLATE", description: "Balde Basado en Plantas 10L" },
    { code: "033", name: "Balde Base Planta BANANA C/NUEZ", description: "Balde Basado en Plantas 10L" },
    { code: "060", name: "Balde Base Planta CHOCOLATE MARROC", description: "Balde Basado en Plantas 10L" },
    { code: "061", name: "Balde Base Planta CHOCOL C/ALMENDRAS", description: "Balde Basado en Plantas 10L" },
    { code: "676", name: "Alfajor Helado x 8 unidades CARTULINA", description: "Linea Impulsiva" },
    { code: "615", name: "ALFAJOR HELADO X4 unidades PACK X 4 cajas", description: "Linea Impulsiva" },
    { code: "616", name: "AMERIC BOM CROCK X4 unidades PACK X 4 cajas", description: "Linea Impulsiva" },
    { code: "675", name: "Almendrado x 8 unidades CARTULINA", description: "Linea Impulsiva" },
    { code: "672", name: "Bombón Escocés x 6 unidades CARTULINA", description: "Linea Impulsiva" },
    { code: "659", name: "Selección de Bombones x 6 unidades pack x 4 cajas", description: "Linea Impulsiva" },
    { code: "674", name: "Gran Casata x 8 unidades CARTULINA ", description: "Linea Impulsiva" },
    { code: "543", name: "Palitos Frutales X10 Surtidos Pack X4C", description: "Linea Impulsiva" },
    { code: "665", name: "Palito Bombón X8U PACK X4 CARTULINA", description: "" },
    { code: "642", name: "Pote 500g Limón", description: "Linea Impulsiva" },
    { code: "723", name: "Pote 500g Nº 6 Choco Dulce de Leche Chantilly", description: "Linea Impulsiva" },
    { code: "724", name: "Pote 500g Nº 8 Frutilla Dulce de Leche Chantilly", description: "Linea Impulsiva" },
    { code: "770", name: "Postre Veneto Granizado", description: "Linea Impulsiva" },
    { code: "771", name: "Postre Veneto Lemon Pie", description: "Linea Impulsiva" },
    { code: "772", name: "Postre Veneto Cookies", description: "Linea Impulsiva" },
    { code: "773", name: "Postre Veneto Choco Banana Split", description: "Linea Impulsiva" },
    { code: "664", name: "Sorbete Fruta X 10 unidades PACK X4 CARTULINA", description: "Linea Impulsiva" },
    { code: "544", name: "Palitos Frutales X20 unidades Surtido", description: "Linea Impulsiva" },
    { code: "681", name: "La Barra Veneto Nº1", description: "Chocolate/Frutilla/Dulce de Leche" },
    { code: "682", name: "La Barra Veneto Nº2", description: "Dulce de Leche/Frutilla/Vainilla" },
    { code: "683", name: "La Barra Veneto Nº3", description: "Chocolate Blanco/Chocolate Suizo/Dulce de Leche" },
    { code: "684", name: "La Barra Veneto Nº4", description: "Durazno/Lemon Pie/Frutilla" },
    { code: "685", name: "La Barra Veneto Nº5", description: "Chocolate/Chantilly/Frutilla" },
    { code: "686", name: "La Barra Veneto Nº6", description: "Chocolate/Dulce de Leche/Chantilly" },
    { code: "687", name: "La Barra Veneto Nº7", description: "Chocolate/Dulce de Leche/Vainilla" },
    { code: "688", name: "La Barra Veneto Nº8", description: "Dulce de Leche/Frutilla/Chantilly" },
    { code: "746", name: "Cool Cream 1,5Kg", description: "Rojo Frutilla-Chocolate-Dulce de Leche-Americana" },
    { code: "747", name: "Cool Cream 1,5Kg", description: "Azul Dulce de Leche-Frutilla-Vainilla-Limon" },
    { code: "743", name: "Cool Cream 500g", description: "Prem Violeta DLG-Fcr" },
    { code: "748", name: "Cool Cream 1,5Kg", description: "Prem Dulce de Leche Granizado-Flan-Frutilla-Chantilly Nº3" },
    { code: "749", name: "Cool Cream 1,5Kg", description: "Premi Granizado-Dulce de Leche-Frutilla-Chocolate Nº4" },
    { code: "296", name: "Balde Dulce de Leche Veneto", description: "Baldes Extra" },
    { code: "236", name: "Balde Crema de Higos", description: "Baldes Extra" },
    { code: "284", name: "Balde Chocolate Marroc", description: "Baldes Extra" },
    { code: "287", name: "Balde Chocolate Rogger", description: "Baldes Extra" },
    { code: "410", name: "Balde ChocoCrock", description: "Baldes Extra" },
    { code: "249", name: "Balde Kinotos al Whisky", description: "Baldes Extra" },
    { code: "219", name: "Balde Chocolate Veneto", description: "Baldes Extra" },
    { code: "224", name: "Balde Super Dulce de Leche Bombón", description: "Baldes Extra" },
    { code: "456", name: "Balde Super chocolate suizo", description: "Baldes Extra" },
    { code: "281", name: "Balde Tiramisú", description: "Baldes Extra" },
    { code: "234", name: "Balde Crema Rusa o de Nuez", description: "Baldes Extra" },
    { code: "218", name: "Balde Chocolate Bombón", description: "Baldes SUPER Extra" },
    { code: "216", name: "Balde Chocolate con Almendras", description: "Baldes SUPER Extra" },
    { code: "215", name: "Balde Chocolate con Nuez", description: "Baldes SUPER Extra" },
    { code: "223", name: "Balde Dulce de Leche con Almendras", description: "Baldes SUPER Extra" },
    { code: "222", name: "Balde Dulce de Leche con Nuez", description: "Baldes SUPER Extra" },
    { code: "299", name: "Balde Pistacho", description: "Baldes SUPER Extra" },
    { code: "261", name: "Balde Mousse de Chocolate Amargo", description: "Baldes SUPER Extra" },
    { code: "217", name: "Balde Chocolate Bariloche", description: "Baldes SUPER Extra" },
    { code: "213", name: "Balde Chocolate Blanco", description: "Baldes SUPER Extra" },
    { code: "214", name: "Balde Chocolate Selva Negra", description: "Baldes SUPER Extra" },
    { code: "233", name: "Balde Cerezas a la Panna", description: "Baldes SUPER Extra" },
    { code: "646", name: "Americano Bombón Crock x 20 unidades", description: "Linea Impulsiva" },
    { code: "645", name: "Americano Bombón x 25 unidades", description: "Linea Impulsiva" },
    { code: "630", name: "Americano x 26 unidades", description: "Linea Impulsiva" },
    { code: "611", name: "Copa Aruba Nº1 x 12 unidades", description: "Chantilly/Dulce de Leche" },
    { code: "617", name: "Copa Aruba Nº3 x 12 unidades", description: "Frutilla/Chantilly" },
    { code: "750", name: "Copa Candy x 18 unidades", description: "Linea Impulsiva" },
    { code: "007", name: "Copa Flan con Dulce de Leche x 18 unidades", description: "Linea Impulsiva" },
    { code: "648", name: "Palito Bombón x 26 unidades", description: "Linea Impulsiva" },
    { code: "629", name: "RojiBlanco x 26 unidades", description: "Linea Impulsiva" },
    { code: "628", name: "RojiNegro x 26 unidades", description: "Linea Impulsiva" },
    { code: "6661", name: "VenetoGol Cristal RojiBlanco x 18 unidades", description: "Linea Impulsiva" },
    { code: "6701", name: "VenetoGol Cristal RojiNegro x 18 unidades", description: "Linea Impulsiva" },
    { code: "5981", name: "VenetoGol Cristal RojiBlanco x 4 cajas x 4 unidades", description: "Linea Impulsiva" },
    { code: "5971", name: "VenetoGol Cristal RojiNegro x 4 cajas x 4 unidades", description: "Linea Impulsiva" },
    { code: "545", name: "Palitos Frutales Frutilla x 30 unidades", description: "Linea Impulsiva" },
    { code: "546", name: "Palitos Frutales Limón x 30 unidades", description: "Linea Impulsiva" },
    { code: "547", name: "Palitos Frutales Naranja x 30 unidades", description: "Linea Impulsiva" },
    { code: "548", name: "Palito Tutti Frutti x 30 unidades", description: "Linea Impulsiva" },
    { code: "558", name: "Palitos Tri-Tri x 30 unidades", description: "Linea Impulsiva" },
    { code: "797", name: "Palitos Frutales Ananá x 30 unidades", description: "Linea Impulsiva" },
    { code: "795", name: "Palitos Frutales Uva x 30 unidades", description: "Linea Impulsiva" },
    { code: "301", name: "Candy Líquido Blanco x 8 Ltrs", description: "Candy" },
    { code: "303", name: "Candy Líquido Dulce de Leche x 8 Ltrs", description: "Candy" },
    { code: "302", name: "Candy Líquido Chocolate x 8 Ltrs", description: "Candy" },
    { code: "417", name: "Candy Líquido Frutilla x 8 Ltrs", description: "Candy" },
    { code: "005", name: "Gigabom Americana x 15 unidades", description: "Gigabom" },
    { code: "004", name: "Gigabom Dulce de Leche x 15 unidades", description: "Gigabom" },
    { code: "624", name: "Cono Tuo Americana x 12 unidades", description: "Cono Tuo" },
    { code: "625", name: "Cono Tuo Dulce de Leche x 12 unidades", description: "Cono Tuo" },
    { code: "626", name: "Cono Tuo Chocolate Blanco x 12 unidades", description: "Cono Tuo" },
    { code: "700", name: "Vegano Choco Free de Planta x 8 unidades", description: "Veganos Veneto" },
    { code: "689", name: "Vegano Fruti Free de Planta x 8 unidades", description: "Veganos Veneto" },
    { code: "C120", name: "ALEMANAS CON NUEZ", description: "x96 CAFETERIA" },
    { code: "C703", name: "ALFAJOR DE CHOCOLATE", description: "x20 CAFETERIA" },
    { code: "C702", name: "ALFAJOR DE MAICENA", description: "x20 CAFETERIA" },
    { code: "MF04", name: "ALMIBAR EN SACHET", description: "x1 CAFETERIA" },
    { code: "C210", name: "BIZCOCHO CUADRADO ENTRERRI", description: "x96 CAFETERIA" },
    { code: "C203", name: "BIZCOCHO REDONDO TRADICION", description: "x96 CAFETERIA" },
    { code: "C704", name: "BROWNIE", description: "x28 CAFETERIA" },
    { code: "C160", name: "CAJA MIXTA N°1 (C109-C122)", description: "x72 CAFETERIA" },
    { code: "C161", name: "CAJA MIXTA N°2 (C103-C135)", description: "x96 CAFETERIA" },
    { code: "C163", name: "CAJA MIXTA N°5 (C132-C133)", description: "x96 CAFETERIA" },
    { code: "C391", name: "CHURROS RELLENOS", description: "x120 CAFETERIA" },
    { code: "C390", name: "CHURROS", description: "x120 CAFETERIA" },
    { code: "C175", name: "DONNUTS BAÑ. RELL. ROSA", description: "X48U CAFETERIA" },
    { code: "C174", name: "DONNUTS BAÑADAS RELLENAS", description: "x48 CAFETERIA" },
    { code: "C173", name: "DONNUTS RELLENAS", description: "x48 CAFETERIA" },
    { code: "C171", name: "DONNUTS", description: "x48 CAFETERIA" },
    { code: "C103", name: "FACTURA HOJALDRE C/CREMA", description: "x96 CAFETERIA" },
    { code: "C153", name: "FACTURA PANAL C/MEMBRILLO", description: "x112 CAFETERIA" },
    { code: "C135", name: "LIBRITO BATATA", description: "x96 CAFETERIA" },
    { code: "C109", name: "MEDIALUNAS CON CREMA", description: "x72 CAFETERIA" },
    { code: "C145", name: "MEDIALUNAS DULCES MARGAR", description: "x168 CAFETERIA" },
    { code: "C124", name: "MEDIALUNAS MANT DULCES", description: "x168 CAFETERIA" },
    { code: "C125", name: "MEDIALUNAS MANT SALADAS", description: "x168 CAFETERIA" },
    { code: "C146", name: "MEDIALUNAS SALADAS MARGAR", description: "x168 CAFETERIA" },
    { code: "C219", name: "PAN DE CAMPO", description: "x250g x12 CAFETERIA" },
    { code: "C220", name: "PAN HAMBURGUESA DE CAMPO", description: "x30 CAFETERIA" },
    { code: "C204", name: "PRECOCIDO BAGUETIN", description: "x30 CAFETERIA" },
    { code: "C215", name: "PRECOCIDO FLAUTITA 3 CORTES", description: "x20 CAFETERIA" },
    { code: "C205", name: "PRECOCIDO MIGNON", description: "x100 CAFETERIA" },
    { code: "C206", name: "PRECOCIDO PANCITO INTEG.", description: "x120 CAFETERIA" },
    { code: "C207", name: "PRECOCIDO PANCITO MANTECA", description: "x120 CAFETERIA" },
    { code: "C132", name: "SACRAMENTO DULCE MEMBRILLO", description: "x96 CAFETERIA" },
    { code: "C122", name: "VIGILANTES CON AZUCAR", description: "x72 CAFETERIA" },
    
    { code: "SJ011", name: "SJ MEDIALUNA SALADA P-LEU", description: "x180U CAFETERIA" },
    { code: "SJ012", name: "SJ CIABATTA CONGELADA", description: "X 30 UN CAFETERIA" },
    { code: "NSA0031", name: "NSA CHIPA CONGELADO", description: "X 4 KG CAFETERIA" },

    { code: "PAMF025", name: "PAM ANILLAS CALAMAR RABA", description: "x800G PAMPA FOOD" },
    { code: "PAMF023", name: "PAM BARRITA POLLO CHEDDAR", description: "x500G PAMPA FOOD" },
    { code: "PAMF016", name: "PAM BASTONES MERLUZA", description: "x500G PAMPA FOOD" },
    
    { code: "C344", name: "TARTA DE CHOCLO", description: "x250g x9 TARTAS Y EMPANADAS" },
    { code: "C345", name: "TARTA DE VERDURA", description: "x250g x9 TARTAS Y EMPANADAS" },
    { code: "C343", name: "TARTA JAMON Y QUESO", description: "x250g x9 TARTAS Y EMPANADAS" },

    { code: "SP000013", name: "SP AROS DE CEBOLLA", description: "x 1.1 KG PAPAS" },
    { code: "SP000004", name: "SP BASTON CORTE TRADICIONAL", description: "10x10x2.5K PAPAS" },
    { code: "SP000008", name: "SP GUACAMOLE", description: "x 0.453 KG PAPAS" },
    { code: "SP000018", name: "SP PULPA DE PALTA", description: "x0.453KG PAPAS" },
    { code: "501", name: "Telgopor x 1/1 kg.", description: "x 20 u" },
    { code: "502", name: "Telgopor x 1/2 kg.", description: "x 25 u" },
    { code: "503", name: "Telgopor x 1/4 kg.", description: "x 100 u" },
    { code: "504", name: "Telgopor x 3/4 kg.", description: "x 20 u" },
    { code: "101", name: "Bandeja 101", description: "x 200 unid (1 bocha)" },
    { code: "102", name: "Bandeja 102 Hawaiana", description: "x 100 unid" },
    { code: "143", name: "Bandeja 208 Banana Split", description: "x 100 unid" },
    { code: "500", name: "Bolsa Porta 1/2 Kg.", description: "x 100" },
    { code: "506", name: "Bolsa Porta Barra", description: "x 100 u" },
    { code: "507", name: "Bolsa Porta Kilo", description: "x 100 u" },
    { code: "513", name: "Cucharas Sundae FourPlast", description: "x 1 kg." },
    { code: "520", name: "Cucharas Europeas FourPlast", description: "x 1 kg." },
    { code: "519", name: "Servilleta 18 x 18", description: "x 1000 u c/ logo" },
    { code: "144", name: "Vaso Don Pedro", description: "x 50 unid" },
    { code: "138", name: "Vaso Sundae mediano", description: "x 330cc x 100 u" },
    
    { code: "318", name: "Almendras", description: "x 1 kg" },
    { code: "316", name: "Azúcar", description: "x 1 kg" },
    { code: "304", name: "Baño de Repostería", description: "x 10 kg" },
    { code: "312", name: "Cerezas Rojas", description: "x 3,500 kg" },
    { code: "165", name: "Crocante de Maní", description: "x 1 kg." },
    { code: "306", name: "Dulce de Leche Familiar", description: "x 10Kg" },
    { code: "307", name: "Dulce de Leche Repostero", description: "x 10Kg" },
    { code: "184", name: "Frutillas", description: "x kg." },
    { code: "189", name: "Merengues", description: "x 100 g." },
    { code: "188", name: "Micro Galletitas", description: "x kg." },
    { code: "164", name: "Mini Rocklets", description: "x 44 x 10 G" },
    { code: "317", name: "Nueces", description: "x 1 kg" },
    { code: "17515", name: "Salsa de Caramelo Eureka", description: "x 840 gr" },
    { code: "17516", name: "Salsa de Chocolate Eureka", description: "x 840 gr." },
    { code: "17517", name: "Salsa de Dulce de Leche Eureka", description: "x 840 gr" },
    { code: "17519", name: "Salsa de Frutilla Eureka", description: "x 840 gr" }
];

   
// Renderizar productos en la tabla
function renderProducts(filteredProducts) {
    productTableBody.innerHTML = "";

    filteredProducts.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td><input type="number" min="0" value="0"></td>
        `;
        productTableBody.appendChild(row);

        const quantityInput = row.querySelector("input[type='number']");
        quantityInput.addEventListener("input", () => {
            updatePartialOrder(product, quantityInput.value);
        });
    });
}

// Filtrar productos por búsqueda
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    if (query === "") {
        productTableBody.innerHTML = ""; // Si no hay búsqueda, no mostrar productos
        return;
    }

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.code.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
});

// Actualizar pedido parcial
function updatePartialOrder(product, quantity) {
    let row = Array.from(partialOrderBody.children).find(
        (r) => r.querySelector("td").textContent === product.code
    );

    if (quantity > 0) {
        if (!row) {
            row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${quantity}</td>
            `;
            partialOrderBody.appendChild(row);
        } else {
            row.querySelector("td:last-child").textContent = quantity;
        }
    } else if (row) {
        partialOrderBody.removeChild(row);
    }
}

// Generar Excel y enviar por WhatsApp
submitOrderButton.addEventListener("click", () => {
    const razonSocial = document.getElementById("razonSocial").value.trim();
    const fechaEntrega = document.getElementById("fechaEntrega").value;

    // Validación de campos obligatorios
    if (!razonSocial || !fechaEntrega) {
        alert(
            "Por favor, completa la Razón Social y la Fecha de Entrega antes de enviar el pedido."
        );
        return;
    }

    const rows = document.querySelectorAll("#partialOrder tbody tr");
    if (rows.length === 0) {
        alert("No hay productos en el pedido parcial.");
        return;
    }

    // Crear un array de objetos con los datos de la tabla
    const data = Array.from(rows).map((row) => {
        const cells = row.querySelectorAll("td");
        return {
            Código: cells[0].textContent.trim(), // Alfanumérico
            Nombre: cells[1].textContent.trim(), // Alfanumérico
            Cantidad: parseFloat(cells[3].textContent.trim()) || 0, // Numérico
        };
    });

    const workbook = XLSX.utils.book_new();

    // Configuración adecuada para evitar errores en Excel
    const worksheet = XLSX.utils.json_to_sheet(data, {
        header: ["Código", "Nombre", "Cantidad"],
    });

    // Asegurar que todas las columnas tengan el formato correcto
    const wscols = [
        { wch: 20 }, // Ancho de columna para 'Código'
        { wch: 30 }, // Ancho de columna para 'Nombre'
        { wch: 10 }, // Ancho de columna para 'Cantidad'
    ];
    worksheet["!cols"] = wscols;

    XLSX.utils.book_append_sheet(workbook, worksheet, "Pedido");

    // Convertir el archivo a formato binario y descargar
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const fileName = `${razonSocial.replace(/\s+/g, "_")}_${fechaEntrega}.xlsx`;

    const fileURL = window.URL.createObjectURL(blob);

    // Descargar el archivo
    const downloadLink = document.createElement("a");
    downloadLink.href = fileURL;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Abrir WhatsApp
    const phoneNumber = "5493425028297" // Reemplaza con el número del destinatario
    const message = encodeURIComponent(`Hola, adjunto el pedido`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
});

// Al inicio, no mostrar productos
renderProducts([]);
});
