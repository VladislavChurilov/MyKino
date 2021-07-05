export interface IMovie {
  name: string;
  id: string;
  poster_path: string | undefined;
  title: string;
  vote_average: number;
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: [object];
  homepage: string | null;
  original_title: string;
  overview: string;
  popularity: number;
  production_companies: [object];
  production_countries: [object];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: [object];
  status: string;
  ragline: string | null;
  video: boolean;
  vote_count: number;
}

export interface IRegistr {
  name: string | null;
  email: string | null;
  password?: string | null;
}

export interface ILogIn {
  email: string | null;
  password: string | null;
}
