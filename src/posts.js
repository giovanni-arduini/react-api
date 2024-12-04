/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */

export const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: "https://picsum.photos/900/1200" /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    category: "frontend",
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: undefined /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    category: "express",
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: "https://picsum.photos/900/1200" /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    category: "backend",
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: "https://picsum.photos/900/1200" /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    category: "frontend",
    published: false,
  },
];