import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useMemo, useRef, useState } from "react";
import AllPositionsPage from "../pages/AllPositionsPage";


const Search = () => {
  const [items, setItems] = useState(['lolo','toto','cory'])
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    return  items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  },[items,query])

  function onSubmit(e: Event) {
    e.preventDefault()

  }


  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      
    
      {/* <h3>Items:</h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))} */}
    </div>
  );
};

export default Search;
