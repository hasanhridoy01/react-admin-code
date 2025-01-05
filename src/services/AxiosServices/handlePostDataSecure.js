// Import the secure axios hook
import useAxiosSecure from "../../hooks/useAxiosSecure";

const handlePostDataSecure = async (url, data) => {
  const axiosSecure = useAxiosSecure(); // Get the secure axios instance

  try {
    const response = await axiosSecure.post(url, data); // Make the POST request with the data
    return response.data; // Return the response data
  } catch (error) {
    console.log("Error in secure POST request:", error);
    return error.response; // Return error response if any
  }
};

export { handlePostDataSecure };
