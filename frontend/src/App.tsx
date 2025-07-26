import UserList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-w-screen min-h-screen flex flex-col p-10 pt-25">
        <UserList />
      </div>
    </>
  );
}

export default App;
