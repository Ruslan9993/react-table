import axios from "axios";

export const getComments = async () => {
  const result = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return result;
};
