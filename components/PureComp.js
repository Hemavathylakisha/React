import React, { PureComponent } from 'react';

// meemo based on functional component
// its based on class component
// Pure component implements shouldcomponentupdate lifecycle menthos with shallow comparison of props and state of component
// it there is no difference it does not re-render component - performance boost
// Regular component does not implement shouldcomponentupdate method. it always true by default
class PureComp extends PureComponent {
  render() {
    console.log('Pure component')
    return (
      <div>
        Pure component {this.props.name}
      </div>
    );
  }
}

export default PureComp;
