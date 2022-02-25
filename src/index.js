import Header from "./components/Header/Header";

const app = document.getElementById("app");

app.insertAdjacentHTML("beforeend", Header({ text: "Hello world!!" }));
