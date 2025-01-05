// Import the public axios hook
import useAxiosPublic from "../../hooks/useAxiosPublic";

const handleGetDataPublic = async (url) => {
  const axiosPublic = useAxiosPublic(); // Get the public axios instance
  try {
    let response = await axiosPublic.get(url); // Use the axiosPublic instance for GET requests
    return response.data; // Return the data from the response
  } catch (error) {
    console.log("Error in public request:", error);
    return error.response; // Return error response if any
  }
};

export { handleGetDataPublic };
