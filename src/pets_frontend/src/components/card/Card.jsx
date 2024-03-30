import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Card(props) {

    const { pet, setSelectedPetId, setCurrentView, arrayBufferToBase64, addOwnerList,currentView } = props;

    const handleEditClick = (petId) => {
        setSelectedPetId(petId)
        setCurrentView(false)
    };

    return (
        <>
            <div className="card" style={{ width: '14rem' }}>
                {pet.img && (
                    <img
                        src={`data:image/png;base64,${arrayBufferToBase64(pet.img)}`}
                        alt="Pet"
                        className="card-img-top img-responsive "
                    />
                )}
                <div className="card-body">
                    <h5 className="card-title">{pet.name.charAt(0).toUpperCase() + pet.name.slice(1)}</h5>
                </div>
                <ul className="list-group list-group-flush fs-6  ">
                    <li className="list-group-item">#ID      : {pet.id}</li>
                    <li className="list-group-item">Tür      : {pet.species}</li>
                    <li className="list-group-item">Cinsiyet : {pet.gender}</li>
                    <li className="list-group-item">D.Tarihi : {pet.age.split('-').reverse().join('/')}</li>
                </ul>
                <div className="card-body">
                    {currentView ===false ? <button className="btn btn-primary float-end" onClick={addOwnerList}>Sahiplendir</button> : <button className="btn btn-primary float-end" onClick={() => handleEditClick(pet.id)}>Bilgileri Gör</button>
                    }
                </div>
            </div>

        </>
    )
};

export default Card;