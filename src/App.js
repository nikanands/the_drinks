import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/styles.scss';
import Home from './components/Home';
import FoodMenu from './components/FoodMenu';

class App extends Component {
  state={
    cocktailItem1:{
      name: 'Martini',
      smallCount: 0,
      mediumCount: 0,
      largeCount: 0,
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      smallItemPerValue: 150,
      mediumItemPerValue: 200,
      largeItemPerValue: 500,
    },

    cocktailItem2:{
      name: 'Margarita',
      smallCount: 0,
      mediumCount: 0,
      largeCount: 0,
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      smallItemPerValue: 300,
      mediumItemPerValue: 500,
      largeItemPerValue: 700,
    },

    cocktailItem3:{
      name: 'Bloody Mary',
      smallCount: 0,
      mediumCount: 0,
      largeCount: 0,
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      smallItemPerValue: 300,
      mediumItemPerValue: 500,
      largeItemPerValue: 700,
    },

    cocktailItem4:{
      name: 'Virgin Mojito',
      smallCount: 0,
      mediumCount: 0,
      largeCount: 0,
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      smallItemPerValue: 100,
      mediumItemPerValue: 150,
      largeItemPerValue: 250,
    },

    cocktailItem5:{
      name: 'Daiquiri',
      smallCount: 0,
      mediumCount: 0,
      largeCount: 0,
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      smallItemPerValue: 150,
      mediumItemPerValue: 250,
      largeItemPerValue: 350,
    },

    cocktailItem6:{
      name: 'Screwdriver',
      smallCount: 0,
      mediumCount: 0,
      largeCount: 0,
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      smallItemPerValue: 170,
      mediumItemPerValue: 300,
      largeItemPerValue: 350,
    },

    tax: 0,
    totalAmount: 0,
    isVisible: false
  }

  // Cocktail Item 1 Function

  onItem1SmallIncreament = () => {
    this.setState({
      cocktailItem1:{
          ...this.state.cocktailItem1, 
          smallCount: this.state.cocktailItem1.smallCount + 1,
          smallPrice: (this.state.cocktailItem1.smallCount + 1) * this.state.cocktailItem1.smallItemPerValue,
  }})}

  onItem1MediumIncreament = () => {
    this.setState({
      cocktailItem1: {
        ...this.state.cocktailItem1, 
        mediumCount: this.state.cocktailItem1.mediumCount + 1,
        mediumPrice: (this.state.cocktailItem1.mediumCount + 1) * this.state.cocktailItem1.mediumItemPerValue
    }})}

  onItem1LargeIncreament = () => {
    this.setState({
      cocktailItem1: {
        ...this.state.cocktailItem1, 
        largeCount: this.state.cocktailItem1.largeCount + 1,
        largePrice: (this.state.cocktailItem1.largeCount + 1) * this.state.cocktailItem1.largeItemPerValue
    }})}

  onItem1SmallDecrement = () => {
    this.setState({
      cocktailItem1:{
          ...this.state.cocktailItem1, 
          smallCount: this.state.cocktailItem1.smallCount - 1,
          smallPrice: (this.state.cocktailItem1.smallCount - 1) * this.state.cocktailItem1.smallItemPerValue,
    }})} 
    
  onItem1MediumDecrement = () => {
    this.setState({
      cocktailItem1: {
      ...this.state.cocktailItem1,
      mediumCount: this.state.cocktailItem1.mediumCount - 1,
      mediumPrice: (this.state.cocktailItem1.mediumCount - 1) * this.state.cocktailItem1.mediumItemPerValue
  }})}

  onItem1LargeDecrement = () => {
    this.setState({
      cocktailItem1: {
      ...this.state.cocktailItem1,
      largeCount: this.state.cocktailItem1.largeCount - 1,
      largePrice: (this.state.cocktailItem1.largeCount - 1) * this.state.cocktailItem1.largeItemPerValue
  }})}


  // Cocktail Item 2 Function

  onItem2SmallIncreament = () => {
    this.setState({
      cocktailItem2:{
        ...this.state.cocktailItem2, 
        smallCount: this.state.cocktailItem2.smallCount + 1,
        smallPrice: (this.state.cocktailItem2.smallCount + 1) * this.state.cocktailItem2.smallItemPerValue,
  }})}

  onItem2MediumIncreament = () => {
    this.setState({
      cocktailItem2: {
        ...this.state.cocktailItem2, 
        mediumCount: this.state.cocktailItem2.mediumCount + 1,
        mediumPrice: (this.state.cocktailItem2.mediumCount + 1) * this.state.cocktailItem2.mediumItemPerValue
  }})}

