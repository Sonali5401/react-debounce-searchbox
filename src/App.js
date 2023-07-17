import "./styles.css";

export default function App() {
  let counter = 0;
  const searchHandler = (...args) => {
    const { value } = args[0].target;

    console.log(" Fetching Results....", value, counter++);
  };

  const debounceFunc = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const optimizedSearchHandler = debounceFunc(searchHandler, 300);
  return (
    <div className="App">
      <h1>React Debounce</h1>
      <input type="text" onChange={optimizedSearchHandler} />
    </div>
  );
}
