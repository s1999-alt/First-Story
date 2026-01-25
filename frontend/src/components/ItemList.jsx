import React, { useEffect, useState } from 'react'
import api from '../axios_instance/axios'

const ItemList = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get('/user/items/');
        setItems(res.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchItems();
  }, []);

  const addItem = async () => {
    try {
      const res = await api.post('/user/items/', { name })
      setItems([...items, res.data.data])
      setName("")
    } catch (error) {
      console.log(error.response?.data || error.message)
    }
  }

  return (
    <>
      <input
       value={name}
       onChange={e => setName(e.target.value)}
      />
      <button onClick={addItem}> Add </button>

      {items.map(i => (
        <div key={i.id}>{i.name}</div>
      ))}
    </>
  )
}

export default ItemList
