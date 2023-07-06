import '../CloseSpellWidgetsBtn.css';

function CloseSpellWidgetsBtn(props) {
  return (
    <input 
      type='button'
      className='button'
      onClick={ CloseAllSpellWidgets } 
      value='Collapse all spell widgets'
    />
  )
}

function CloseAllSpellWidgets() {
  let spellWidgets = document.getElementsByClassName('spell-widget');
  for (let i = 0; i < spellWidgets.length; i++) {
    spellWidgets[i].removeAttribute('open');
  }
}

export default CloseSpellWidgetsBtn;