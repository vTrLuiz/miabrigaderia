export type ProductCategory = "Brigadeiros" | "Brownies" | "Pastelninho";

export type Product = {
  slug: string;
  title: string;
  img: string;
  desc: string;
  price: string;
  category: ProductCategory;
};

export const products: Product[] = [
  {
    slug: "pastelninho",
    title: "Pastelninho",
    img: "https://i.imgur.com/t8S9gS9.jpg",
    desc: "Pastel feito com massa de ninho e um recheio de nutella.",
    price: "R$ 3,50",
    category: "Pastelninho",
  },
  {
    slug: "brigadeiro-gourmet",
    title: "Brigadeiro Gourmet",
    img: "https://i.imgur.com/scxjbyc.jpg",
    desc: "O tradicional brigadeiro de chocolate, dispensa comentários.",
    price: "R$ 2,50",
    category: "Brigadeiros",
  },
  {
    slug: "brownie-recheado",
    title: "Brownie Recheado",
    img: "https://i.imgur.com/YvvBQlf.jpg",
    desc: "Um saboroso brownie recheado com um brigadeiro incrível.",
    price: "R$ 3,50",
    category: "Brownies",
  },
];