  onItem2SmallDecrement = () => {
    this.setState({
      cocktailItem2:{
        ...this.state.cocktailItem2, 
        smallCount: this.state.cocktailItem2.smallCount - 1,
        smallPrice: (this.state.cocktailItem2.smallCount - 1) * this.state.cocktailItem2.smallItemPerValue,
  }})}

  onItem2MediumDecrement = () => {
    this.setState({
      cocktailItem2: {
        ...this.state.cocktailItem2,
        mediumCount: this.state.cocktailItem2.mediumCount - 1,
        mediumPrice: (this.state.cocktailItem2.mediumCount - 1) * this.state.cocktailItem2.mediumItemPerValue
  }})}

  onItem2LargeIncreament = () => {
    this.setState({
      cocktailItem2: {
        ...this.state.cocktailItem2, 
        largeCount: this.state.cocktailItem2.largeCount + 1,
        largePrice: (this.state.cocktailItem2.largeCount + 1) * this.state.cocktailItem2.largeItemPerValue
    }})}

  onItem2LargeDecrement = () => {
    this.setState({
      cocktailItem2: {
      ...this.state.cocktailItem1,
      largeCount: this.state.cocktailItem2.largeCount - 1,
      largePrice: (this.state.cocktailItem2.largeCount - 1) * this.state.cocktailItem2.largeItemPerValue
  }})}

  // Cocktail Item 3 Function

  onItem3SmallIncreament = () => {
    this.setState({
      cocktailItem3:{
        ...this.state.cocktailItem3, 
        smallCount: this.state.cocktailItem3.smallCount + 1,
        smallPrice: (this.state.cocktailItem3.smallCount + 1) * this.state.cocktailItem3.smallItemPerValue,
  }})}

  onItem3MediumIncreament = () => {
    this.setState({
      cocktailItem3: {
        ...this.state.cocktailItem3, 
        mediumCount: this.state.cocktailItem3.mediumCount + 1,
        mediumPrice: (this.state.cocktailItem3.mediumCount + 1) * this.state.cocktailItem3.mediumItemPerValue
  }})}

  onItem3SmallDecrement = () => {
    this.setState({
      cocktailItem3:{
        ...this.state.cocktailItem3, 
        smallCount: this.state.cocktailItem3.smallCount - 1,
        smallPrice: (this.state.cocktailItem3.smallCount - 1) * this.state.cocktailItem3.smallItemPerValue,
  }})}

  onItem3MediumDecrement = () => {
    this.setState({
      cocktailItem3: {
        ...this.state.cocktailItem3,
        mediumCount: this.state.cocktailItem3.mediumCount - 1,
        mediumPrice: (this.state.cocktailItem3.mediumCount - 1) * this.state.cocktailItem3.mediumItemPerValue
  }})}

  onItem3LargeIncreament = () => {
    this.setState({
      cocktailItem3: {
        ...this.state.cocktailItem3, 
        largeCount: this.state.cocktailItem3.largeCount + 1,
        largePrice: (this.state.cocktailItem3.largeCount + 1) * this.state.cocktailItem3.largeItemPerValue
    }})}

  onItem3LargeDecrement = () => {
    this.setState({
      cocktailItem3: {
      ...this.state.cocktailItem3,
      largeCount: this.state.cocktailItem3.largeCount - 1,
      largePrice: (this.state.cocktailItem3.largeCount - 1) * this.state.cocktailItem3.largeItemPerValue
  }})}

  // Cocktail Item 4 Function

  onItem4SmallIncreament = () => {
    this.setState({
      cocktailItem4:{
        ...this.state.cocktailItem4, 
        smallCount: this.state.cocktailItem4.smallCount + 1,
        smallPrice: (this.state.cocktailItem4.smallCount + 1) * this.state.cocktailItem4.smallItemPerValue,
  }})}

  onItem4MediumIncreament = () => {
    this.setState({
      cocktailItem4: {
        ...this.state.cocktailItem4, 
        mediumCount: this.state.cocktailItem4.mediumCount + 1,
        mediumPrice: (this.state.cocktailItem4.mediumCount + 1) * this.state.cocktailItem4.mediumItemPerValue
  }})}

  onItem4SmallDecrement = () => {
    this.setState({
      cocktailItem4:{
        ...this.state.cocktailItem4, 
        smallCount: this.state.cocktailItem4.smallCount - 1,
        smallPrice: (this.state.cocktailItem4.smallCount - 1) * this.state.cocktailItem4.smallItemPerValue,
  }})}

