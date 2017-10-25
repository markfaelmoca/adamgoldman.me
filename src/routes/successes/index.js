import React from 'react';
import Successes from './Successes';

function action() {
  return {
    chunks: ['successes'],
    title: 'Successes',
    path: '/successes',
    component: (
      <div>
        <Successes />
      </div>
    ),
  };
}

export default action;
