import React, { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Memo from "../UseMemo/Memo";

function UseEffect(props) {
  const [state, setState] = useState(1);
  const [like, setLike] = useState(1);
  // componentDidMount chạy 1 lần duy nhất sau render
  // componentDidUpdate chạy khi setState và props thay đổi
  // componentWillUnmount chạy trước khi component bị hủy di
  // console.log("render");

  // cách 1 sử dụng thay thế componentDidMount và componentDidUpdate (ít sử dụng)
  //   useEffect(() => {
  // console.log("useEffect");
  //   });

  // cách 2 sử dụng thay thế componentDidMount (sử dụng nhiều)
  useEffect(() => {
    // console.log("didmount");
  }, []);

  //cách 3 sử dụng thay thế componentDidUpdate (sử dụng nhiều)
  useEffect(() => {
    // console.log("didUpdate");
  }, [state, like]);

  // cách 4 sử dụng thay thế componentWillUnmount (sử dụng gọi rocket.io, chat realtime ...)
  useEffect(() => {
    // call api, didUpdate
    return () => {
      // console.log('componentWillUnmount');
    };
  }, []);

  // cache lại giá trị, chạy khi khởi tạo, nếu [] thì nó sẽ giữ nguyên giá trị đầu tiên like = 1, không render lại, [like] thay dổi sẽ render và cập nhật lại biến hay giá trị.
  const count = useMemo(() => {
    // console.log("userMemo"); // chạy khi khởi tạo
    return like + 1000 + 2000 + 3000 + 4000; // giá trị đầu tiên
  }, [like]);
  // console.log(count);

  // cache lại function, khi goi click sẽ chạy, nếu [] thì nó sẽ render giữ nguyên giá trị đầu tiên like = 1, [like] thay dổi sẽ render và cập nhật lại function
  const handleSetlike = useCallback(() => {
    // console.log("callBack", like);
    setLike(like + 1);
  }, [like]);

  return (
    <div>
      <h4>UseEffect</h4>
      <button
        className="btn btn-info"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increase
      </button>
      <button className="btn btn-warning" onClick={handleSetlike}>
        Increase like
      </button>
      <Memo like={like} />
    </div>
  );
}

export default UseEffect;
