const initState = {
  users: [
    { id: 1, name: "Anh" },
    { id: 2, name: "Lee" },
    { id: 3, name: "Lee Anh" },
    { id: 4, name: "Lee Anhhhh" },
  ],
  posts: []
};
const rootReducer = (state = initState, action) => {
  //state: để truyền trạng thái cho redux
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>>run into del user");
      let users = state.users;
      users = users.filter(item => item.id !== action.payload.id)
      return {...state, users};
      case "CREATE_USER":
        let id = Math.floor(Math.random() *1000)
        let user = {id: id, name: `random - ${id}`}
        return{
            ...state, users: [...state.users, user]
        }
    default:
      return state;
  }
};

export default rootReducer;
