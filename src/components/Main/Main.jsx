import Card from "../posts/Card";
// import { posts as initialPosts } from "../../posts";
import style from "./Main.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Tags from "../Tags/Tags";
import axios from "axios";

const API_BASE_URI = "http://localhost:3000/";

export default function Main() {
  // console.log("Render Main");

  const initialFormData = {
    title: "",
    image: "",
    content: "",
    category: "",
    tags: [],
    published: true,
  };

  const [posts, setPosts] = useState([]);
  const [publishedPost, setPublishedPost] = useState([]);
  // const publishedPost = posts.filter((post) => post.published === true);
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setPublishedPost(posts.filter((post) => post.published === true));
    const tagItems = [];

    posts.forEach((post) => {
      const postTags = post.tags;
      postTags.forEach((tag) => !tags.includes(tag) && tags.push(tag));
      // console.log(`tags is ${tags}`);
    });
    setTags(tagItems);
  }, [posts]);

  // const [postName, setPostName] = useState("");

  useEffect(() => {
    console.log(
      `stai creando un post ${
        formData.published === true ? "pubblico" : "non pubblico"
      }`
    );
  }, [formData.published]);

  function fetchPosts() {
    axios
      .get(`${API_BASE_URI}posts`)
      .then((res) => {
        console.log("post res", res);
      })
      .catch((err) => console.err(err));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // FORM ---

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setPosts((newPost) => [...posts, { id: Date.now(), ...formData }]);
  //   setFormData(initialFormData);
  //   console.log(formData);
  // }

  // POST ---

  function addPost(e) {
    e.preventDefault();

    // const newPostName = formData.title.trim();
    // if (newPostName === "") return;

    const { title, image, content, tags, published } = formData;
    console.log("Aggiungo post!");

    const newPost = {
      id: Date.now(),
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    setPosts([...posts, newPost]);
    setFormData(initialFormData);
  }

  function handleFormData(e) {
    const { name, value, type, checked } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log("change");
  }

  return (
    <main className="page-main">
      <section>
        <div className="container">
          <form className={style.form} onSubmit={addPost} action="">
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleFormData}
              placeholder="Inserisci il titolo del nuovo post"
              value={formData.title}
            />
            <input
              type="text"
              id="image"
              name="image"
              onChange={handleFormData}
              placeholder="Inserisci l'URL dell'immagine"
              value={formData.image}
            />
            <select
              name="category"
              id="category"
              onChange={handleFormData}
              value={formData.category}
            >
              <option value="">Seleziona categoria</option>
              <option value="backend">Backend</option>
              <option value="frontend">Frontend</option>
              <option value="express">Express</option>
              <option value="react">React</option>
            </select>

            <textarea
              type="text"
              name="content"
              id="content"
              onChange={handleFormData}
              placeholder="Scrivi il contenuto del post"
              value={formData.content}
            />

            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="Inserisci i tag del post"
              onChange={handleFormData}
              value={formData.tags}
            />
            <input
              type="checkbox"
              onChange={handleFormData}
              checked={formData.published}
              id="published"
              name="published"
            />

            <input type="submit" value="Aggiungi un nuovo post" />
          </form>
        </div>

        <div className="container">
          <div className="row">
            {publishedPost.map((post) => (
              <div key={post.id} className="col-6">
                <Card
                  id={post.id}
                  title={post.title}
                  description={post.content}
                  category={post.content}
                  image={post.image}
                  tags={post.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
