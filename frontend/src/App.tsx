import UserList from "./components/CharacterList";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen min-h-screen flex flex-col pt-14 overflow-x-hidden px-10">
        <HeroSection />
        <UserList />
      </div>
    </>
  );
}

export default App;
