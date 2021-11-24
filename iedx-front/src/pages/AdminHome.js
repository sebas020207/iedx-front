import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminPage from "../components/AdminPage";
import useMyInfo from "../hooks/useMyInfo";

const AdminHome = (props) => {
  const { name, address, phone, email, role, userImageUrl } = useMyInfo();
  return (
    <AdminPage title="Inicio">
      <div className="user-welcome">
        <figure>
          <img src={userImageUrl} alt="Foto de usuario" />
        </figure>
        <div className="user-welcome-message">
          <h1>Bienvenido!</h1>
          <h1 className="user-name">Fulanito perez perez</h1>
          <p>{role ? "Administrador Principal" : "Administrador secundario"}</p>
        </div>
      </div>

      <div className="user-info">
        <div className="user-info-item">
          <p>Nombre</p>
          <p>{name}</p>
        </div>

        <div className="user-info-item">
          <p>Dirección</p>
          <p>{address}</p>
        </div>

        <div className="user-info-item">
          <p>Teléfono</p>
          <p>{phone}</p>
        </div>

        <div className="user-info-item">
          <p>Email</p>
          <p>{email}</p>
        </div>
      </div>

      <Link to="/admin/edit">
        <button className="btn-primary">Cambiar datos</button>
      </Link>
    </AdminPage>
  );
};

export default AdminHome;
