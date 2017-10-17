import React from 'react';

export const IndicatorLine = ({ onClick, selected, lineSelected, scene }) => {
  var isComplete = false;
  if(scene.type === "multi-options") {
    isComplete = scene.selectedItem != null;
  } else {
    isComplete = false;
    scene.items.forEach((item) => {
      if(item.value !== "0" & item.value !== "") {
        isComplete = true;
        return true;
      }
    })
  }

  return (
    <td
      className={(lineSelected)? "selected" : ""}
    >
      <div className="fill"></div>
      <div onClick={onClick} className={(selected)? "splunk-icon-container selected" : "splunk-icon-container"} >
        <span className={isComplete? "splunk-icon icon-check show" : "splunk-icon icon-check"}></span>
      </div>
    </td>
  );
}

export const IndicatorLines = ({scenes, selectedIndicator, onIndicatorClick}) => {
  return (
    <table className="indicators-lines">
      <tbody>
        <tr>
          {scenes.map(indicator => (
            <IndicatorLine
              lineSelected={(indicator.id < selectedIndicator)? true : false}
              selected={(indicator.id <= selectedIndicator)? true : false}
              key={indicator.id}
              {...indicator}
              scene={scenes[indicator.id]}
              onClick={() => onIndicatorClick(indicator.id)} />
          ))}
        </tr>
      </tbody>
    </table>
  );
};
