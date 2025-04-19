import { User } from "../types";
import config from "../config";

const users: User[] = [
  { name: "Tony Morales", title: "Student", email: "tmorales@gmail.com", 
    avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    followers: 1343 },
  { name: "George Heeres", title: "Instructor", email: "gheeres@gmail.com", 
    avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
    followers: 2 },
  { name: "Corinee Padilla", title: "Student", email: "cpadilla@gmail.com", 
    avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp',
    followers: 4274 },
];

export default function() {
  return({
    addFollower: async (user: User): Promise<User | null> => {
      // Make ajax request to update
      if (user) {
      }
      return Promise.resolve(null);
    },
    deleteFollower: async (user: User): Promise<User | null> => {
      // Make ajax request to delete user
      // Make ajax request to update
      if (user) {
      }
      return Promise.resolve(null);
    },
    /**
     * Retrieves all of the users.
     * @returns Promise containing the users.
     */
    getUsers: async (): Promise<User[]> => {
      if (config.useLocalUsers) {
        return users;
      }  

      //const url = `${ config.userSource.baseUrl }&seed=${ config.userSource.seed }&results=${ config.userSource.results }`;
      const url = `${ config.userSource.baseUrl }&results=${ config.userSource.results }`;
      console.log(`Request remote users at ${ url }...`);
      
      // fetch(url).then((response) => {
      //   response.json((json) => {
      //   });
      // })
      const response = await fetch(url);
      const json = await response.json();

      return json.results.map((user: any, index: number) => {
        return {
          id: index,
          name: `${ user.name.first } ${ user.name.last }`,
          title: `${ user.location.country }`,
          email: `${ user.email }`,
          avatar: `${ user.picture.thumbnail }`,
          followers: user.dob.age
        };
      });
    },
  })  
}