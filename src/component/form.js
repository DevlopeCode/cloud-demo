// TrelloForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.css'
const createTrelloCard = async (cardData) => {
    const { name, description, dueDate, startDate } = cardData;
    const apiKey = 'e8d8b08bd7ecf2f8f0ad4f3c0d69cfd7';
    const token = 'ATTA9a3d3cdd00db6ff941d257f665db03a03f1106e75feebf6b0de72a33c01e12e6C353A3BF';
    const boardId = '65962efbd33a93657915ae17';
  
    const response = await axios.post(
      `https://api.trello.com/1/cards?key=${apiKey}&token=${token}&idList=${boardId}&name=${name}&desc=${description}&due=${dueDate}`,
    );
  
    alert('Trello Card Created:');
  };

const TrelloForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: '',
    startDate: '',
  });

  const getAllTrelloCards = async () => {
    try {
      const apiKey = 'e8d8b08bd7ecf2f8f0ad4f3c0d69cfd7';
      const token = 'ATTA9a3d3cdd00db6ff941d257f665db03a03f1106e75feebf6b0de72a33c01e12e6C353A3BF';
      const boardId = '65962efbd33a93657915ae17';

      const response = await axios.get(
        `https://api.trello.com/1/boards?key=${apiKey}&token=${token}&idList=${boardId}`,
      );

      console.log('All Trello Cards:', response.data);
    } catch (error) {
      console.error('Error fetching Trello cards:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Add Trello API integration code here
    createTrelloCard(formData)
    // Clear the form after submission
    setFormData({
      name: '',
      description: '',
      dueDate: '',
      startDate: '',
    });
  };

  useEffect(() => {
    getAllTrelloCards()
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='body'>

    <div className='container'>

    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Due Date:
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>

  );
};

export default TrelloForm;
