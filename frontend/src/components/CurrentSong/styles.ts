import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 6rem;
  background: #1f2232;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .holder {
    width: 96% !important;
    margin: auto !important;
    display: flex;
    flex-direction: row;

    .left {
      width: 20%;
      display: flex;
      flex-direction: row;

      img {
        object-fit: cover;
        border-radius: 4px;
        width: 5rem;
        height: 5rem;
        margin-top: 0.5rem;
        margin-left: -1rem;
      }

      .info {
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0.5rem 0.5rem 0.5rem !important;
        * {
          font-size: 0.85rem;
          float: left;
          align-self: flex-start;
          color: #fff5f5 !important;
        }

        hr {
          margin-top: 1rem !important;
          width: 6rem;
        }
        h5 {
          margin-top: -0.75rem;
          font-size: 0.75rem;
        }
      }
    }

    .center {
      margin: auto !important;
      margin-top: 1.7rem !important;
      color: #fff5f5 !important;

      * {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
      }

      .largeIcon {
        font-size: 3rem;
      }

      .smallIcon {
        margin-bottom: 0.7rem !important;
      }
    }

    .right {
      width: 20%;
      display: flex;
      flex-direction: row;
      color: #fff5f5;

      * {
        margin: auto !important;
      }

      hr {
        margin-top: 3.3rem !important;
        margin-left: -6rem !important;
        width: 6rem;
      }
      svg { 
        margin-top:2.6rem!important;
      }
    }
  }
`;
