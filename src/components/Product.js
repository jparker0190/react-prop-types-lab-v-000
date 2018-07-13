// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';
class Product extends React.Component{
  render (){
    return(
      <div className="product">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    )
  }
}