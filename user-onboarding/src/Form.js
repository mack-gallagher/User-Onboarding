export default function Form(props) {
  return (
    <div className="form">
      <form>
        <label>
          First Name:
          <input name="first" type="text" /> 
        </label>
        <label>
          Last Name:
          <input name="last" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="text" />
        </label>
        <label>
          Password:
          <input name="password" type="text" />
        </label>
        <label>
          I agree to the Terms of Service
          <input name="tos" type="checkbox" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
        )
}
