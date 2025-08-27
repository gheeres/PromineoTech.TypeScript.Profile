import Profile from './components/Profile.ts';
import { getAllUsers } from './services/UserService.ts';
import 'bootstrap';

const app = document.querySelector('#profiles');
const users = [
  { lastName: 'Heeres', firstName: 'George',
    title: 'Teacher', email: 'gheeres@gmail.com',
  },
  { lastName: 'Wendel', firstName: 'Crispin',
    title: 'Student', email: 'cwendel@gmail.com',
  },
  { lastName: 'Max', firstName: 'Felton',
    title: 'Student', email: 'mfelton@gmail.com',
  },
];

const randomUsers = await getAllUsers();

for(let user of randomUsers) {
  app?.append(Profile(user));
}
