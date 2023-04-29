// import { Component, useState, createRef, createContext } from 'react';


// const Theme = createContext({
//   mode: 'dark'
// })
// export default function App(){
//   const [shouldRender, setShouldRender] = useState(true)
//   return(
//    <Theme.Provider value={{mode: "dark"}}>
//     {shouldRender && <Counter/>}
//     <button onClick={() => setShouldRender(!shouldRender)}>
//       Toggle Counter
//     </button>
//    </Theme.Provider>
//   )
// }

// class Counter extends Component{
//   static contextType = Theme;
//   constructor(props){
//     super(props);
//     this.state = {
//       count: props.startingCount ?? 0
//     }
//   }
//   componentDidMount(){
//     console.log(this.context)
//   }
//   // componentDidUpdate(prevProps,prevState){
//   //   console.log(prevProps, prevState)
//   // }
//   // componentWillUnmount(){
//   //   console.log('unmounted')
//   // }
//   // shouldComponentUpdate(nextProps,nextState){
//   //   console.log(nextProps, nextState)
//   //   return nextState.count < 3;
//   // }
//   render(){
//     return(
//       <>
//       <button onClick={()=>{
//         this.setState({
//           count: this.state.count + 1
//         })
//       }}>
//         Increment
//       </button>
//       <p>Count: {this.state.count}</p>
//       <Theme.Consumer>
//         {
//           context => <p>Theme: {context.mode}</p>
//         }
//       </Theme.Consumer>
//       </>
//     )
//   }
// }

//THIS CODE IS FOR ERROR HANDLING
import { Component } from 'react';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <ErrorBoundary fallback={<h1>There was an error</h1>}>
        <Buggy />
      </ErrorBoundary>
    </>
  )
}

function Buggy() {
  throw new Error('error');
  return <h1>Buggy</h1>
}

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

