- [ ] Why would you use class component over function components (removing hooks from the question)?
class components give you a more precise control of state




- [ ] Name three lifecycle methods and their purposes.

render considers props and state and merely returns it to the DOM, it does not modify it

constructor initializes state and binds event handler methods to an instance, otherwise it is not needed

componentDidMount invokes after a component is mounted, therefore it will re-render when used to call setState, this is where we usually retrieve data from an endpoint



- [ ] What is the purpose of a custom hook?
custom hooks give you the ability to condense redundant stateful logic and reuse it efficiently





- [ ] Why is it important to test our apps?
testing our apps test it in ways we would not neccessarily anticipate users to use it so therefore passing tests increases our confidence in the app