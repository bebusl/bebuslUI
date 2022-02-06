import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/components">Components</Link>
      </li>
    </ul>
  );
}
