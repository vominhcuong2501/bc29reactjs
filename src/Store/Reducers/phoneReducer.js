import phoneList from "../../Data/DataPhone.json";

const DEFAULT_STATE = {
  selectedPhone: phoneList[0],
  cartList: [],
};

export const phoneReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SELECT_PHONE": {
      state.selectedPhone = action.payload;
      return { ...state };
    };

    case "ADD_TO_CART": {
      const data = [...state.cartList];
      let index = data.findIndex((ele) => ele.maSP === action.payload.maSP);
      if (index !== -1) {
        data[index].soLuong += 1;
      } else {
        data.push({ ...action.payload, soLuong: 1 });
      }
      state.cartList = data;
      return { ...state };
    };

    case "HANDLE_QUANTITY": {
        const data = [...state.cartList];
        const index = data.findIndex((ele) => ele.maSP === action.phone.maSP);
    
        // if (index === -1) {
        //   alert("Không tìm thấy sản phẩm");
        //   throw new Error("Không tìm thấy sản phẩm");
        // }
    
        if (action.isIncrease) {
          data[index].soLuong += 1;
        } else if (data[index].soLuong > 1) {
          data[index].soLuong -= 1;
        } else if (window.confirm("Bạn có muốn xóa không?")) {
          data.splice(index, 1);
        }
        state.cartList = data;
        return { ...state };
      };

    default: {
      return { ...state };
    }
  }
};
