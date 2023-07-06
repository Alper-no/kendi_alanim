
import { useState } from "react"

const FormObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  //? Destr.
  const { username, email, password } = formData

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`
      username:${username}
      email:${email}
      password:${password}
    `)
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">FORM OBJECT IN REACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            //? OnChange event'ı input degeri her degistiginde tetiklenir. Biz de yazdıgımız event handler araciligi ile State'i guncelleyebilmis oluruz.
            onChange={handleUsername}
            value={username}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormObject