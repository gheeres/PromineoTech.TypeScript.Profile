import { User } from "../types.ts";
const baseUrl = `https://randomuser.me/api/`;

export function getLocalUsers(): User[] {
  return [
    { lastName: 'Heeres', firstName: 'George',
      title: 'Teacher', email: 'gheeres@gmail.com',
      photo: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    { lastName: 'Jacot', firstName: 'Ben',
      title: 'Student', email: 'ben.jacor@gmail.com',
      photo: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    { lastName: 'Mak', firstName: 'Kevin',
      title: 'Student', email: 'kmak@gmail.com',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg'
    },
  ];
}

export async function getRandomUsers(count?: number): Promise<User[]> {
  let url = `${baseUrl}?results=${ count || 10 }`;
  let res = await fetch(url);
  let json = await res.json();
  
  let users = [];
  for(let result of json.results) {
    users.push({
      lastName: result.name.last,
      firstName: result.name.first,
      title: result.name.title,
      email: result.email,
      photo: result.picture.thumbnail,
    });
  }
  return users;
}