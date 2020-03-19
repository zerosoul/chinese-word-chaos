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
  let newArr = wordArr.map((w, idx) => {
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
export default function Dashboard() {
  const [words, setWords] = useState('科学研究表明，汉字顺序并不一定影响阅读。');
  const [chaos, setChaos] = useState('科学研究明表，字汉序顺定一不并响影读阅。');
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
          {chaos}
          <div className="copy">
            {copied && <span className="tip">已复制！</span>}
            <IconCopy />
          </div>
        </div>
      </CopyToClipboard>
      <textarea
        className="input"
        onChange={handleInputChange}
        name="input"
        id="input"
        rows="8"
        placeholder="请输入想要打乱的文本..."
      >
        {words}
      </textarea>
      <button disabled={!words} className="chaos btn" onClick={handleClick}>
        打乱顺序
      </button>
    </>
  );
}
