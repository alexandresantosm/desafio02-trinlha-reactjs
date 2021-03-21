import { Header } from "./Header";
import { ListMovies } from "./ListMovies";

import '../styles/content.scss';

interface ContentProps {
  selectedGenreId: number;
}

export function Content({ selectedGenreId }: ContentProps) {

  return (
    <div className="container">
      <Header 
        selectedGenreId={selectedGenreId}
      />

      <main>
        <ListMovies 
          selectedGenreId={selectedGenreId}
        />
      </main>
    </div>
  );
}