import axios from "axios";

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/postssss"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

interface Post {
  id: number;
  title: string;
  body: string;
}