  onItem4MediumDecrement = () => {
    this.setState({
      cocktailItem4: {
        ...this.state.cocktailItem4,
        mediumCount: this.state.cocktailItem4.mediumCount - 1,
        mediumPrice: (this.state.cocktailItem4.mediumCount - 1) * this.state.cocktailItem4.mediumItemPerValue
  }})}

  onItem4LargeIncreament = () => {
    this.setState({
      cocktailItem4: {
        ...this.state.cocktailItem4, 
        largeCount: this.state.cocktailItem4.largeCount + 1,
        largePrice: (this.state.cocktailItem4.largeCount + 1) * this.state.cocktailItem4.largeItemPerValue
    }})}

  onItem4LargeDecrement = () => {
    this.setState({
      cocktailItem4: {
      ...this.state.cocktailItem4,
      largeCount: this.state.cocktailItem4.largeCount - 1,
      largePrice: (this.state.cocktailItem4.largeCount - 1) * this.state.cocktailItem4.largeItemPerValue
  }})}

  // // Cocktail Item 4 Function

  // onItem4SmallIncreament = () => {
  //   this.setState({
  //     cocktailItem4:{
  //       ...this.state.cocktailItem4, 
  //       smallCount: this.state.cocktailItem4.smallCount + 1,
  //       smallPrice: (this.state.cocktailItem4.smallCount + 1) * this.state.cocktailItem4.smallItemPerValue,
  // }})}

  // onItem4MediumIncreament = () => {
  //   this.setState({
  //     cocktailItem4: {
  //       ...this.state.cocktailItem4, 
  //       mediumCount: this.state.cocktailItem4.mediumCount + 1,
  //       mediumPrice: (this.state.cocktailItem4.mediumCount + 1) * this.state.cocktailItem4.mediumItemPerValue
  // }})}

  // onItem4SmallDecrement = () => {
  //   this.setState({
  //     cocktailItem4:{
  //       ...this.state.cocktailItem4, 
  //       smallCount: this.state.cocktailItem4.smallCount - 1,
  //       smallPrice: (this.state.cocktailItem4.smallCount - 1) * this.state.cocktailItem4.smallItemPerValue,
  // }})}

  // onItem4MediumDecrement = () => {
  //   this.setState({
  //     cocktailItem4: {
  //       ...this.state.cocktailItem4,
  //       mediumCount: this.state.cocktailItem4.mediumCount - 1,
  //       mediumPrice: (this.state.cocktailItem4.mediumCount - 1) * this.state.cocktailItem4.mediumItemPerValue
  // }})}

  // Cocktail Item 5 Function

  onItem5SmallIncreament = () => {
    this.setState({
      cocktailItem5:{
        ...this.state.cocktailItem5, 
        smallCount: this.state.cocktailItem5.smallCount + 1,
        smallPrice: (this.state.cocktailItem5.smallCount + 1) * this.state.cocktailItem5.smallItemPerValue,
  }})}

  onItem5MediumIncreament = () => {
    this.setState({
      cocktailItem5: {
        ...this.state.cocktailItem5, 
        mediumCount: this.state.cocktailItem5.mediumCount + 1,
        mediumPrice: (this.state.cocktailItem5.mediumCount + 1) * this.state.cocktailItem5.mediumItemPerValue
  }})}

  onItem5SmallDecrement = () => {
    this.setState({
      cocktailItem5:{
        ...this.state.cocktailItem5, 
        smallCount: this.state.cocktailItem5.smallCount - 1,
        smallPrice: (this.state.cocktailItem5.smallCount - 1) * this.state.cocktailItem5.smallItemPerValue,
  }})}

  onItem5MediumDecrement = () => {
    this.setState({
      cocktailItem5: {
        ...this.state.cocktailItem5,
        mediumCount: this.state.cocktailItem5.mediumCount - 1,
        mediumPrice: (this.state.cocktailItem5.mediumCount - 1) * this.state.cocktailItem5.mediumItemPerValue
  }})}

  onItem5LargeIncreament = () => {
    this.setState({
      cocktailItem5: {
        ...this.state.cocktailItem5, 
        largeCount: this.state.cocktailItem5.largeCount + 1,
        largePrice: (this.state.cocktailItem5.largeCount + 1) * this.state.cocktailItem5.largeItemPerValue
    }})}

