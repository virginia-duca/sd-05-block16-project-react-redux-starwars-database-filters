export const CHANGE_FILTERBYNAME = 'CHANGE_FILTERBYNAME'

function changeFilterByName(nameInput) {
  return { type: CHANGE_FILTERBYNAME,  nameInput}
};

export default changeFilterByName;