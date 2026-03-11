const { useState } = React;

function ProfileCard({ name, role, favoriteTool }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>
        <strong>Favorite Tool:</strong> {favoriteTool}
      </p>
    </div>
  );
}

function CounterCard({ title, count, onIncrease, onReset }) {
  return (
    <div className="counter-card">
      <h3>{title}</h3>
      <p>Current value: {count}</p>
      <button className="primary" onClick={onIncrease}>
        Increase
      </button>
      <button className="secondary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [favoriteTool, setFavoriteTool] = useState('React DevTools');

  const toggleTool = () => {
    setFavoriteTool((prev) =>
      prev === 'React DevTools' ? 'VS Code + Extensions' : 'React DevTools'
    );
  };

  return (
    <main className="app">
      <h1>Simple React App: State & Props</h1>
      <p>
        This mini app shows how <strong>state</strong> stores changing values and{' '}
        <strong>props</strong> pass data to reusable components.
      </p>

      <ProfileCard
        name="Shambhavi"
        role="Full Stack Learner"
        favoriteTool={favoriteTool}
      />

      <CounterCard
        title="Practice Counter"
        count={count}
        onIncrease={() => setCount((value) => value + 1)}
        onReset={() => setCount(0)}
      />

      <button className="secondary" onClick={toggleTool}>
        Toggle Favorite Tool (State Update)
      </button>
      <p className="tip">Try the buttons to see the UI update instantly.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
