import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 90vw;
  margin: 0 auto;
  .input {
    width: 100%;
    border-radius: 5px;
    padding: 0.4rem;
    margin: 1rem 0 2rem 0;
  }
  .output {
    padding: 0.4rem 1rem;
    border: 1px dashed #666;
    line-height: 1.4;
    font-weight: 800;
    text-shadow: 0 0 1px black;
    letter-spacing: 1px;
    position: relative;

    cursor: pointer;
    .copy {
      position: absolute;
      top: -2rem;
      right: 0;
      display: flex;
      align-items: center;
      svg {
        width: 1.2rem;
      }
      .tip {
        font-size: 0.6rem;
        font-weight: normal;
      }
    }
  }
  .btn {
    background: none;
    border: 1px solid #665;
    outline: none;
    border-radius: 5px;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    cursor: pointer;
    &[disabled] {
      color: #999;
    }
  }
`;

export default StyledWrapper;
