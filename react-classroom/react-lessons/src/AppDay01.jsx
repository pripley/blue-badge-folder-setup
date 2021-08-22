import logo from './logo.svg';
import './App.css';
import Header from './components/day01-challenge/Header';
import AboutMe from './components/day01-challenge/AboutMe';
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';

function App() {
  const welcome = "Paul"
  return (
    <>
    <div className="App">
      <h1>Welcome to React, {welcome}!</h1>
      <h2>We just modified our root App component</h2>
      <p>This is a test</p>
      <Header/>
      <AboutMe/>
      <StudentInformation studentName="Pam" grade="A" subject="Math"/>  
      <StudentInformation studentName="Tom" grade="C" subject="Science"/>  
      <StudentInformation studentName="Frank" grade="B" subject="Language Arts"/>
      <Footer/>      
    </div>
    </>
  );
}

export default App;