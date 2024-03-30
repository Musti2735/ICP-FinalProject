import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card';
import './style.css'

function PetInfoForm(props) {

  const { setCurrentView, handleChange, handleAddInfo, setInfo, info, selectedInfo, selectedPet, arrayBufferToBase64, currentView, addOwnerList, selectedPetId, ownerList } = props;


  const onBack = () => {
    setCurrentView(true)
  }

  return (
    <>
      <div className="container mt-2 p-3 border" style={{ maxWidth: "90%", minWidth: "300px" }}>
        <div className="row mb-3">
          <div className="col">
            <button onClick={onBack} className="btn btn-primary">Back</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            {selectedPet && selectedPet[0] && (
              <Card
                pet={selectedPet[0]}
                arrayBufferToBase64={arrayBufferToBase64}
                currentView={currentView}
                addOwnerList={addOwnerList}
                selectedPetId={selectedPetId}
                ownerList={ownerList}
              />
            )}
          </div>
          <div className='col-md-8'>
            <h3 className="mb-3">Tedavi Bilgileri Ekle</h3>
            <div className="row my-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="petWeight" className="form-label fs-6 mb-1">Ağırlık (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  id="petWeight"
                  name="weight"
                  value={info.weight}
                  onChange={(e) => handleChange(e, setInfo)}
                  placeholder="Ağırlık giriniz"
                />
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-check">
                  <input
                    name="infertile"
                    className="form-check-input"
                    type="radio"
                    id="infertileTrue"
                    value="true"
                    checked={info.infertile === true}
                    onChange={(e) => handleChange(e, setInfo)}
                  />
                  <label className="form-check-label fs-6 mb-1" htmlFor="infertileTrue">
                    Kısıtlaştırma Yapıldı
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="infertile"
                    className="form-check-input"
                    type="radio"
                    id="infertileFalse"
                    value="false"
                    checked={info.infertile === false}
                    onChange={(e) => handleChange(e, setInfo)}
                  />
                  <label className="form-check-label fs-6 mb-1" htmlFor="infertileFalse">
                    Kısıtlaştırılmadı
                  </label>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <label htmlFor="petVaccine" className="form-label fs-6 mb-1">Aşı Bilgisi</label>
              <input
                type="text"
                className="form-control"
                id="petVaccine"
                name="vaccine"
                value={info.vaccine}
                onChange={(e) => handleChange(e, setInfo)}
                placeholder="Aşı ismi giriniz"
              />
            </div>
            <div className="row my-3">
              <label htmlFor="petInfoDesc" className="form-label fs-6 mb-1">Tedavi bilgileri ekleyin</label>
              <textarea
                name="desc"
                className="form-control"
                id="petInfoDesc"
                value={info.desc}
                onChange={(e) => handleChange(e, setInfo)}
                placeholder="Açıklama"
                rows="4"
              />
            </div>
            <div>
              <button className="btn btn-primary my-3" onClick={handleAddInfo}>Bilgi ekle</button>
            </div>
          </div>
        </div>
        {selectedInfo && selectedInfo[0] && (

          <div className="mb-4 ">
            <h3 className="mb-2 mt-5">Geçmiş Tedavi Bilgileri</h3>

            {selectedInfo && selectedInfo[0] && (
              <ul className="treatment-history mb-4  fs-6">
                {selectedInfo[0].map((info, index) => (
                  <li className="card mb-3" key={index}>
                    <div class="card-footer text-body-secondary">
                      Kayıt Eklenme Tarihi : {info.date.split('-').reverse().join('/')}
                    </div>

                    <div className="card-body row">
                      <div className="col-md-6">
                        <div className="d-flex justify-content-start mb-1">
                          <div className="text-start me-2" style={{ minWidth: "140px" }}>
                            Ağırlık:
                          </div>
                          <div>{info.weight} kg</div>
                        </div>
                        <div className="d-flex justify-content-start mb-1">
                          <div className="text-start me-2" style={{ minWidth: "140px" }}>
                            Durumu:
                          </div>
                          <div>{info.infertile ? 'Kısırlaştırıldı' : 'Kısırlaştırılmadı'}</div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex justify-content-start mb-1">
                          <div className="text-start me-2" style={{ minWidth: "140px" }}>
                            Yapılan Aşılar:
                          </div>
                          <div>{info.vaccine}</div>
                        </div>
                        <div className="d-flex justify-content-start mb-1">
                          <div className="text-start me-2" style={{ minWidth: "140px" }}>
                            Sonraki Aşı Tarihi:
                          </div>
                          <div>{info.nextDate.split('-').reverse().join('/')}</div>
                        </div>
                      </div>
                      <div >
                        <p> Açıklama : {info.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div >
    </>
  );
}

export default PetInfoForm;
