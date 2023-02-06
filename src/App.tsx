import './App.css';
import { NameList } from './components/NameList';

function App() {
  const nameList = [
    {
      first: "bruce",
      last: "banner",
    },
    {
      first: "bruce",
      last: "banner",
    },
    {
      first: "bruce",
      last: "banner",
    }
  ];
  return (
    <div className="App">
      <NameList name={nameList}/>
    </div>
  );
}

export default App;
