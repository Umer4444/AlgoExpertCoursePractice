import logo from './logo.svg';
import './App.css';

function App() {
      //
  // const name = "Ali"
  // return (
  //   <>
  //   <h1>Hello {name.toUpperCase()}</h1>
  //   <p>Umer</p></>
  // );

    //For Conditional rendering
  const error = true;
    //First Type
  // return (
  //   <>
  //   {error && <h1>Error</h1>}
  //   {error || <h1>Success</h1>}
  //   </>
  // )
    //Second Type

  const props = {
    id: "input",
    maxLength: "4",
    type: "text"
  };
    return (
      <>
      <h1>{error ? 'Error' : 'Success'}</h1>

        {/* for form and this line is commented */}
      <label htmlFor="input">Input:</label>
      <input {...props} placeholder="user" />

        {/* for paragraph */}
      <p className="App">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nisi, totam cumque dolor asperiores.</p>
      <Hello name="Corner"/>
      <Hello name="Clement"/>
      <Hello />

        {/* PASSING PROPS */}
      <Comment username="MUHAMMAD Umer Malik" time={(new Date()).toString()}>
        <h1>Hello Umer Malik</h1>
        <p>This is a comment</p>
      </Comment>

        {/* EVENT HANDLING */}
      <MyButton onClick={handleClick}>Click Me</MyButton>
      </>
    );
}

function handleClick(event){
  console.log(event.nativeEvent)
}
function MyButton(props){
  return(
    <button {...props} style={{color: "red"}}/>
  )
}

function Hello({name="User"}) {
  return(
    <>
    <h1>hello {name}</h1></>
  )
}

  {/* PASSING PROPS */}
function Comment({username, time, children}){
  return(
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  )
}

function SayHello() {
  return <p>Umer</p>
}

export default App;
