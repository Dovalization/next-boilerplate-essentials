import axios from "axios";

// Feel free to delete this file if you're not using it or change the url to your target API
// Also, if you're using another client, you can import it here and use it instead of axios
// it's a good idea to name your client with the same name as the API you're using
// if you're making calls to multiple APIs, create a new client for each one

// Naming convention:
// - api: the client
// - apiUtilities: the utility functions that make the calls to the API

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// You can write the utility functions separately or even better, you can create an object to group them
// and use an interface to define the function signatures
// This is just an example, feel free to delete it

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
};

// Sample utility function to update a post
async function updatePost(id: string, post: Post): Promise<Post> {
  // Remember to always catch errors and return them to the client
  try {
    const response = await api.put(`/posts/${id}`, post);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    throw new Error("An error occurred while updating the post");
  }
}

// Define the interface for the function signatures
interface ApiUtilities {
  getAllPosts: () => Promise<Post[]>;
  getPostById: (id: string) => Promise<Post>;
  createPost: (post: Post) => Promise<Post>;
  updatePost: (id: string, post: Post) => Promise<Post>;
  deletePost: (id: string) => Promise<void>;
  // If you're lazy, you can use typeof to get the signatures
  // updatePost: typeof updatePost;
}

// Finally, you can export the object as a module and use it in your code
export const apiUtilities: ApiUtilities = {
  getAllPosts: async () => await api.get("/posts"),
  getPostById: async (id) => await api.get(`/posts/${id}`),
  createPost: async (post) => await api.post("/posts", post),
  // Here we're using the utility function we've just created to update the post
  updatePost: async (id, post) => await updatePost(id, post),
  deletePost: async (id) => await api.delete(`/posts/${id}`),
};
