import useAxiosSecure from "../../hooks/useAxiosSecure";

const handleDeleteDataSecure = async (url) => {
  const axiosSecure = useAxiosSecure(); // Get the secure axios instance

  try {
    const response = await axiosSecure.delete(url); // Make the DELETE request
    return response.data; // Return the response data
  } catch (error) {
    console.log("Error in secure DELETE request:", error);
    return error.response; // Return error response if any
  }
};

export { handleDeleteDataSecure };
