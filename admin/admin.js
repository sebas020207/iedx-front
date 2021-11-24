class Main {
  constructor() {
    this.table = document.getElementById("table");
    this.btnUsers = document.getElementById("users-tab");
    this.btnProducts = document.getElementById("product-tab");
    this.tabs = { users: 0, products: 1 };
    this.currentTab = 0;
    this.configureListeners();
    this.users = [
      {
        name: "Vidrio 1",
        email: "cuanaloricardo@gmail.com",
        photo:
          "https://www.caracteristicas.co/wp-content/uploads/2016/09/vidrio-e1559753755668.jpg",
        role: "supersayayin",
      },
    ];
    this.products = [
      {
        name: "Vidrio 1",
        description: 'SG & DG 3" or 4 3/8" c.d.',
        photo:
          "https://www.caracteristicas.co/wp-content/uploads/2016/09/vidrio-e1559753755668.jpg",
      },
    ];
  }

  configureListeners() {
    this.btnUsers.addEventListener("click", () => {
      this.changeTab(this.tabs.users);
    });
    this.btnProducts.addEventListener("click", () => {
      this.changeTab(this.tabs.products);
    });
  }

  changeTab(newTab) {
    if (newTab === this.tabs.products) {
      this.currentTab = this.tabs.products;
      this.configureProductsTab();
    } else if (newTab === this.tabs.users) {
      this.currentTab = this.tabs.users;
      this.confiureUsersTab();
    }
  }

  confiureUsersTab() {
    this.table.innerHTML = this.getHeaders([
      "Nombre",
      "Correo electrónico",
      "Imagen de perfil",
      "Rol",
    ]);
    this.users.map((user) => {
      this.table.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <img src="${user.photo}" alt="product" class="mini-image"/>
          </td>
          <td>${user.role}</td>
        </tr>
      `;
    });
  }

  getHeaders(headers = []) {
    return (
      "<tr>" +
      headers
        .map((header) => {
          return `<th>${header}</th>`;
        })
        .join("") +
      "</tr>"
    );
  }

  configureProductsTab() {
    this.table.innerHTML = this.getHeaders([
      "Nombre",
      "Descripción",
      "Miniatura",
    ]);
    this.products.map((user) => {
      this.table.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.description}</td>
          <td>
            <img src="${user.photo}" alt="product" class="mini-image"/>
          </td>
        </tr>
      `;
    });
  }
}

new Main();
