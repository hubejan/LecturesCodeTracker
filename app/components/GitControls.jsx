import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/av/skip-previous';


export default class GitControls extends Component {

  props: {
    token: string,
    repositoryPath: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    saveLesson: () => void,
    lessonInfo: lessonInfoType,
    currentOpenFiles: Array<string>,
    currentEditorValues: Array<string>
  };

  render() {
    const { token,
            repositoryPath,
            checkoutNextBranch,
            checkoutPreviousBranch,
            lessonInfo,
            saveLesson,
            currentOpenFiles,
            currentEditorValues } = this.props;

    return (
      <AppBar iconElementLeft={<IconButton><NavigationClose /></IconButton>}>
        <RaisedButton onClick={() => { checkoutPreviousBranch(lessonInfo, currentOpenFiles, currentEditorValues); }} >
          Previous branch
        </RaisedButton>
        <RaisedButton onClick={() => { checkoutNextBranch(lessonInfo, currentOpenFiles, currentEditorValues); }} >
          Next branch
        </RaisedButton>
        <RaisedButton onClick={() => {
          saveLesson(currentOpenFiles, currentEditorValues)
            .then(() => console.log('Saved!'))
            .catch(error => console.error(error));
        }}
        >
          Save Lesson
        </RaisedButton>
      </AppBar>
    );
  }
}