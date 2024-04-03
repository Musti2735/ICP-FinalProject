import React, { useState } from 'react';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';

function PetList(props) {
  const { petList, setCurrentView, setSelectedPetId, ownerList, arrayBufferToBase64,setIsModalOpen, setModalMessage } = props;
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [foundPet, setFoundPet] = useState(null);

  const handleSearchById = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchByName = (e) => {
    setSearchName(e.target.value);
  };
  const searchPetById = () => {
    let pet = petList.find(pet => pet.id === searchId);
    if (!pet) {
      pet = ownerList.find(pet => pet.id === searchId);
    }
    if (pet) {
      setFoundPet(pet); // Bulunan pet'i ayarla
    } else {
      setIsModalOpen(true)
      setModalMessage(`${searchId} #ID numaralı Pet Listede bulunmamaktadır.`)
      setFoundPet(null); // Eğer pet bulunamazsa foundPet'i null yap
    }
  };
  const searchPetByName = () => {
    let pet = petList.find(pet => pet.name.toLowerCase() == searchName.toLowerCase());
    if (!pet) {
      pet = ownerList.find(pet => pet.name.toLowerCase() === searchName.toLowerCase());
    }
    if (pet) {
      setFoundPet(pet); // Bulunan pet'i ayarla
    } else {
      setIsModalOpen(true)
      setModalMessage(`${searchName} isimli Pet Listede bulunmamaktadır.`)
      setFoundPet(null); // Eğer pet bulunamazsa foundPet'i null yap
    }
  };

  return (
    <div className="container mt-5 p-3 border" style={{ maxWidth: "90%", minWidth: "300px" }}>
      <div className="row g-3 align-items-center">
        <div className="col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Pet ID giriniz"
            value={searchId}
            onChange={handleSearchById}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-primary" onClick={searchPetById}>Pet'i Bul</button>
        </div>
        <div className="col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Pet İsim giriniz"
            value={searchName}
            onChange={handleSearchByName}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-primary" onClick={searchPetByName}>Pet'i Bul</button>
        </div>
      </div>

      <div className="mt-4">
        {foundPet && (
          <div className="col-md-4 mb-4">
            <Card
              pet={foundPet} 
              setCurrentView={setCurrentView}
              setSelectedPetId={setSelectedPetId}
              arrayBufferToBase64={arrayBufferToBase64}
            />
          </div>
        )}
        <h3 className="mt-4">Sahipsiz Hayvanlar</h3>
        <div className="row">
          {petList.map((pet, index) => (
            <div className="col  mb-4">
              <Card
                index={index}
                pet={pet}
                setCurrentView={setCurrentView}
                setSelectedPetId={setSelectedPetId}
                arrayBufferToBase64={arrayBufferToBase64}
              />
            </div>

          ))}
        </div>

      </div>
      <div>
        <h3 className="mt-4">Sahiplendirilenler</h3>
        <div className="row">
          {ownerList && ownerList.map((pet, index) => (
            <div className="col  mb-4">
              <Card
                key={index}
                pet={pet}
                setCurrentView={setCurrentView}
                setSelectedPetId={setSelectedPetId}
                arrayBufferToBase64={arrayBufferToBase64}
              />
            </div>
          ))}
        </div>
      </div>

    </div>


  );
}

export default PetList;
