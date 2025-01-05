import axios from "axios";

const handleGetData = async (url, token) => {
  let headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    let response = await axios({
      method: "get",
      url: url,
      headers: headers,
    });

    return response;
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};

export { handleGetData };
