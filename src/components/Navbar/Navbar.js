import styles from "./Navbar.module.css";

export default function Navbar({ text1, text2 }) {
  return `<div>
        <h1>${text1}</h1>
        <p>${text2}</p>
    </div>`;
}
