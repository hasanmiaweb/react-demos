import useCounter from '../hooks/useCounter';
const App = () => {
    const {count, handleInt, handleDec} = useCounter({initial:10, upperBound:30, lowerBound:10})
 
    const CountController = ({ count, handleDec, handleInt }) => {
        return (
            <div>
                <button onClick={handleInt}>+</button>
                <b>{count}</b>
                <button onClick={handleDec}>-</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Custom Hooks</h1>
            <hr />
            <CountController count={count} handleDec={handleDec} handleInt={handleInt} />
            <br />
            
        </div>
    );
};

export default App;