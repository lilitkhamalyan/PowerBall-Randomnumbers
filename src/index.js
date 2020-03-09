import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';

class Circle extends React.Component {
  render() {
    return(
      <button className="dot">
        {this.props.value}
    </button>
    );
  }
}

class CircleRow extends React.Component {
  renderCircle(i) {
    return <Circle value={i} />;
  }

  render() {
    const status = 'Random numbers';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="circle-row">
          {this.renderCircle(0)}
          {this.renderCircle(1)}
          {this.renderCircle(2)}
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
      </div>
    </div>
    );
  }
}

ReactDOM.render(
  <CircleRow />,
  document.getElementById('root')
);
