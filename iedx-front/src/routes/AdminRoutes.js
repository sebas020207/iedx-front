import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import AdminProducts from "../pages/AdminProducts";
import AdminAddProduct from "../pages/AdminAddProduct";
import AdminUsers from "../pages/AdminUsers";
import AdminAddUser from "../pages/AdminAddUser";
import AdminQuotes from "../pages/AdminQuotes";
import AdminQuoteDetails from "../pages/AdminQuoteDetails";
import AdminHistorical from "../pages/AdminHistorical";
import AdminHome from "../pages/AdminHome";
import AdminViewUser from "../pages/AdminViewUser";
import AdminData from "../pages/AdminData";
import useAxios from "../hooks/useAxios";
import useAlert from "../hooks/useAlert";
import UserProvider from "../components/UserProvider";

const AdminRoutes = (props) => {
  const history = useHistory();
  const { openAlert } = useAlert();
  const { get, post } = useAxios();

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      refreshToken();
    });
    return () => unlisten();
  }, []);

  const refreshToken = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await post("admin/token/refresh", { refresh: token });
      console.log({ response });
    } catch (error) {
      console.log({ error });
      /*
      await openAlert("Tu sesión ha expirado por favor inicia sesión de nuevo");
      localStorage.removeItem('token');
      history.push('/login');
      window.location.reload();
      */
    }
  };

  return (
    <UserProvider>
      <Route path="/admin/home" exact component={AdminHome} />
      <Route path="/admin/edit" exact component={AdminData} />
      <Route path="/admin/products" exact component={AdminProducts} />
      <Route path="/admin/add/product" exact component={AdminAddProduct} />
      <Route path="/admin/edit/product/:id" exact component={AdminAddProduct} />
      <Route path="/admin/users" exact component={AdminUsers} />
      <Route path="/admin/add/user" exact component={AdminAddUser} />
      <Route path="/admin/edit/user/:id" exact component={AdminAddUser} />
      <Route path="/admin/view/user/:id" exact component={AdminViewUser} />
      <Route path="/admin/quotes" exact component={AdminQuotes} />
      <Route path="/admin/quote/:id" exact component={AdminQuoteDetails} />
      <Route path="/admin/historical" exact component={AdminHistorical} />
    </UserProvider>
  );
};

export default AdminRoutes;
