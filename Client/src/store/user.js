// const initailState = {
//   user: null,
//   isAuthenticated: false,
//   isAdmin:false,
//   token:null,
// };
// const userActionTypes = {
//   LOGIN_REQUEST: "LOGIN_REQUEST",
//   LOGIN_SUCCESS: "LOGIN_SUCCESS",
//   LOGIN_FAIL: "LOGIN_FAIL",

//   LOGUT: "LOGUT",
// };
// const userActions = {
//   loginSuccess: (payload) => {
//     return { type: userActionTypes.LOGIN, payload };
//   },
//   logout: () => {
//     return { type: userActionTypes.LOGUT };
//   },
// };
// export const userReducer = (state = initailState, action) => {
//   switch (action.type) {
//     case userActionTypes.LOGIN_SUCCESS:
//       return { user: action.payload.user, isAuthenticated: true ,token:action.payload.token};

//     case userActionTypes.LOGUT:
//       return { ...state, isAuthenticated:false };
//     default:
//       return state;
//   }
// };

