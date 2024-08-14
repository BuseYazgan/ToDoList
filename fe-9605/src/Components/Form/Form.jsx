import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Form.scss';
import * as Icon from 'react-bootstrap-icons';

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [todoInput, settodoInput] = useState("");
  const [todos, settodos] = useState([]);


  const handleInputChange = (event) => {
    settodoInput(event.target.value); 
  }

    const addTodo = () => {
        if (todoInput.trim()) {
            const newTodo = {
                id: Date.now(),
                text: todoInput,
            }
          
          settodos([...todos, newTodo]);
          settodoInput('');
        }
  }

  const removetodo = (itemId)=>{
    const newArray = todos.filter(item => item.id !== itemId);
    settodos(newArray);
    }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <div className="d-flex justify-content-start align-items-center vh-100 divStyle">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="formStyle">
              <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Icon.Arrow90degDown color="royalblue" size={96} className="arrowStyle" />
                  <h3>Write your aim</h3>
                      <Form.Label>Hedef</Form.Label>
                      <Form.Control
                          required
                          type="text"
                          value={todoInput}
                          onChange={handleInputChange} 
                        className="inputStyle"
                          />
                  </Form.Group>
              </Row>
              <Button type="submit" onClick={addTodo}>Ekle</Button>
          </Form>
    <ul> 
    <h2 className="d-flex justify-content-start align-items-center pt-5">TO DO LIST</h2>     
   {todos.map((todo, index) => (
      <li key={index} className="pt-5" onClick={() => removetodo(todo.id)}>
      {todo.text}
      </li>
  ))}
  </ul>
  </div>
        </>
  );
}

export default FormExample;