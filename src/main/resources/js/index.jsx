import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

  constructor(props) {
      super(props);
      console.log("initialisation du composant");

      this.state = {
         error: true,
         age: '19'
      }
      this.updateAge = this.updateAge.bind(this);

   };

   updateAge(e) {
      this.setState({age: e.target.value});
      if(isNaN(this.state.age)){
        this.setState({error: true});
      }else{
        this.setState({error: false});
      }
   }


  componentWillMount() {
      this.setState({error: false});
      this.setState({age: '25'});
      console.log('ce composant va être monté');
      console.log('error:' + this.state.error);
      console.log('age:' + this.state.age);
   }

   componentDidMount() {
      this.setState({age: '22'});
      console.log('ce composant est monté');
      console.log('error:' + this.state.error);
      console.log('age:' + this.state.age);
   }

  render () {
    return (
      <div>
        <input type="text" value={this.state.age} onChange={this.updateAge} />
        {
          this.state.error
            ?
              <p> veuillez entrer un nombre</p>
            :
              <p> J'ai {this.state.age} ans.</p>
        }

      </div>
      )
  }
}

render(<App/>, document.getElementById('app'));
