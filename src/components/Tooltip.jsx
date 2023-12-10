function Tooltip(props) {
  const { children, position } = props;

  let toolTipStyle;

  if (position === '' || position === 'top') {
    toolTipStyle = { bottom: '125%', left: '50%' };
  } else if (position === 'bottom') {
    toolTipStyle = { top: '125%', left: '50%' };
  } else if (position === 'right') {
    toolTipStyle = { bottom: '20%', left: '155%' };
  } else if (position === 'left') {
    toolTipStyle = { bottom: '20%', right: '100%' };
  } else {
    console.error(`The value of position prop ${position} is wrong.`);
  }

  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext" style={toolTipStyle}>
        Thanks for hovering! I'm a tooltip
      </span>
    </div>
  );
}

export default Tooltip;
