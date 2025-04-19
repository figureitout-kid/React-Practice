function RedButton(props) {
  return <button type="button">{props.message}</button>;
}

ReactDOM.render(<RedButton message="Click me" />, document.querySelector('#root'));
