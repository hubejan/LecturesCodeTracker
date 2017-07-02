// @flow
import React, { Component } from 'react';
import Resizable from 'react-resizable-box';

import ElectronTreeContainer from '../containers/ElectronTreeContainer';

export default class Filetree extends Component {
  props: {
    loadInEditor: () => void,
    path: string
  };

  componentDidMount() {
    // this.props.dispatchGetUsername();

  }

  render() {
    const { loadInEditor, path } = this.props;
    return (
      <Resizable width={'100%'} height={'100%'}>
        <ElectronTreeContainer directory={'/Users/jchoe/documents/keyboardcat'} onFileClick={loadInEditor} />
      </Resizable>
    );
  }
}
