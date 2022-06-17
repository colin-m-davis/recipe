import React, { useState, useRef, useEffect, createRef } from 'react'
import './App.css';
import Form from './Form.jsx'

function App() {

  const [title, setTitle] = useState('')

  // [area][index][name]
  const [formData, setFormData] = useState(
    {ingredient: [{amount: '', name: ''}], step: [{text: ''}]}
  )

  // [area][name][index]
  const inputRef = {
    amount: useRef([]),
    name: useRef([]),
    text: useRef([])
  }

  const focusRef = useRef()

  // WTF...
  useEffect(() => {
    if (focusRef.current) {
      let ref = inputRef[focusRef.current['name']].current
      let element = ref[focusRef.current['index']]
      element.focus()
      focusRef.current = null
    }
  }, [formData['ingredient'].length, formData['step'].length]);

  // ADD REF NOW!!!
  const handleAddRef = (element, payload) => {
    if (inputRef[payload.name].current[payload.index] != element) {
      inputRef[payload.name].current[payload.index] = element
    }
  }

  // Handle change in input value according to type of input
  const handleInputChange = (event, payload) => {
    let data = {...formData}
    switch (payload.area) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'ingredient':
        data[payload.area][payload.index][event.target.name] = event.target.value;
        setFormData(data)
        break;
      case 'step':
        data[payload.area][payload.index] = event.target.value;
        setFormData(data)
        break;
    }
  }

  // Add blank ingredient *after* the specified index and focus it OR NOT
  const handleAdd = (payload) => {
    
    let ref, val;

    switch (payload.area) {
      case 'ingredient':
        val = {amount: '', name: ''}
        break;
      case 'step':
        val = {step: ''}
        break;
    }

    let data = {...formData};
    inputRef[payload.name].current.splice(payload.index+1, 0, null)
    data[payload.area].splice(payload.index+1, 0, val)
    setFormData(data)

    focusRef.current = {name: payload.name, index: payload.index+1}
  }

  // Remove ingredient at the specified index
  const handleRemove = (payload) => {
    if (document.activeElement == inputRef[payload.name].current[payload.index]) {
      console.log('=!!!')
      payload.index > 0 ? payload.index -= 1: payload.index = 0;
      focusRef.current = payload
    }

    inputRef[payload.name].current.splice(payload.index, 1)
  
    let data = {...formData}
    data[payload.area].splice(payload.index, 1)
    setFormData(data)
  }

  // Handle key down event according to event.key
  const handleKeyDown = (event, payload) => {
    let key = event.key;
    switch(key) {
      case 'Enter':
        handleAdd(payload)
        break;
      case 'Backspace':
        if (event.target.value == '') {
          handleRemove(payload)
        }
        break;
    }
  }

  return (
    <Form
      formData={formData}
      ingredients={formData.ingredient}
      addHandler={handleAdd}
      removeHandler={handleRemove}
      keyDownHandler={handleKeyDown}
      inputChangeHandler={handleInputChange}
      addRefHandler={handleAddRef}
      inputRef={inputRef}
    />
  );
}

export default App;