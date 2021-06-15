import React, { useEffect, useState }  from 'react';
import Axios from 'axios';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Firstname',
    selector: 'firstname',
    sortable: true,
  },

  {
    name: 'Lastname',
    selector: 'lastname',
    sortable: true,
  },

  {
    name: 'Crust',
    selector: 'crust',
    sortable: true,
  },
  
  {
    name: 'Size',
    selector: 'size',
    sortable: true,
  },  
  
  {
    name: 'Phone number',
    selector: 'phonenumber',
    sortable: true,
    right: true,
  },
  {
    name: 'Postal Code',
    selector: 'postalcode',
    sortable: true,
  },
  {
    name: 'Date',
    selector: 'registerDate',
    sortable: true,
  },
];


function Food(props) {

    const [foods, setFoods] = useState([])

    useEffect(() => {

        console.log('Food log');

        fetchAllFoodCommands()

    }, [])
    

    const fetchAllFoodCommands = async () => {

        try {
          
            const response = await Axios.get('/api/dialogflow/foods');

            setFoods(response.data) 
            
            console.log('foods : ', response.data);


        } catch (error) {
            
            console.log('errrrrr foodes : ', error);
        }

    }

    return (
      <div style={{
        height: 600, width: '100%',
        border: '3px solid black', borderRadius: '7px'
    }}>

<DataTable
        title="List of food commands"
        columns={columns}
        data={foods}
  />     
  </div>   

    )
}

export default Food
