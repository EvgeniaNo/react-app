import axios from "axios";

export async function CallFetch() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data.title;
  } catch (error) {
    console.log(error);
  }
}
