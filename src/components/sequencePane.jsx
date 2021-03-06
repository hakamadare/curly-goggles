import React from 'react';

export class SequencePane extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.context.store.dispatch({
      type: 'SET_SEQUENCE',
      sequence: event.target.value,
    });

    console.log(this.context.store.getState());
    /*
    this.setState({
      value: event.target.value,
    });
    */
  }

  render() {
    const style = {
      border: '1px solid black',
    };
    return (
      <div style={style} className={'eight columns'}>
        <h3>{this.props.title}</h3>
        <input
          type={'text'}
          defaultValue={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SequencePane.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.string,
};

SequencePane.contextTypes = {
  store: React.PropTypes.object,
};
