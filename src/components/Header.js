import React, { Component } from 'react';

const Header = props => {
  return (
    <div>
      <h1 style={titleStyle} className='alfa-font'>Trivia Quiz</h1>
      <h3 style={subTitleStyle}>Sports & Entertainment</h3>
    </div>
  )
}

export default Header

// inline styles

const titleStyle = {
  color: '#408cbf'
}

const subTitleStyle = {
  fontWeight: '100'
}