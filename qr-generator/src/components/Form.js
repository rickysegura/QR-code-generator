const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="website">Enter URL</label>
        <input type="url" id="website" name="website" placeholder="https://example.com" className="form-control" required /><br/>
      </div>
    </form>
  )
}

export default Form