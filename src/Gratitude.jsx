import styled from "styled-components";
import iconSuccess from "./assets/images/icon-success.png";

const Gratitude = ({ setPage, page, user }) => {
  return (
    <Wrapper>
      <div className="container bg-container fs-160 fw-400 ff-roboto text-color">
        <div className="confirmation">
          <img src={iconSuccess} alt="success" className="success-img" />
          <h1 className="fw-700">Thanks for Subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className="fw-700">{user}</span>. Please open it and click the
            button inside to confirm your subscription
          </p>
        </div>
        <button className="btn" type="button" onClick={() => setPage(!page)}>
          Dismiss message
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100vh;
  min-width: 100vh;
  background: #fff;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    padding: 6rem 2rem 2rem 2rem;
    margin-left: 7rem;
    gap: 15rem;
  }
  .confirmation {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
  }
  p {
    line-height: 1.5;
  }
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    min-width: 100vh;
    top: 0;
    left: 0;
    .container {
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      gap: 1rem;
      padding: 2rem;
    }
    .success-img {
      order: 1;
    }
    h1 {
      order: 2;
    }
    p {
      order: 3;
    }
  }
`;

export default Gratitude;
