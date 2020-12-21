import { useReducer } from 'react';

function App() {

  const reducer = (state, action) => {
    switch(action) {
    case 'increment':
      return state + 1;
    case 'reset':
      return 0;
    default:
      return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>{count}</div>
      <input type="button" onClick={() => dispatch('increment')} value="count up" />
      <input type="button" onClick={() => dispatch('reset')} value="reset" />
    </div>
  );
}

export default App;
