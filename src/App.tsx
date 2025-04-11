import './App.css'
import Profile from './components/Profile'

const sectionStyle = {
  backgroundColor: "#eee"
};
const users = [
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
function App() {

  let profiles = users.map((user,index) => {
    return <Profile key={ index }
                    name={ user.name } title={ user.title } email={ user.email }
                    avatar={ user.avatar }
                    followers={ user.followers} />
  });
  return (
    <section className="vh-100" style={ sectionStyle }>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            { profiles }
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
