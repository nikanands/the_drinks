import React from 'react';
import SecondaryHeader from './SecondaryHeader';

class Cocktail extends React.Component{
    componentDidMount = () => {
        window.addEventListener('click', this.props.handleTax)
    }
    render(){
        return(
            <React.Fragment>
                <SecondaryHeader />
                <div className='container wrapper'>
                    
                    <div className='wrap_cocktail' id='cocktail'>
                        <h1 className="item_header">Cocktail</h1>
                        <div className='wrap_cocktail_item'>
                            <h3 className='item_name'>
                                {this.props.cocktailItem1.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem1.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem1.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem1SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem1SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem1.smallCount}
                                        <button
                                            onClick= {this.props.onItem1SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small  
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem1.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem1.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem1MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem1MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem1.mediumCount}
                                        <button
                                            onClick= { this.props.onItem1MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem1.largePrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem1.largeCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem1LargeDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem1LargeDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem1.largeCount}
                                        <button
                                            onClick= { this.props.onItem1LargeIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Large   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>{this.props.cocktailItem2.name}</h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem2.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem2.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem2SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem2SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem2.smallCount}
                                        <button
                                            onClick= {this.props.onItem2SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem2.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem2.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem2MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem2MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem2.mediumCount}
                                        <button
                                            onClick= { this.props.onItem2MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem2.largePrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem2.largeCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem2LargeDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem2LargeDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem2.largeCount}
                                        <button
                                            onClick= { this.props.onItem2LargeIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Large   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem3.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem3.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem3.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem3SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem3SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem3.smallCount}
                                        <button
                                            onClick= {this.props.onItem3SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem3.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem3.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem3MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem3MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem3.mediumCount}
                                        <button
                                            onClick= { this.props.onItem3MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem3.largePrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem3.largeCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem3LargeDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem3LargeDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem3.largeCount}
                                        <button
                                            onClick= { this.props.onItem3LargeIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Large   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem4.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem4.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem4.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem4SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem4SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem4.smallCount}
                                        <button
                                            onClick= {this.props.onItem4SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem4.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem4.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem4MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem4MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem4.mediumCount}
                                        <button
                                            onClick= { this.props.onItem4MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem4.largePrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem4.largeCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem4LargeDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem4LargeDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem4.largeCount}
                                        <button
                                            onClick= { this.props.onItem4LargeIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Large   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem5.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem5.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem5.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem5SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem5SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem5.smallCount}
                                        <button
                                            onClick= {this.props.onItem5SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem5.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem5.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem5MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem5MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem5.mediumCount}
                                        <button
                                            onClick= { this.props.onItem5MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem5.largePrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem5.largeCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem5LargeDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem5LargeDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem5.largeCount}
                                        <button
                                            onClick= { this.props.onItem5LargeIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Large   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem6.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem6.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem6.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem6SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem6SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem6.smallCount}
                                        <button
                                            onClick= {this.props.onItem6SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem6.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem6.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem6MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem6MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem6.mediumCount}
                                        <button
                                            onClick= { this.props.onItem6MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem6.largePrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem6.largeCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem6LargeDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem6LargeDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem6.largeCount}
                                        <button
                                            onClick= { this.props.onItem6LargeIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Large   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='wrap_cocktail' id='mocktail'>
                        <h1 className="item_header item_mocktail">Mocktail</h1>
                        <div className='wrap_cocktail_item'>
                            <h3 className='item_name'>
                                {this.props.cocktailItem1.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem1.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem1.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem1SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem1SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem1.smallCount}
                                        <button
                                            onClick= {this.props.onItem1SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small  
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem1.mediumPrice}
                                    </span>
                                    <div className='item_quantiy_counter'>
                                        {this.props.cocktailItem1.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem1MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem1MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem1.mediumCount}
                                        <button
                                            onClick= { this.props.onItem1MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <h4>Small</h4>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>{this.props.cocktailItem2.name}</h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem2.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem2.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem2SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem2SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem2.smallCount}
                                        <button
                                            onClick= {this.props.onItem2SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem2.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem2.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem2MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem2MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem2.mediumCount}
                                        <button
                                            onClick= { this.props.onItem2MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <h4>Small</h4>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem3.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem3.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem3.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem3SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem3SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem3.smallCount}
                                        <button
                                            onClick= {this.props.onItem3SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem3.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem3.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem3MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem3MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem3.mediumCount}
                                        <button
                                            onClick= { this.props.onItem3MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <h4>Small</h4>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem4.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem4.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem4.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem4SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem4SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem4.smallCount}
                                        <button
                                            onClick= {this.props.onItem4SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem4.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem4.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem4MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem4MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem4.mediumCount}
                                        <button
                                            onClick= { this.props.onItem4MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <h4>Small</h4>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem5.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem5.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem5.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem5SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem5SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem5.smallCount}
                                        <button
                                            onClick= {this.props.onItem5SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem5.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem5.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem5MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem5MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem5.mediumCount}
                                        <button
                                            onClick= { this.props.onItem5MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <h4>Small</h4>
                            </div>
                        </div>
                    </div>

                    <div className='wrap_cocktail'>
                        <div className="wrap_cocktail_item">
                            <h3 className='item_name'>
                                {this.props.cocktailItem6.name}
                            </h3>
                            <div className='item_quantity'>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem6.smallPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem6.smallCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem6SmallDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem6SmallDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem6.smallCount}
                                        <button
                                            onClick= {this.props.onItem6SmallIncreament}
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Small   
                                    </span>
                                </div>
                                <div className='item_quantity_container'>
                                    <span className='item_quantity_price'>
                                        {this.props.cocktailItem6.mediumPrice}
                                    </span>
                                    <div className='item_quantity_counter'>
                                        {this.props.cocktailItem6.mediumCount === 0 ? <button
                                            disabled= {true}
                                            className= 'decrement'
                                            onClick= { this.props.onItem6MediumDecrement }
                                        >-</button> : <button
                                            className= 'decrement'
                                            onClick= { this.props.onItem6MediumDecrement }
                                        >-</button>}
                                        {this.props.cocktailItem6.mediumCount}
                                        <button
                                            onClick= { this.props.onItem6MediumIncreament }
                                            className= 'increament'
                                        >+</button>
                                    </div>
                                    <span className='item_quantity_name'>
                                        Medium   
                                    </span>
                                </div>
                                <h4>Small</h4>
                            </div>
                        </div>
                    </div> */}

                    <div className='payment'>
                        {this.props.isVisible === false? 
                                null : 
                                <button 
                                className='payment_button'>
                                <p className='pay'>Pay</p>
                                <div className='payment_amount'>
                                    <span className='payment_details'>Tax: {this.props.tax}</span> <br />
                                    <span className='payment_details'>Total Amount: {this.props.totalAmount}</span>
                                </div>
                                </button>
                            }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Cocktail;