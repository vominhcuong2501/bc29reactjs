import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setDistrictsAction,
  setProvincesAction,
} from "../../../Store/actions/HookActions";
import { useContext } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";

export default function BaiTapUseHook() {
  // useDispatch tương tự như mapDisptachToProps
  const dispatch = useDispatch();

  // useSelector tương tự như mapStatToProps
  const hookState = useSelector((state) => state.hookReducer);

  const [state, setState] = useState({
    provinces: "",
    districts: "",
  });

  const [filterDistricts, setFilterDistricts] = useState([]);

  const [globalState] = useContext(GlobalContext);

  useEffect(() => {
    console.log(globalState);
    fetchProvinces();
    fetchDistricts();
  }, []);

  // filter quận đúng với thành phố
  useEffect(() => {
    const data = hookState.districts.filter(
      (ele) => ele.provinceId === +state.provinces
    );
    setFilterDistricts(data);
    console.log("provinces");
  }, [state.provinces]);

  // vừa disptach vừa call api (action) thông qua thư viện redux-thunk (file config)
  const fetchProvinces = () => {
    // nếu có trên store thì không call api nữa
    if (hookState.provinces.length > 0) {
      return;
    }
    dispatch(setProvincesAction());
  };

  const fetchDistricts = () => {
    if (hookState.districts.length > 0) {
      return;
    }
    dispatch(setDistrictsAction());
  };

  // setState name = value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state, // giữ lại giá trị cũ trước khi thêm giá trị mới thông qua spread operator
      [name]: value,
    });
    console.log(event.target.value);
  };

  return (
    <form className="d-flex mx-auto w-50">
      <div className="form-group mr-2 mb-0" style={{ minWidth: "40%" }}>
        <label>Thành phố</label>
        <select
          className="form-control"
          name="provinces"
          onChange={handleChange}
        >
          <option>Chọn thành phố</option>
          {hookState.provinces.map((ele) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group mr-2 mb-0" style={{ minWidth: "40%" }}>
        <label>Quận</label>
        <select
          className="form-control"
          name="districts"
          onChange={handleChange}
        >
          <option>Chọn quận</option>
          {filterDistricts.map((ele) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label className="d-block">&nbsp;</label>
        <button className="btn btn-info">SEARCH</button>
      </div>
    </form>
  );
}
