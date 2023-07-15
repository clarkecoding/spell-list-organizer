import { useState } from 'react';
import '../SpellWidget.css';

function SpellWidget(props) {
  let upcastText;
  if (props.spell.hasOwnProperty('upcast_description'))
    upcastText = (
      <div><br /> <strong>At Higher Levels: </strong><br />{ props.spell.upcast_description }</div>
    );
  else
    upcastText = "";

  let spellLevel;
  if (props.spell.level == 0)
    spellLevel = "Cantrip";
  else
    spellLevel = `Level ${props.spell.level}`;
  
  let duration;
  if (props.spell.components.charAt(3) ==='C')
    duration = <td><i>Concentration, up to</i><br/>{props.spell.duration}</td>;
  else
    duration = <td> {props.spell.duration} </td>;

  let castingTime;
  if (props.spell.components.charAt(4) ==='R')
    castingTime = <td> {props.spell.casting_time} <br /><i>or cast as ritual</i></td>;
  else
    castingTime = <td> {props.spell.casting_time} </td>;
  
  let components = "";
  for (let i = 0; i < 3; i++) {
    const c = props.spell.components.charAt(i);
    if (c !== 'x')
      components += c + ", ";
  }
  components = <td>{components.substr(0, components.length - 2)}</td>;
  
  return (
    <details className='spell-widget'>
      <summary className='flex-container-horizontal spell-widget-header'>
        <span className='flex-grow-0 spell-widget-level'>{ spellLevel }</span>
        <span className='flex-grow-1 spell-widget-name'>{ props.spell.name }</span>
        <span className='flex-grow-0 spell-widget-source'>Source: { props.spell.source }</span>
      </summary>
      <div className='flex-container-horizontal'>
        <div className='spellInfoTable flex-grow-0'>
          <table>
            <tr>
              <td>School:</td>
              <td>{ props.spell.school }</td>
            </tr>
            <tr>
              <td>Casting Time:</td>
              { castingTime }
            </tr>
            <tr>
              <td>Range:</td>
              <td>{ props.spell.range }</td>
            </tr>
            <tr>
              <td>Components:</td>
              {components}
            </tr>
            <tr>
              <td>Duration:</td>
              {duration}
            </tr>
          </table>
        </div>
        <div className='flex-grow-1'>
          <div>
            <strong>Description: </strong><br />{ props.spell.description }
          </div>
          { upcastText }
        </div>
      </div>
      
    </details>
  )
}

export default SpellWidget;