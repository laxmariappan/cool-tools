export default function Form() {
    const addTool = async event => {
      event.preventDefault()
  
      const res = await fetch('/api/add', {
        body: JSON.stringify({
          name: event.target.name.value,
          link: event.target.link.value,
          description: event.target.description.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
      const result = await res.json()
       console.log(result)
      // result.user => 'Ada Lovelace'
    }
  
    return (
      <form onSubmit={addTool}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <input id="link" name="link" type="text" autoComplete="link" required />
        <input id="description" name="description" type="text" autoComplete="description"  />
        <button type="submit">Add</button>
      </form>
      
    )
  }