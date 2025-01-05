import axios from "axios";

// Create an Axios instance with a base URL
export const AxiosPublic = axios.create({
  baseURL: "/url",
});

// A custom hook that returns the Axios instance
const useAxiosPublic = () => {
  return AxiosPublic;
};

// Export the custom hook as the default export
export default useAxiosPublic;