  onItem5LargeDecrement = () => {
    this.setState({
      cocktailItem5: {
      ...this.state.cocktailItem5,
      largeCount: this.state.cocktailItem5.largeCount - 1,
      largePrice: (this.state.cocktailItem5.largeCount - 1) * this.state.cocktailItem5.largeItemPerValue
  }})}

    // Cocktail Item 6 Function

    onItem6SmallIncreament = () => {
      this.setState({
        cocktailItem6:{
          ...this.state.cocktailItem6, 
          smallCount: this.state.cocktailItem6.smallCount + 1,
          smallPrice: (this.state.cocktailItem6.smallCount + 1) * this.state.cocktailItem6.smallItemPerValue,
    }})}
  
    onItem6MediumIncreament = () => {
      this.setState({
        cocktailItem6: {
          ...this.state.cocktailItem6, 
          mediumCount: this.state.cocktailItem6.mediumCount + 1,
          mediumPrice: (this.state.cocktailItem6.mediumCount + 1) * this.state.cocktailItem6.mediumItemPerValue
    }})}
  
    onItem6SmallDecrement = () => {
      this.setState({
        cocktailItem6:{
          ...this.state.cocktailItem6, 
          smallCount: this.state.cocktailItem6.smallCount - 1,
          smallPrice: (this.state.cocktailItem6.smallCount - 1) * this.state.cocktailItem6.smallItemPerValue,
    }})}
  
    onItem6MediumDecrement = () => {
      this.setState({
        cocktailItem6: {
          ...this.state.cocktailItem6,
          mediumCount: this.state.cocktailItem6.mediumCount - 1,
          mediumPrice: (this.state.cocktailItem6.mediumCount - 1) * this.state.cocktailItem6.mediumItemPerValue
    }})}

    onItem6LargeIncreament = () => {
      this.setState({
        cocktailItem6: {
          ...this.state.cocktailItem6, 
          largeCount: this.state.cocktailItem6.largeCount + 1,
          largePrice: (this.state.cocktailItem6.largeCount + 1) * this.state.cocktailItem6.largeItemPerValue
      }})}
  
    onItem6LargeDecrement = () => {
      this.setState({
        cocktailItem6: {
        ...this.state.cocktailItem6,
        largeCount: this.state.cocktailItem6.largeCount - 1,
        largePrice: (this.state.cocktailItem6.largeCount - 1) * this.state.cocktailItem6.largeItemPerValue
    }})}


