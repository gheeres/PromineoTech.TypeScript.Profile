import './style.css'
import Profile from './components/Profile.ts';
import { getLocalUsers, getRandomUsers } from './services/UserService.ts';

const app = document.querySelector('#profiles');

let localUsers = getLocalUsers();
let remoteUsers = await getRandomUsers(5);
let users = [ ...localUsers, ...remoteUsers ];
for(let user of users) {
  let profile = Profile(user);
  app?.append(profile as Node);
}