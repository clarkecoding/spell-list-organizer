import '../App.css';
import SpellWidget from './SpellWidget';

const testSpells = require('../data/test_spells.json');

function App() {
  return (
    <div className='App'>
      <SpellWidget 
        spell={testSpells.spells[0]}
      />
      <SpellWidget 
        spell={testSpells.spells[1]}
      />
      <SpellWidget 
        spell={testSpells.spells[2]}
      />
    </div>
  );
}

export default App;