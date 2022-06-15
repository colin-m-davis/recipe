import React, { useState } from 'react'
import './App.css';
import Form from './Form.jsx'

function App() {

  const [formData, setFormData] = useState(
    { title: '', ingredients: [{name: ''}, {name: 'barry bonds'}] }
  )

  const handleTitleChange = (event) => {
    let data = {...formData} 
    data.title = event.target.value;
    setFormData(data)
    console.log('Title Change Event handled')
  }

  const handleIngredientChange = (index, event) => {
    const data = {...formData};
    data.ingredients[index][event.target.name] = event.target.value;
    setFormData(data)
    console.log('Ingredient Name Change Event handled')
  }

  return (
    <Form
      formData={formData}
      titleChangeHandler={handleTitleChange}
      ingredientChangeHandler={handleIngredientChange}
    />
  );
}

export default App;