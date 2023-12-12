import React from 'react';

// Memo based on functional component, if no difference not render component
function MemoComp({name}) {
    console.log('Memo component');
  return (
    <div>
      {name}
    </div>
  );
}

export default React.memo(MemoComp);
