import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allAmounts: [],
      stuff: []
      }
  }
  adding(){
      let name = document.getElementById('name').value;
      name = name.slice(0,1).toUpperCase() + name.slice(1)
      let amount = parseFloat(document.getElementById('amount').value);
      if(name === ''){
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('amount').style.borderColor = 'red';
        return;
      }
      else{
        document.getElementById('name').style.borderColor = '#3192af';
        document.getElementById('amount').style.borderColor = '#3192af';
      }
      
      let newAllAmounts = this.state.allAmounts;
      newAllAmounts.push(amount);
      
      let newStuff = this.state.stuff;
      newStuff.push({ buy:`${name}`, price: `${amount}`} );
      
      this.setState({allAmounts: newAllAmounts});
      this.setState({stuff: newStuff});
                     
      document.getElementById('name').value = '';
      document.getElementById('amount').value = '';
      let total = newAllAmounts.reduce((x,y) => {
        return x+y;
      });
      document.getElementById('result').innerHTML = '$' + total;
  }
  sort() {
      let buyName = [];
      this.state.stuff.map( item => buyName.push(item.buy));
      buyName.sort();
      let newStuff = [];
      buyName.forEach( item => {
          this.state.stuff.forEach( buy => {
              if(item !== buy.buy){
                  return
              } else { 
                newStuff.push({ buy:`${buy.buy}`, price: `${buy.price}`} );
              }
          })
      });
      this.setState({ stuff: newStuff })
  }
    
  render() {
    return (
        <article className="app">
          <input type="checkbox" id="open"></input>
          <label className="head" htmlFor="open">
            <h1 id="h1">Expenses</h1>
            <div className="open-btn">
              <div id="left"></div>
              <div id="right"></div>
            </div>
          </label>
          <div className="info">
            <div className="info-headers">
              <p>
                <span>Name</span>
                <button type="button" onClick={this.sort.bind(this)}>↓</button>
              </p>
              <p>Amount</p>
          </div>
          <div className="list">{this.state.stuff.map( item => { return (<div className="cost" key={`${Math.random()*10}`}><span>{item.buy}</span><span>{item.price}</span></div>) })}</div>
          <form>
            <input type="text" name="name" id="name" placeholder="Name"></input>
            <input type="number" name="amount" id="amount" placeholder="$$.¢¢"></input>
            <button type="button" onClick={this.adding.bind(this)}>+</button>
          </form>
        </div>
        <div className="total">
          <span>Total</span><span id="result"></span>
        </div>
        </article>
    );
  }
}

export default App;
