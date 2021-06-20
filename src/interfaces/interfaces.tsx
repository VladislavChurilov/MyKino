export interface IContact {
  // name: string;
  // number: string;
  id: string;
  poster_path: string | undefined;
  title: string;
  vote_average: number;
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
