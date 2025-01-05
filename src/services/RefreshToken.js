import { jwtDecode } from "jwt-decode";
import axios from "axios";

const RefreshToken = (card_selling_admin_panel, logout, login) => {
  const refresh = async () => {
    let token = card_selling_admin_panel.access_token;
    if (!token) {
      return;
    }
    const decodedToken = jwtDecode(token);
    console.log("decodedToken", decodedToken);

    let decodedTokenTime = decodedToken.exp * 1000;
    let dateNow = new Date();
    let NumaricDate = dateNow.getTime();

    try {
      if (decodedTokenTime > NumaricDate) {
        return token;
      } else {
        // let data = {
        //   grant_type: "refresh_token",
        //   client_id: process.env.REACT_APP_CLIENT_ID,
        //   client_secret: process.env.REACT_APP_CLIENT_SECRECT,
        //   refresh_token: card_selling_admin_panel.refresh_token,
        // };
        let res = await axios({
          url: "/api/v1/public/auth/refresh-token",
          method: "POST",
          data: data,
          headers: {
            "Content-Type": "application/json",
          },
        });

        login(res?.data.data);
        console.log("refresh token", res.data.data.access_token);
        return res.data.data.access_token;
      }
    } catch (error) {
      console.log("error", error);
      logout();
    }
  };
  return refresh();
};

export default RefreshToken;
