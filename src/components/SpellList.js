import SpellWidget from "./SpellWidget";

function SpellList(props) {
  let spellWidgets = props.spells.map((spell) => 
    <SpellWidget key={spell.name} spell={spell} />
  );
  return <div> {spellWidgets} </div>;
}

export default SpellList;