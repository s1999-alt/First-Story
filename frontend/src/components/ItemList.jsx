import React, { useEffect, useState } from 'react'
import api from '../axios_instance/axios'

const ItemList = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    try {
      const res = api.get('items/')
      setItems(res.data)
    } catch (error) {
      console.log(error)
    }
  },[])

  const addItem = async() => {
    const res = await api.post('items/', {name})
    setItems([...items, res.data])
    setName("")
  }

  return (
    <>
      <input
       value={name}
       onChange={e => setName(e.target.value)}
      />
      <button onClick={addItem}> Add </button>

      {items.map(i => <div key={i.id}> {i.name} </div>)}
    </>
  )
}

export default ItemList
