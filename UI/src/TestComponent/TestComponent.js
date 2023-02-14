import './TestComponent.css';

function TestComponent(props) {
  return(<div>
    <h1>TestComponent Is Loading</h1>

    <h2>Add Result</h2>
    <p>a = {props.a}</p>
    <p>b = {props.b}</p>
    <p>add = {props.a+props.b}</p>

    </div>);
}

export default TestComponent;
