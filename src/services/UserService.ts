import { User } from "./User";

const baseUrl = 'https://randomuser.me/api';

function toUser(json: any): User | null {
  if (json) {
    return {
      lastName: json?.name?.last,
      firstName: json?.name?.first,
      title: json?.login?.username,
      email: json?.email,
      photo: json?.picture?.thumbnail,
    }
  }
  return null;
}

export async function getAllUsers(): Promise<User[]> {
  let url = `${ baseUrl }?results=10`;

  let response = await fetch(url);
  let json = await response.json();

  return json.results.map((j:any) => toUser(j));
}