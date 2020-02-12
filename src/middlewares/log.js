// Creating a simple log for the flow of redux
export default dispatch => next => action => {
  console.log(`ACTION: ${action.type}`, action);

  next(action);
};
