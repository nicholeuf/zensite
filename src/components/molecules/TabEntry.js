import React, { PureComponent } from 'react';

class TabEntry extends PureComponent {

  onClick = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    const { title, isActive, index } = this.props;
    return (
      <li lassName={isActive ? 'is-active' : null} >
        <a
          onClick={this.onClick}
          onKeyPress={this.onClick}
          role="button"
          aria-pressed={isActive}
          tabIndex={index}
        >
          <h3>{title}</h3>
        </a>
      </li>
    );
  }
}

export default TabEntry;
