import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Segment, useDefault } from 'segmentit';
import IconCopy from '../components/IconCopy';

// 创建实例
// eslint-disable-next-line react-hooks/rules-of-hooks
const segment = useDefault(new Segment());
function getChaos(wordArr) {
  // 中文正则判断
  const pattern = new RegExp('[\u4E00-\u9FA5]+');
  // 标点符号判断
  const fuhaoReg = new RegExp(
    '[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]'
  );
  const isDot = fuhaoReg.test(wordArr[wordArr.length - 1]);
  let newArr = wordArr.map((w, idx) => {
    if (idx === wordArr.length - 2 && isDot) {
      return w;
    }
    if (idx === 0 || idx === wordArr.length - 1) {
      return w;
    }
    if (pattern.test(w)) {
      return w
        .split('')
        .reverse()
        .join('');
    } else {
      return w;
    }
  });
  return newArr.join('');
}
const initWords = '科学研究表明，汉字顺序并不一定影响阅读。';
const initChaos = getChaos(
  segment.doSegment(initWords, {
    simple: true
  })
);
export default function Dashboard() {
  const [words, setWords] = useState(initWords);
  const [chaos, setChaos] = useState(initChaos);
  const [copied, setCopied] = useState(false);
  const handleInputChange = ({ target: { value } }) => {
    setWords(value);
  };
  const handleCopy = () => {
    if (copied) {
      return;
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const handleClick = () => {
    console.log({ words });

    let wordArr = segment.doSegment(words, {
      simple: true
    });
    console.log({ wordArr });
    let newWords = getChaos(wordArr);

    setChaos(newWords);
  };
  return (
    <>
      <CopyToClipboard text={chaos} onCopy={handleCopy}>
        <div className="output">
          <p className="content">{chaos}</p>
          <div className="copy">
            {copied && <span className="tip">已复制！</span>}
            <IconCopy />
          </div>
        </div>
      </CopyToClipboard>
      <textarea
        defaultValue={words}
        className="input"
        onChange={handleInputChange}
        name="input"
        id="input"
        rows="8"
        placeholder="请输入想要打乱的文本..."
      ></textarea>
      <button disabled={!words} className="chaos btn" onClick={handleClick}>
        打乱顺序
      </button>
    </>
  );
}
