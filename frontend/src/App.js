import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import * as ReadableAPI from './ReadableAPI'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      posts: []
    }

  }

  componentDidMount() {
    // const url = `${'http://localhost:3001'}/categories`;
      const url = `${'http://localhost:3001'}/posts`;

    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }} )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        // this.setState({categories:data});
        this.setState({posts: data});
        let info = JSON.stringify(this.state.posts)
        console.log(info)
      });
  }

  render() {

    let obj = this.state.posts
    // var keys = [];
    // var data = [];
    // for (var key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         keys.push(key);
    //         data.push(obj[key]); // Not necessary, but cleaner, in my opinion. See the example below.
    //     }
    // }
    //
    // console.log(Object.entries(obj))
    // console.log(keys)
    // console.log(data)
   let arr;
   if (obj) {
     arr = Object.values(obj); //Converting an Object into an array
     // arr = Object.keys(obj);
     // arr = Object.entries(obj);
     // console.log(arr)
   }
   console.log(Array.from(arr))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>


          Talking to the categories yields these categories: <br/>
          <hr/>1:
          {/* {this.state.categories} */}
          {this.state.posts}
          <hr/>2:
          {obj}

          <hr/>3:
          {arr}
          <hr/>
            <div>
                { arr ?
                  <div>
                    { arr.filter((post, id) => {
                        return (
                          <ul key={id}>
                            <li >
                              {post}
                            </li>
                          </ul>


                          )}
                        )
                      })
                    }
                  </div> :
                  <div>
                    <hr/>
                    No Data !
                  </div>

                }
            </div>
    </div>
    )

}
}

export default App;
