import useAxiosSecure from "../../hooks/useAxiosSecure";

const handlePutDataSecure = async (url, data) => {
  const axiosSecure = useAxiosSecure(); // Get the secure axios instance

  try {
    const response = await axiosSecure.put(url, data); // Make the PUT request with the data
    return response.data; // Return the response data
  } catch (error) {
    console.log("Error in secure PUT request:", error);
    return error.response; // Return error response if any
  }
};

export { handlePutDataSecure };
