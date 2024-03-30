import { useState, useEffect } from 'react';
import { pets_backend } from 'declarations/pets_backend';
import PetForm from './components/petform/PetForm';
import PetList from './components/petlist/PetList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/modal';
import PetInfoForm from './components/petInfoForm/PetInfoForm';

function App() {
  const [petList, setPetList] = useState([]);
  const [ownerList, setOwnerList] = useState([]);
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState(true);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);


  const today = new Date().toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const randomId = new Date().getTime().toString();

  const [pet, setPet] = useState({
    id: randomId,
    name: '',
    gender: '',
    species: '',
    age: '',
    img: null,
  });

  const [info, setInfo] = useState({
    desc: '',
    date: today,
    infertile: null,
    vaccine: '',
    nextDate: '',
    weight: '',
  });

  useEffect(() => {
    pets_backend.getPetList().then((petList) => {
      setPetList(petList);
    });
    pets_backend.getOwnerList().then((ownerList) => {
      setOwnerList(ownerList);
    });
  }, []);

  const fetchLists = () => {
    pets_backend.getPetList().then(setPetList);
    pets_backend.getOwnerList().then(setOwnerList);
    pets_backend.getInfos(selectedPetId).then(setSelectedInfo);
  };

  // Component mount edildiğinde ve güncellendiğinde listeleri fetch et
  useEffect(() => {
    fetchLists();
  }, []);

  useEffect(() => {
    pets_backend.getPet(selectedPetId).then((pet) => {
      setSelectedPet(pet);
      console.log(pet.img)

    });
    pets_backend.getInfos(selectedPetId).then((infos) => {
      setSelectedInfo(infos);
      fetchLists();
    });
  }, [selectedPetId])


// pet oluşturma
  const handleCreatePet = async (e) => {
    e.preventDefault();
    const petInfo = [info]
    await pets_backend.createPet(pet.id, pet, petInfo);
    fetchLists();
    setIsModalOpen(true);
    setModalMessage(`${pet.id} #ID numaralı ${pet.name} isimli pet kaydı oluşturulmuştur.`);
    setPet({ id: randomId, name: '', gender: '', species: '', age: '', img: null }); // Reset pet form
    setInfo({
      desc: '', date: today, infertile: null, vaccine: '',
      nextDate: '', weight: '',
    });
  }

  //pete info ekleme
  const handleAddInfo = async (e) => {
    e.preventDefault();
    await pets_backend.addInfo(selectedPetId, info)
    fetchLists();
    setIsModalOpen(true);
    setModalMessage(`${selectedPetId} ID numaralı isimli hayvana bilgiler eklenmiştir.`);
    setInfo({
      desc: '', date: today, infertile: null, vaccine: '',
      nextDate: '',
      weight: '',
    });
  }

  // pet'i ownerliste ekleme
  const addOwnerList = async (e) => {
    e.preventDefault();
    const deletedPet = petList.find(pet => pet.id == selectedPetId)
    await pets_backend.addOwnerList(selectedPetId, deletedPet)
    setIsModalOpen(true);
    setModalMessage(`${selectedPetId} ID numaralı  pet  sahiplendirilmiştir.`);
    fetchLists();
  }

  // Pet ve info state'lerini güncelleyecek formdan gelen verileri işleyecek fonksiyonlar
  const handleChange = (e, setState) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const arrayBuffer = reader.result;
          const uint8Array = new Uint8Array(arrayBuffer);
          setState((prev) => ({
            ...prev,
            img: uint8Array, 
          }));
        };
        reader.readAsArrayBuffer(file); 
      }
    } else if (type === 'checkbox') {
      setState((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === 'radio') {
      setState((prev) => ({
        ...prev,
        [name]: value === "true" ? true : false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // gelen img dosyasının türünü değiştiren foksiyon
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const closeModal = () => setIsModalOpen(false);

  const allProps = {
    selectedPetId,
    setCurrentView,
    info,
    setInfo,
    handleChange,
    handleAddInfo,
    selectedPet,
    selectedInfo,
    addOwnerList,
    arrayBufferToBase64,
    currentView,
    ownerList
  };

  return (
    <>
      <div className="container mt-5 p-3 border" style={{ maxWidth: "80%", minWidth: "300px" }}>
        <h3>Pet's</h3>
        <div className="">
          {currentView &&
            <div>
              <PetForm
                pet={pet}
                setPet={setPet}
                info={info}
                setInfo={setInfo}
                handleChange={handleChange}
                handleCreatePet={handleCreatePet}
              />
              <PetList
                petList={petList}
                setCurrentView={setCurrentView}
                setSelectedPetId={setSelectedPetId}
                ownerList={ownerList}
                arrayBufferToBase64={arrayBufferToBase64}
                setModalMessage={setModalMessage}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          }
          {currentView == false &&
            <PetInfoForm
              {...allProps}
            />
          }
          <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
        </div>
      </div>
    </>

  );
}

export default App;
