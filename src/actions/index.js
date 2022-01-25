const SAVE_EMAIL = 'SAVE_EMAIL';

const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export default saveEmailAction;