import Topbar from "./Topbar";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const SharedLayout = () => {
  const oauthUrl = import.meta.env.VITE_APP_OAUTH_URL;
  const fetchOauthUser = async () => {
    await axios
      .get(`${oauthUrl}/api/v1/auth/user`, { withCredentials: true })
      .then((res) => {
        Cookies.set("access_token", res.data.accessToken);
        Cookies.set("refresh_token", res.data.refreshToken);
        Cookies.set("username", res.data.username);
        Cookies.set("user_id", res.data.id);
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  if (!Cookies.get("username")) {
    fetchOauthUser();
  }
  return (
    <div>
      <div className=" block md:hidden ">
        <Topbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] px-3 md:px-20 ">
        <Leftsidebar />
        {/* <Mainfeed/> */}
        <Outlet />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default SharedLayout;
