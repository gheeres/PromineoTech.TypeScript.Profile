import './App.css'
import ProfileList from './components/ProfileList';

const sectionStyle = {
  backgroundColor: "#eee"
};

function App() {
  return (
    <section className="vh-100" style={ sectionStyle }>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <ProfileList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
