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
        console.log(this.state.posts)
      });
  }

  render() {

    const obj = this.state.posts;
   let arr;
   if (obj) {
     arr = Object.values(obj); //Converting an Object into an array
   }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>


          Talking to the categories yields these categories: <br/>
          {/* {this.state.categories} */}
          {this.state.posts}
            <div>
                { arr ?
                  <div>
                    { arr.map(post => {
                        return (
                          <div key={post.id}>
                            {post.title}
                          </div>
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
