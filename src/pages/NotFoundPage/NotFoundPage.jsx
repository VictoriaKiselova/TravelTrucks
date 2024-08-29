import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Please visit out <Link to="/">Home</Link>
      </p>
    </div>
  );
}
