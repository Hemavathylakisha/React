import React from 'react';

function Person({person}) {
  return (
    <div>
      <h2>
        Iam {person.name} the age is {person.age} with the skill set of {person.skill}
    </h2>
    </div>
  );
}

export default Person;
