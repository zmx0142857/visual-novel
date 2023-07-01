import type { Component } from 'solid-js'
import './index.css'

const Dialog: Component = () => {
  return (
    <div class="dialog">
      <div class="dialog-bg"></div>
      <div class="dialog-left">
        <div class="dialog-avatar">
          <img class="g-image" src="/assets/test-avatar.jpg" />
        </div>
      </div>
      <div class="dialog-right">
        <div class="dialog-name">秋</div>
        <div class="dialog-text dialog-text--finished">我不知道哦……但如果是和 fran 一起的话？</div>
        <div class="dialog-btn-group">
          <button class="dialog-btn btn--active"><u>A</u>uto</button>
          <button class="dialog-btn"><u>O</u>ptions</button>
          <button class="dialog-btn"><u>S</u>ave</button>
          <button class="dialog-btn"><u>L</u>oad</button>
          <button class="dialog-btn"><u>H</u>istory</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
