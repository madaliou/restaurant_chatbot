import React, { useEffect, useState }  from 'react';
import Axios from 'axios';
import DataTable from 'react-data-table-component';

/* const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      right: true,
    },
  ]; */

//const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }]
const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    right: true,
  },
  {
    name: 'Persons',
    selector: 'rooms',
    sortable: true,
  },
  {
    name: 'Date',
    selector: 'registerDate',
    sortable: true,
  },
];


function Room(props) {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        console.log('Room log');

        fetchAllRoomCommands()

    }, [])
    

    const fetchAllRoomCommands = async () => {

        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.get('/api/dialogflow/rooms');

            //console.log('rooms : ', response.data);

            //rooms = response.data  
            setRooms(response.data)   
            
            //console.log('rooms : ', rooms);


        } catch (error) {
            
            console.log('errrrrr foodes : ', error);
        }

    }

    console.log('my rooms : ', rooms);

    return (

        <div style={{
            height: 600, width: '100%',
            border: '3px solid black', borderRadius: '7px'
        }}>

        <DataTable
                title="List of room commands"
                columns={columns}
                data={rooms}
        />        
    </div>

    )
}

export default Room
