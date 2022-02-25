import styles from "./Header.module.css";

export default function Header({ text }) {
  return `
        <div>
            <h1 class="${styles.h1}">${text}</h1>
        </div>
    `;
}
