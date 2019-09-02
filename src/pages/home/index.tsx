import React from 'react';

import store from 'redux/store';

export default class Pages extends React.Component<any, any> {
  render() {
    let token = store.getState();
    return <div>666</div>;
  }
}
