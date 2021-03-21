import { useEffect, useState } from "react";
import { api } from "../services/api";

import '../styles/header.scss';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface HeaderProps {
  selectedGenreId: number;
}

export function Header({ selectedGenreId }: HeaderProps) {
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

  useEffect(() => {
    api.get<Genre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);
  
  return (
    <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}