import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    direction="vertical"
    current={0}
    items={[
      {
        // title: 'Finished',
        // description,
      },
      {
        // title: 'In Progress',
        // description,
      },
      {
        // title: 'Waiting',
        // description,
      },
    ]}
  />
);
export default App;