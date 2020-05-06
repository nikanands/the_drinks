import React from 'react';

class Mocktail extends React.Component{
    render(){
        return(
            <div className='container wrapper'>
                <div className='wrap_cocktail'>
                    <h3 className='item_name'>Mocktail</h3>
                    <div className='item_quantity'>
                        <div className='item_quantity_counter'>
                            <div>
                                {this.props.smallCount === 0 ? <button
                                    disabled= {true}
                                    className= 'decrement'
                                    onClick= { this.props.onSmallDecrement }
                                >-</button> : <button
                                    className= 'decrement'
                                    onClick= { this.props.onSmallDecrement }
                                >-</button>}
                                {this.props.smallCount}
                                <button
                                    onClick= { this.props.onSmallIncreament }
                                >+</button>
                            </div>
                            <span>
                                {this.props.smallPrice}     
                            </span>
                        </div>
                        <div className='item_quantity_counter'>
                            <div>
                                {this.props.mediumCount === 0 ? <button
                                    disabled= {true}
                                    className= 'decrement'
                                    onClick= { this.props.onMediumDecrement }
                                >-</button> : <button
                                    className= 'decrement'
                                    onClick= { this.props.onMediumDecrement }
                                >-</button>}
                                {this.props.mediumCount}
                                <button
                                    onClick= { this.props.onMediumIncreament }
                                >+</button>
                            </div>
                            <span>
                                {this.props.mediumPrice}     
                            </span>
                        </div>
                        <h4>Small</h4>
                    </div>
                </div>
                {this.props.mediumCount <= 0 && this.props.smallCount <= 0? 
                        <button 
                        disabled= {true}
                        onClick={this.props.handleTax}>
                        Pay</button> : 
                        <button 
                        onClick={this.props.handleTax}>
                        Pay</button>
                    }
                    <p>{this.props.tax} and {this.props.totalAmount}</p>
            </div>
        )
    }
}

export default Mocktail;