  handleTax = () => {
    let item1SmallPrice = this.state.cocktailItem1.smallPrice 
    let item1MediumPrice = this.state.cocktailItem1.mediumPrice
    let item1LargePrice = this.state.cocktailItem1.largePrice

    let item2SmallPrice = this.state.cocktailItem2.smallPrice
    let item2MediumPrice = this.state.cocktailItem2.mediumPrice
    let item2LargePrice = this.state.cocktailItem2.largePrice

    let item3SmallPrice = this.state.cocktailItem3.smallPrice
    let item3MediumPrice = this.state.cocktailItem3.mediumPrice
    let item3LargePrice = this.state.cocktailItem3.largePrice

    let item4SmallPrice = this.state.cocktailItem4.smallPrice
    let item4MediumPrice = this.state.cocktailItem4.mediumPrice
    let item4LargePrice = this.state.cocktailItem4.largePrice

    let item5SmallPrice = this.state.cocktailItem5.smallPrice
    let item5MediumPrice = this.state.cocktailItem5.mediumPrice
    let item5LargePrice = this.state.cocktailItem5.largePrice

    let item6SmallPrice = this.state.cocktailItem6.smallPrice
    let item6MediumPrice = this.state.cocktailItem6.mediumPrice
    let item6LargePrice = this.state.cocktailItem6.largePrice

    let tax = 
      (
        item1SmallPrice + item1MediumPrice + item1LargePrice +
        item2SmallPrice + item2MediumPrice + item2LargePrice +
        item3SmallPrice + item3MediumPrice + item3LargePrice +
        item4SmallPrice + item4MediumPrice + item4LargePrice +
        item5SmallPrice + item5MediumPrice + item5LargePrice +
        item6SmallPrice + item6MediumPrice + item6LargePrice
      ) * 10 / 100

    let totalAmount = 
      item1SmallPrice + item1MediumPrice + item1LargePrice +
      item2SmallPrice + item2MediumPrice + item2LargePrice +
      item3SmallPrice + item3MediumPrice + item3LargePrice +
      item4SmallPrice + item4MediumPrice + item4LargePrice +
      item5SmallPrice + item5MediumPrice + item5LargePrice +
      item6SmallPrice + item6MediumPrice + item6LargePrice +
      tax 

    this.setState({
      tax: tax,
      totalAmount: totalAmount
    })

    if(item1SmallPrice > 0 || 
      item1MediumPrice > 0 ||
      item1LargePrice > 0 ||
      item2SmallPrice > 0 ||
      item2MediumPrice > 0 ||
      item2LargePrice > 0 ||
      item3SmallPrice > 0 ||
      item3MediumPrice > 0 ||
      item3LargePrice > 0 ||
      item4SmallPrice > 0 ||
      item4MediumPrice > 0 ||
      item4LargePrice > 0 ||
      item5SmallPrice > 0 ||
      item5MediumPrice > 0 ||
      item5LargePrice > 0 ||
      item6SmallPrice > 0 ||
      item6MediumPrice > 0 ||
      item6LargePrice > 0){
      this.setState({
        isVisible: true
      })
    } else{
      this.setState({
        isVisible: false
      })
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component= { Home } />
          <Route path='/foodmenu' render= {() => (<FoodMenu 
            // Cocktail Item 1
            cocktailItem1= {this.state.cocktailItem1}
            largePrice= {this.state.cocktailItem1.largePrice}
            onItem1SmallIncreament= {this.onItem1SmallIncreament}
            onItem1SmallDecrement= {this.onItem1SmallDecrement}
            onItem1MediumIncreament= {this.onItem1MediumIncreament}
            onItem1MediumDecrement= {this.onItem1MediumDecrement}
            onItem1LargeIncreament= {this.onItem1LargeIncreament}
            onItem1LargeDecrement= {this.onItem1LargeDecrement}

            // Cocktail Item 2
            cocktailItem2= {this.state.cocktailItem2}
            onItem2SmallIncreament= {this.onItem2SmallIncreament}
            onItem2SmallDecrement= {this.onItem2SmallDecrement}
            onItem2MediumIncreament= {this.onItem2MediumIncreament}
            onItem2MediumDecrement= {this.onItem2MediumDecrement}
            onItem2LargeIncreament= {this.onItem2LargeIncreament}
            onItem2LargeDecrement= {this.onItem2LargeDecrement}

            // Cocktail Item 3
            cocktailItem3= {this.state.cocktailItem3}
            onItem3SmallIncreament= {this.onItem3SmallIncreament}
            onItem3SmallDecrement= {this.onItem3SmallDecrement}
            onItem3MediumIncreament= {this.onItem3MediumIncreament}
            onItem3MediumDecrement= {this.onItem3MediumDecrement}
            onItem3LargeIncreament= {this.onItem3LargeIncreament}
            onItem3LargeDecrement= {this.onItem3LargeDecrement}

            // Cocktail Item 4
            cocktailItem4= {this.state.cocktailItem4}
            onItem4SmallIncreament= {this.onItem4SmallIncreament}
            onItem4SmallDecrement= {this.onItem4SmallDecrement}
            onItem4MediumIncreament= {this.onItem4MediumIncreament}
            onItem4MediumDecrement= {this.onItem4MediumDecrement}
            onItem4LargeIncreament= {this.onItem4LargeIncreament}
            onItem4LargeDecrement= {this.onItem4LargeDecrement}

            // Cocktail Item 5
            cocktailItem5= {this.state.cocktailItem5}
            onItem5SmallIncreament= {this.onItem5SmallIncreament}
            onItem5SmallDecrement= {this.onItem5SmallDecrement}
            onItem5MediumIncreament= {this.onItem5MediumIncreament}
            onItem5MediumDecrement= {this.onItem5MediumDecrement}
            onItem5LargeIncreament= {this.onItem5LargeIncreament}
            onItem5LargeDecrement= {this.onItem5LargeDecrement}

            // Cocktail Item 6
            cocktailItem6= {this.state.cocktailItem6}
            onItem6SmallIncreament= {this.onItem6SmallIncreament}
            onItem6SmallDecrement= {this.onItem6SmallDecrement}
            onItem6MediumIncreament= {this.onItem6MediumIncreament}
            onItem6MediumDecrement= {this.onItem6MediumDecrement}
            onItem6LargeIncreament= {this.onItem6LargeIncreament}
            onItem6LargeDecrement= {this.onItem6LargeDecrement}

            isVisible= {this.state.isVisible}
            tax={this.state.tax}
            totalAmount ={this.state.totalAmount}
            handleTax={this.handleTax}
          />)}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
