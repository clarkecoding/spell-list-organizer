import '../App.css';
import SpellList from './SpellList';
import CloseSpellWidgetsBtn from './CloseSpellWidgetsBtn';
import FileUploader from './FileUploader';

const testSpells = require('../data/test_spells.json');

function App() {
  return (
    <div className='App'>
      <FileUploader />
      <CloseSpellWidgetsBtn />
      <SpellList spells={testSpells.spells} />
    </div>
  );
}

export default App;