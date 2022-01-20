import React from 'react'

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
          <div className="home__top">
            <h1 className="display-3">Don't hesitate to post</h1>
            <p className="lead text-muted">
              Are you intersted in sharing of your information and opinions to others? If so go head create your account at firqabar &
              post your opinions.
            </p>
          </div>
          <div className="home__form">
            <form>
              <div className="form-group">
                <label for="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input
                  id="username-register"
                  name="username"
                  className="form-control"
                  type="text"
                  placeholder="Pick a username"
                  autocomplete="off"
                />
              </div>
              <div className="form-group">
                <label for="email-register" >
                  Email
                </label>
                <input
                  id="email-register"
                  name="email"
                  className="form-control"
                  type="text"
                  placeholder="enter@example.com"
                  autocomplete="off"
                />
              </div>
              <div className="form-group">
                <label for="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input
                  id="password-register"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="btn btn--signup"
              >
                Sign up for Firqaber
              </button>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Home
