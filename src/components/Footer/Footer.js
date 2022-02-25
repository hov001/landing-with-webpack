import styles from "./Footer.module.css";

export default function Footer({ text }) {
  return `
        <div>
            <h1 class="${styles.h1}">${text}</h1>
        </div>
    `;
}
