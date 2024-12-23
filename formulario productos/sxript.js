// Lista de productos
const products = [
  { name: "Palito de Agua Frutilla", description: "Helado refrescante sabor frutilla" },
  { name: "Palito de Agua Naranja", description: "Helado refrescante sabor naranja" },
  { name: "Crema de Chocolate", description: "Helado cremoso con chocolate" },
  { name: "Crema de Dulce de Leche", description: "Helado cremoso con dulce de leche" },
  { name: "Bombón de Frutilla", description: "Helado cubierto con chocolate y relleno de frutilla" }
];

// Referencias a elementos del DOM
const productTableBody = document.querySelector("#productTable tbody");
const productFilter = document.querySelector("#productFilter");

// Función para renderizar los productos en la tabla
function renderProducts(filteredProducts = products) {
  // Limpia el contenido actual de la tabla
  productTableBody.innerHTML = "";

  // Itera sobre los productos filtrados y crea filas
  filteredProducts.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td><input type="number" min="0" placeholder="0"></td>
    `;
    productTableBody.appendChild(row);
  });
}

// Función para filtrar los productos
function filterProducts() {
  const query = productFilter.value.toLowerCase(); // Obtiene el texto ingresado en minúsculas
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );
  renderProducts(filteredProducts); // Renderiza los productos filtrados
}

// Evento para detectar cambios en el campo de búsqueda
productFilter.addEventListener("input", filterProducts);

// Renderiza todos los productos al cargar la página
renderProducts();
