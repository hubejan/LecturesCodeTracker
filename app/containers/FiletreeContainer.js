import { connect } from 'react-redux';
import Filetree from '../components/Filetree';
import * as FiletreeActions from '../actions/filetree-actions';
// import * as UserRepositoriesActions from '../actions/userrepositories-actions';
// dont need username passed down
function mapStateToProps(state) {
  return {
    username: state.filetree.username,
    path: state.lessonSession.lessonInfo.repositoryPath,
    currentBranch: state.lessonSession.lessonInfo.currentBranch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetUsername: () => dispatch(FiletreeActions.getUsername()),
    loadInEditor: clickedFilePath => dispatch(FiletreeActions.loadFile(clickedFilePath))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filetree);
