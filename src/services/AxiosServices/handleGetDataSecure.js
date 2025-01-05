import useAxiosSecure from "../../hooks/useAxiosSecure";

const handleGetDataSecure = async (url) => {
  const axiosSecure = useAxiosSecure(); 
  try {
    let response = await axiosSecure.get(url); // Use the axiosSecure instance for GET requests
    return response.data; // Return the data from the response
  } catch (error) {
    console.log("Error in secure request:", error);
    return error.response; // Return error response if any
  }
};

export { handleGetDataSecure };
