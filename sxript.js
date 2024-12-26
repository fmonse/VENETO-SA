document.addEventListener("DOMContentLoaded", () => {
    const productTable = document.getElementById("productTable");
    const searchInput = document.getElementById("search");
    const products = [
        { code: "242", name: "Balde Banana a la Crema", description: "" },
        { code: "276", name: "Balde Crema Americana", description: "" },
        { code: "231", name: "Balde Crema Chantilly", description: "" },
        { code: "241", name: "Balde Crema de Coco", description: "" },
        { code: "230", name: "Balde Crema de Vainilla", description: "" },
        { code: "270", name: "Balde Crema del Cielo", description: "" },
        { code: "260", name: "Balde Mousse Limón", description: "" },
        { code: "220", name: "Balde Dulce de Leche", description: "" },
        { code: "253", name: "Balde Ananá", description: "" },
        { code: "250", name: "Balde Durazno", description: "" },
        { code: "254", name: "Balde Frutilla al Agua", description: "" },
        { code: "251", name: "Balde Limón", description: "" },
        { code: "278", name: "Balde Limón Primavera", description: "" },
        { code: "252", name: "Balde Naranja", description: "" },
        { code: "267", name: "Balde Manzana Verde", description: "" },
        { code: "020", name: "Balde Combinado Chocolate Dulce de Leche Chantilly", description: "" },
        { code: "021", name: "Balde Combinado Chocolate Dulce de Leche Vainilla", description: "" },
        { code: "023", name: "Balde Combinado Chocolate Chantilly Frutilla", description: "" },
        { code: "024", name: "Balde Combinado Dulce de Leche Frutilla Chantilly", description: "" },
        { code: "025", name: "Balde Combinado Chocolate Frutilla Dulce de Leche", description: "" },
        { code: "026", name: "Balde Combinado Dulce de Leche Frutilla Vainilla", description: "" },
        { code: "590", name: "Almendrado x 20 unidades", description: "" },
        { code: "607", name: "Alfajor Helado x 20 unidades", description: "" },
        { code: "603", name: "Bombón Suizo x 20 unidades", description: "" },
        { code: "602", name: "Bombón Escocés x 16 unidades", description: "" },
        { code: "600", name: "Gran Mixto Dulce de Leche Americana x 25 unidades", description: "" },
        { code: "608", name: "Gran Casata Veneto x 25 unidades", description: "" },
        { code: "637", name: "Torta Rey Entera x 1 unidad", description: "" },
        { code: "912", name: "Torta Rey Chocolate x 10 unidades", description: "" },
        { code: "914", name: "Torta Rey Dulce de Leche x 10 unidades", description: "" },
        { code: "913", name: "Torta Rey Limón x 10 unidades", description: "" },
        { code: "915", name: "Línea Dorada Mascarpone", description: "" },
        { code: "916", name: "Línea Dorada Flan Casero", description: "" },
        { code: "917", name: "Línea Dorada Chocolate", description: "" },
        { code: "918", name: "Línea Dorada Tiramisú", description: "" },
        { code: "919", name: "Línea Dorada Chantilly con Frutilla", description: "" },
        { code: "726", name: "Veneto 360 Cookies Caja x 4 unidades", description: "" },
        { code: "727", name: "Veneto 360 Lemon Pie Caja x 4 unidades", description: "" },
        { code: "728", name: "Veneto 360 Tiramisú Caja x 4 unidades", description: "" },
        { code: "732", name: "Veneto 360 Super Dulce de Leche Caja x 4 unidades", description: "" },
        { code: "733", name: "Veneto 360 Flan con Dulce de Leche Caja x 4 unidades", description: "" },
        { code: "734", name: "Veneto 360 Tramontana Caja x 4 unidades", description: "" },
        { code: "736", name: "Veneto 360 Limón Primavera Caja x 4 unidades", description: "" },
        { code: "738", name: "Veneto 360 Banana Split Caja x 4 unidades", description: "" },
        { code: "975", name: "NEW Veneto 300 Super Chocolate Suizo", description: "" },
        { code: "973", name: "NEW Veneto 300 Banana Split", description: "" },
        { code: "974", name: "NEW Veneto 300 Cookies and Cream", description: "" },
        { code: "976", name: "NEW Veneto 300 Crema Tramontana", description: "" },
        { code: "971", name: "NEW Veneto 300 Flan con Dulce de Leche", description: "" },
        { code: "970", name: "NEW Veneto 300 Frutilla a la Crema", description: "" },
        { code: "972", name: "NEW Veneto 300 Super Dulce de Leche", description: "" },
    ];

    // Renderizar productos en la tabla
    const renderTable = (filteredProducts = []) => {
        productTable.innerHTML = ""; // Limpiar la tabla
        filteredProducts.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td><input type="number" min="0" value="0"></td>
            `;
            productTable.appendChild(row);
        });
    };

    // Filtrar productos en función del texto ingresado
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query === "") {
            // Si el filtro está vacío, no mostrar productos
            productTable.innerHTML = "";
        } else {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.code.includes(query)
            );
            renderTable(filteredProducts);
        }
    });

    // Inicialmente no mostrar productos
    productTable.innerHTML = "";
    // Mantener filas fijadas cuando la cantidad es mayor a 0
productTable.addEventListener("input", (event) => {
    if (event.target.type === "number") {
        const row = event.target.closest("tr");
        const quantity = parseInt(event.target.value, 10) || 0;

        if (quantity > 0) {
            // Agregar clase para marcar como "fijado"
            row.classList.add("pinned");
            row.dataset.pinned = "true"; // Atributo para identificar la fila
        } else {
            // Eliminar clase y atributo si la cantidad es 0
            row.classList.remove("pinned");
            delete row.dataset.pinned;
        }
    }
});

})
// Modificar renderización del filtro para incluir las filas fijadas
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    const pinnedRows = Array.from(productTable.querySelectorAll("tr.pinned"));

    if (query === "") {
        // Si no hay filtro, solo mostrar las filas fijadas
        productTable.innerHTML = "";
        pinnedRows.forEach(row => productTable.appendChild(row));
    } else {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.code.includes(query)
        );

        productTable.innerHTML = ""; // Limpiar la tabla
        renderTable(filteredProducts); // Renderizar productos filtrados

        // Reagregar filas fijadas al final de la tabla
        pinnedRows.forEach(row => {
            if (!productTable.contains(row)) productTable.appendChild(row);
        });
    }
});
// Mantener filas fijadas cuando la cantidad es mayor a 0
productTable.addEventListener("input", (event) => {
    if (event.target.type === "number") {
        const row = event.target.closest("tr");
        const quantity = parseInt(event.target.value, 10) || 0;

        if (quantity > 0) {
            // Agregar clase para marcar como "fijado"
            row.classList.add("pinned");
            row.dataset.pinned = "true"; // Atributo para identificar la fila
        } else {
            // Eliminar clase y atributo si la cantidad es 0
            row.classList.remove("pinned");
            delete row.dataset.pinned;
        }
    }
});

// Modificar renderización del filtro para incluir las filas fijadas
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    const pinnedRows = Array.from(productTable.querySelectorAll("tr.pinned"));

    if (query === "") {
        // Si no hay filtro, solo mostrar las filas fijadas
        productTable.innerHTML = "";
        pinnedRows.forEach(row => productTable.appendChild(row));
    } else {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.code.includes(query)
        );

        productTable.innerHTML = ""; // Limpiar la tabla
        renderTable(filteredProducts); // Renderizar productos filtrados

        // Reagregar filas fijadas al final de la tabla
        pinnedRows.forEach(row => {
            if (!productTable.contains(row)) productTable.appendChild(row);
        });
    }
});