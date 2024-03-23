import { ToastContainer, toast } from "react-toastify";
import iconList from "./assets/images/icon-list.png";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.png";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.png";
import { useState } from "react";
import Gratitude from "./Gratitude";

const App = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [page, setPage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!user) {
      toast.error("please provide an email!");
      setError(true);
      setPage(false);
      return;
    }
    setError(false);
    setUser("");
  };
  return (
    <main>
      <div className="container bg-container flex fw-400 text-color fs-160 ff-roboto">
        <img src={illustrationMobile} alt="mobile" className="mobile-img" />
        <img src={illustrationDesktop} alt="desktop" className="desktop-img" />
        <article className="bg-container">
          <h1 className="fw-700">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="para">
            <img src={iconList} alt="list" className="icon-list" />
            <p>Products discovery and building what matters</p>
          </div>
          <div className="para">
            <img src={iconList} alt="list" className="icon-list" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="para">
            <img src={iconList} alt="list" className="icon-list" />
            <p>And much more!</p>
          </div>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="labels">
              <label htmlFor="email" className="email fw-700">
                Email address
              </label>
              {error && <p>Valid email required</p>}
            </div>
            <input
              type="email"
              className="form-input"
              value={user}
              name="email"
              onChange={(e) => setUser(e.target.value)}
              placeholder="email@company.com"
            />
            <button
              type="submit"
              className="btn"
              onClick={() => setPage(!page)}
            >
              Subscribe to monthly newsletter
            </button>
            {page && <Gratitude setPage={setPage} page={page} user={user} />}
          </form>
        </article>
        <ToastContainer position="top-center" />
      </div>
    </main>
  );
};

export default App;
