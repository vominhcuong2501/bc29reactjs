import React,{memo} from 'react'

// dùng để ngăn các component khong thay đổi => khong render lại tương tự như Purecomponent
function Memo(props) {
    console.log('Memo');
  return (
    <div>
        Like: {props.like}
    </div>
  )
}

export default memo(Memo)