import axios from "axios";

const url = "httlp://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
