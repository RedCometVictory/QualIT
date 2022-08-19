import ButtonUI from "../components/UI/ButtonUI";

const loginHandler = () => {
  console.log("logging in");
};

const registerHandler = () => {
  console.log("registering");
};

// const isAuthenticated = true;
const isAuthenticated = false;

const Dashboard = () => {
  if (!isAuthenticated) {
    return (
      <section className="dash">
        <div className="dash__unauth">
          <h3>Please Sign In.</h3>
          <div className="dash__unauth-btns">
            <ButtonUI
              className="dash__unauth-btn"
              variant="contained"
              onClick={loginHandler}
            >
              Sign In  
            </ButtonUI>
            <ButtonUI
              className="dash__unauth-btn"
              variant='outlined'
              onClick={registerHandler}
              href="/tasks"
            >
              Sign Up
            </ButtonUI>
          </div>
        </div>
      </section>
    )
  };
  return (
    <section className="dash">
      <div className="dash__card">
        <div className="dash__heading-sec">
          <div className="dash__header">
            <h2>Title of Header</h2>
          </div>
        </div>
        <div className="dash__content">
          <ul className="dash__list">
            <li className="dash__list-item">1</li>
            <li className="dash__list-item">2</li>
            <li className="dash__list-item">3</li>
            <li className="dash__list-item">4</li>
            <li className="dash__list-item">5</li>
            <li className="dash__list-item">6</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Dashboard;