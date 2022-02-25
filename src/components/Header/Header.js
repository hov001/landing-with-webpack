import "./Header.module.css";

export default function Header({ text }) {
  return `
        <div>
            <h1 class="Header__h1">${text}</h1>
        </div>
    `;
}
