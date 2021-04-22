import React, {useEffect, useState} from 'react';
import { Segment,Button } from 'semantic-ui-react'
import CategoryTable from './CategoryTable';
import Select from './Select';
import { getAllRestaurants } from './endPoints'

const Home = () => {
  const [data, setData] = useState([])
  const [restaurantNum, setRestaurantNum ] = useState('')
  const [category, setCategory] = useState({value: 'Category1'})
  const [active, setActive] = useState(true)
  const [ error, setError] = useState('')
 
  useEffect(() => {
    fetch(getAllRestaurants)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => {
      console.log("An error has occurred while fetching response",error)
      setError(error)
    });
  }, [restaurantNum])

  const handleChange = (e,{value}) => {
    setRestaurantNum(() => ({value}))
  }

  const handleClick = (e) => {
    const { value } = e.target
    setActive(() => !active)
    setCategory(() => ({value}))
  }
  const renderTable = restaurantNum !== '' ? <CategoryTable category={category} restaurantNum={restaurantNum} /> : ''
  return (
    <>
      <Segment>
        <Select data={data} handleChange={handleChange}/>
        <div className="i-btn">
          <Button.Group floated='right'>
            <Button  positive={active} onClick={handleClick} value="Category1">Subs</Button>  
            <Button  positive={!active} onClick={handleClick} value="Category2">Non Subs</Button>
          </Button.Group>
        </div>
        {renderTable}
      </Segment>
      <div className="i-btn">
        <Button floated='right'>Reset</Button>
        <Button floated='right'>Submit</Button>
      </div>
    </>
  );
};

export default Home;