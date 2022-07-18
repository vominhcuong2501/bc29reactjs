import {
  ADD_USER,
  DELETE_USER,
  SET_SELECTED_USER,
  UPDATE_USER,
} from "../types/user";

const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      username: "man.nguyen",
      fullname: "Man Ng",
      password: "123",
      email: "man.nguyen@gmail.com",
      phoneNumber: "1234567890",
      type: "Client",
    },
    {
      id: 2,
      username: "khai.nguyen",
      fullname: "Khai Ng",
      password: "123",
      email: "khai.nguyen@gmail.com",
      phoneNumber: "0987654321",
      type: "Admin",
    },
  ],
  selectedUser: null,
};

// trong reducer nếu già trị bên trong state là object hoặc array
// object thì cần copy ra mảng mới
export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      const data = [...state.userList];
      data.push({ ...payload, id: Date.now });
      state.userList = data;
      return { ...state };
    }

    case SET_SELECTED_USER: {
      return { ...state, selectedUser: payload };
    }

    case UPDATE_USER: {
      // let data = [...state.userList];
      // let index = data.findIndex(ele => ele.id === payload.id);
      // if(index !== -1) {
      //   data[index] = payload;
      // }
      // state.userList = data;
      state.userList = state.userList.map((ele) =>
        ele.id === payload.id ? payload : ele
      );
      state.selectedUser = null;
      return { ...state };
    }

    case DELETE_USER: {
      state.userList = state.userList.filter((ele) => ele.id !== payload);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
