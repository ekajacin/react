// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import React from "react";

// class App extends React.Component{
//     render(){
//         let hallo = "hallo world";
//         return(
//             <h1>{hallo}</h1>
//         );
//     }
// }

// export default App;
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={hit : 0};
  }
  onCount = ()=> {
    this.setState({hit : this.state.hit + 1})
  }
  onCount1 = ()=>{
    this.setState({hit : this.state.hit - 1})
  }
    render(){
      return(
       <> <h1>{this.state.hit}</h1>
       <div>
          <button onClick={this.onCount1}>Kurang</button>
          <button onClick={this.onCount}>Tambah</button>
        </div>
        </>
      );
        // const name = "Informatika";
        // const imgurl = "http://if.uinsgd.ac.id/wp-content/uploads/2016/08/h4.png";

        // return(
        //     <><h1>{name}</h1>
        //     <img src={imgurl}/></>
        // );
    }
}

export default App;
