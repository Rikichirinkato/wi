import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  adding() {    
      let newBuy = this.buyInput.value;
      let newCost = parseFloat(this.costInput.value);
      let buyObj = {
          buy: newBuy,
          cost: newCost
      }
      this.props.onAddBuy(buyObj);
      this.buyInput.value = '';
      this.costInput.value = ''; 
  }
  
  totalCost(){
      let result = this.props.currentStore.reduce( (prev, acum) => {
          return prev.cost + acum.cost
      });
      console.log(result)
  }
    
  sort() {
      console.log(this.props.currentStore); 
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
          <div className="list">
              {this.props.currentStore.map(el => <div className="cost" key={Math.random()}><span>{el.buy}</span><span>{el.cost}</span></div> )}
          </div>
          <form>
            <input type="text"  placeholder="Name" ref={ input => this.buyInput = input }></input>
            <input type="number" placeholder="$$.¢¢" ref={ input => this.costInput = input } ></input>
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

export default connect(
    state => ({
        currentStore: state
    }),
    dispatch => ({
       onAddBuy: obj => {
           dispatch({ type: 'ADD', buy: obj })
       },
       onSortStore: obj => {
           dispatch({ type: 'SORT', buy: obj })
       }
    })
)(App);
