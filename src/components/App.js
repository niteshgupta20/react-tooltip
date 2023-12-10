import Tooltip from './Tooltip';

function App() {
  return (
    <div>
      <h2>Tooltip</h2>
      <p>Move the mouse over the button below:</p>
      <Tooltip position="top">
        <button>Hover Over Me!</button>
      </Tooltip>
    </div>
  );
}

export default App;
