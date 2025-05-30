import {useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Content = () => {

  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Potatoes" },
    { id: 2, checked: false, item: "Icecream" },
    { id: 3, checked: false, item: "Apples" }
  ]);

  //handling each checkbox
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id == id ?
      {...item, checked: !item.checked} : item)
    setItems(listItems)
  }

    return (  
      <main>
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked = {item.checked}
              />
              <label>{item.item}</label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      </main>
    )
}

export default Content