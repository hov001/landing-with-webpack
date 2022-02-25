import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export const homePage = [
  {
    component: Header,
    props: {
      text: "Header",
    },
  },
  {
    component: Navbar,
    props: {
      text1: "Navbar title",
      text2: "Navbar text",
    },
  },
  {
    component: Footer,
    props: {
      text: "Footer",
    },
  },
];
