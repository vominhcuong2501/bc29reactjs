import React from 'react'
import BaiTapUseHook from './BaiTapHook/BaiTapHook'
import UseEffect from './UseEffect/UseEffect'
import UseState from './UseState/UseState'

function Hooks(props) {
  return (
    <div>
        <UseState />
        <br/>
        <UseEffect />
        <br />
        <BaiTapUseHook />
        <br />
    </div>
  )
}

export default Hooks