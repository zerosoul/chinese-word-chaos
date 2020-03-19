import React, { useState } from 'react';
import styled from 'styled-components';

const StyledIconWrapper = styled.div`
  position: absolute;
  top: -1.4rem;
  right: -1.3rem;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  svg {
    width: 100%;
    fill: #555;
  }
`;

const StyledTipModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .content {
    width: 80vw;
    padding: 1.4rem;
    background: rgba(2, 2, 2, 0.9);
    color: #fff;
    line-height: 1.4;
    font-size: 1rem;
    text-align: justify;
    box-shadow: 0 0 9px black;
    position: relative;
    .txt {
      margin-bottom: 1rem;
    }
    .source {
      font-size: 0.8rem;
      text-align: right;
      .link {
        font-style: italic;
        color: #fff;
        padding: 0 0.4rem;
      }
    }
    .close {
      cursor: pointer;

      position: absolute;
      bottom: -3rem;
      left: 50%;
      margin-left: -1rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 2px solid #333;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default function Tip() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(prev => !prev);
  };
  return visible ? (
    <StyledTipModalWrapper>
      <div className="content">
        <p className="txt">
          我们在阅读的时候，眼睛不是关注在每一个点上的，是一个扫视和凝视结合的动作。
        </p>
        <p className="txt">
          我们只有看到了不符合我们期望的内容，和超出了扫视的部分的时候，我们才会定睛凝视它，大部分的地方被我们扫视过去了，中文的扫视长度大概是3～4个汉字字左右，而人眼能清晰看到物体的长度大概就是4～5个字母，看不清的部分，我们大脑会自动的根据上下文的意思，和字整体看上去的样子进行“脑补”。
        </p>
        <p className="txt">
          这就是为什么，你看到了顺序不正确的句子还是读了过去，当然，如果这种顺序错乱特别明显，这个时候大脑会受到刺激，让你去凝视它。
        </p>
        <p className="source">
          —— 源自
          <a href="https://www.guokr.com/question/103443/" className="link">
            果壳网
          </a>
        </p>
        <i className="close" onClick={toggleVisible}>
          <svg
            t="1584575640161"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2827"
            width="32"
            height="32"
          >
            <path
              d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
              p-id="2828"
            ></path>
          </svg>
        </i>
      </div>
    </StyledTipModalWrapper>
  ) : (
    <StyledIconWrapper onClick={toggleVisible}>
      <svg
        t="1584574846570"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2080"
        width="32"
        height="32"
      >
        <path d="M512 784.352m-48 0a1.5 1.5 0 1 0 96 0 1.5 1.5 0 1 0-96 0Z" p-id="2081"></path>
        <path
          d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128.288C300.416 128.288 128.288 300.416 128.288 512c0 211.552 172.128 383.712 383.712 383.712 211.552 0 383.712-172.16 383.712-383.712C895.712 300.416 723.552 128.288 512 128.288z"
          p-id="2082"
        ></path>
        <path
          d="M512 673.696c-17.664 0-32-14.336-32-32l0-54.112c0-52.352 40-92.352 75.328-127.648C581.216 434.016 608 407.264 608 385.92c0-53.344-43.072-96.736-96-96.736-53.824 0-96 41.536-96 94.56 0 17.664-14.336 32-32 32s-32-14.336-32-32c0-87.424 71.776-158.56 160-158.56s160 72.096 160 160.736c0 47.904-36.32 84.192-71.424 119.296C572.736 532.992 544 561.728 544 587.552l0 54.112C544 659.328 529.664 673.696 512 673.696z"
          p-id="2083"
        ></path>
      </svg>
    </StyledIconWrapper>
  );
}
