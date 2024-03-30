import React, { useState, useEffect } from 'react';
import { finalProject_backend } from 'declarations/finalProject_backend';

function App() {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [pet, setPet] = useState({
    name: '',
    gender: '',
    species: '',
  });
  const [info, setInfo] = useState({
    desc: '',
    age: '',
    date: '',
    owner: false,
  });

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const pets = await finalProject_backend.getList();
    setPets(pets);
  };

  const handleCreatePet = async () => {
    const petInfo = [info];
    const id = await finalProject_backend.createPet(pet, petInfo);
    console.log(`Pet created with ID: ${id}`);
    fetchPets();
  };

  const handleAddInfoToPet = async () => {
    setSelectedPetId(selectedPetId)
    const message = await finalProject_backend.addInfoToPet(parseInt(selectedPetId), info);
    console.log(`Pet edited with ID: ${selectedPetId}`);
    fetchPets(); // Pet listesini tekrar çek
  };

  // Pet ve info state'lerini güncelleyecek fonksiyonlar
  const handleChange = (e, setState) => {
    const { name, value, type, checked } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div>
      <h1>Pet Management</h1>

      {/* Pet Creation Form */}
      <div>
        <input value={pet.name} onChange={(e) => handleChange(e, setPet)} name="name" placeholder="Name" />
        <input value={pet.gender} onChange={(e) => handleChange(e, setPet)} name="gender" placeholder="Gender" />
        <input value={pet.species} onChange={(e) => handleChange(e, setPet)} name="species" placeholder="Species" />
        <button onClick={handleCreatePet}>Create Pet</button>
      </div>

      {/* Pet Selection Dropdown */}
      <div>
        <select value={selectedPetId} onChange={(e) => setSelectedPetId(e.target.value)}>
          <option value="">Select a Pet</option>
          {pets.map((pet, index) => (
            <option key={index} value={index}>
              {pet.name}
            </option>
          ))}
        </select>
        <div>

        </div>

      </div>

      {/* Pet Info Addition Form */}
      <div>
        <input type="number" value={info.age} onChange={(e) => handleChange(e, setInfo)} name="age" placeholder="Age" />
        <textarea value={info.desc} onChange={(e) => handleChange(e, setInfo)} name="desc" placeholder="Description"></textarea>
        <input type="date" value={info.date} onChange={(e) => handleChange(e, setInfo)} name="date" placeholder="Date" />
        <label>
          <input type="checkbox" checked={info.owner} onChange={(e) => handleChange(e, setInfo)} name="owner" /> Owner
        </label>
        <button onClick={handleAddInfoToPet}>Add Info to Selected Pet</button>
      </div>
    </div>
  );
}

export default App;


import PetInfoForm from "../petInfoForm/PetInfoForm";


function PetList(props) {
  const { pets, info, setInfo, handleChange, handleAddInfoToPet } = props;
  return (
    <div>
      <div>
        <PetInfoForm
          info={info}
          setInfo={setInfo}
          handleChange={handleChange}
          handleAddInfoToPet={handleAddInfoToPet}
        />
      </div>

      <ul>
        {pets.map((pet, index) => (
          <li key={index}>
           {pet.id} {pet.name} - {pet.species}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
