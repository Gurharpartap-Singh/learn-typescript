import './App.css';
import { Heading } from './components/Heading';
import { NameList } from './components/NameList';
import { Oscar } from './components/Oscar';

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
      <Oscar>
        <Heading>
          Hello Hello
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
