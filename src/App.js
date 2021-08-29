import MovieList from "./MovieList";
import Nav from "./Nav";
import "./styles.css";
import { MovieProvider } from "./MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
