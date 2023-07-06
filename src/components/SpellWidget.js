import { useState } from 'react';
import '../SpellWidget.css';

function SpellWidget(props) {

  let upcastText;
  if (props.spell.upcast_description === "N/A")
    upcastText = "";
  else
    upcastText = (
      <div><br /> <strong>At Higher Levels: </strong><br />{ props.spell.upcast_description }</div>
    )

  let spellLevel;
  if (props.spell.level == 0)
      spellLevel = "Cantrip";
  else
      spellLevel = `Level ${props.spell.level}`;

  return (
    <details className='spell-widget'>
      <summary className='flex-container-horizontal spell-widget-header'>
        <span className='flex-grow-0 spell-widget-level'>{ spellLevel }</span>
        <span className='flex-grow-1 spell-widget-name'>{ props.spell.name }</span>
        <span className='flex-grow-0 spell-widget-source'>Source: { props.spell.source }</span>
      </summary>
      <div className='flex-container-horizontal'>
        <div className='flex-grow-0'>
          <table>
            <tr>
              <td>School:</td>
              <td>{ props.spell.school }</td>
            </tr>
            <tr>
              <td>Casting Time:</td>
              <td>{ props.spell.casting_time }</td>
            </tr>
            <tr>
              <td>Range:</td>
              <td>{ props.spell.range }</td>
            </tr>
            <tr>
              <td>Components:</td>
              <td>{ props.spell.components }</td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>{ props.spell.duration }</td>
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