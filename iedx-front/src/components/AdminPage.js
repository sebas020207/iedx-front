import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/admin.css";
import "../css/header-admin.css";
import "../css/admin-home.css";
import useMyInfo from "../hooks/useMyInfo";

const AdminPage = (props) => {
  const history = useHistory();
  const { role } = useMyInfo();

  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/login");
    window.location.reload();
  };

  return (
    <main className={props.className}>
      <header className="header-admin">
        <div className="logo">
          <div className="logo-inner">EDX</div>
        </div>
        <div className="title-container">
          <h2>{props.title || "Sin titulo"}</h2>
          <button
            onClick={logout}
            style={{ width: "150px", marginLeft: "auto" }}
          >
            Cerrar sesión
          </button>
        </div>
      </header>
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/admin/home">Inicio</Link>
          </li>
          <li>
            <Link to="/admin/products">Productos</Link>
            <Link to="/admin/add/product">Agregar producto</Link>
          </li>
          {role ? (
            <li>
              <Link to="/admin/users">Usuarios</Link>
              <Link to="/admin/add/user">Agregar usuario</Link>
            </li>
          ) : null}

          <li>
            <Link to="/admin/quotes">Cotizaciones</Link>
          </li>
          {role ? (
            <li>
              <Link to="/admin/historical">Historial</Link>
            </li>
          ) : null}
        </ul>
      </aside>
     
      <section className="admin-content">{props.children} </section>
    </main>
  );
};

export default AdminPage;
