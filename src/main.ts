import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './css/index.css';

import UserService, { User } from './services/UserService.ts';
import Profile from './components/Profile.ts';

const service = new UserService();

const profiles = document.querySelector("#profiles");
const addUserButton = document.querySelector('.control-add-user');

/**
 * Handler for fetching a new user / profile and adding to the profile list.
 */
addUserButton?.addEventListener('click', async (_e) => {
  const user = await service.get() as User; 
  const profileElement = Profile(user);
  profiles?.append(profileElement);
});

/**
 * Generic event handler to handle clicks within the profile list.
 */
profiles?.addEventListener('click', (e) => {
  const target: Element = (e.target as Element);
  // Follow
  if (target?.classList.contains('js-profile-follow')) {
    const element = target?.closest('.profile') as HTMLElement;
    const existingUser = JSON.parse(element?.dataset?.user || '{}');
    const updatedUser = { ...existingUser, followers: [ ...existingUser.followers, 'another' ] };
    const updatedElement = Profile(updatedUser);
    element.replaceWith(updatedElement);
  }
  // Delete
  if (target?.classList.contains('js-profile-delete')) {
    const element = target.closest('.profile') as HTMLElement;
    element.remove();
  }
});
