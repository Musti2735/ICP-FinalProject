import React from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//{ pet,setPet, handleChange, handleCreatePet }
function PetForm(props) {
  const { pet, setPet, info, setInfo, handleChange, handleCreatePet } = props;

  return (
    <>
      <div className="container mt-5 p-3 border" style={{ maxWidth: "90%", minWidth: "300px", }}>
        <h3 className="mb-3">Pet Oluştur</h3>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="petName" className="form-label fs-6 mb-1">Pet İsmi Giriniz</label>
            <input
              value={pet.name}
              type="text"
              className="form-control"
              id="petName"
              onChange={(e) => handleChange(e, setPet)}
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="petGender" className="form-label fs-6 mb-1">Cinsiyet Seçiniz</label>
            <select
              value={pet.gender}
              className="form-select"
              id="petGender"
              onChange={(e) => handleChange(e, setPet)}
              name="gender"
            >
              <option value="">Cinsiyet Seçiniz</option>
              <option value="Dişi">Dişi</option>
              <option value="Erkek">Erkek</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="petSpecies" className="form-label fs-6 mb-1">Pet Türü</label>
            <input
              value={pet.species}
              type="text"
              className="form-control"
              id="petSpecies"
              onChange={(e) => handleChange(e, setPet)}
              name="species"
              placeholder="Species"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="petAge" className="form-label fs-6 mb-1">Doğum Tarihi</label>
            <input
              name="age"
              type="date"
              className="form-control"
              id="petAge"
              value={pet.age}
              onChange={(e) => handleChange(e, setPet)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="img" class="form-label">Bir resim yükleyin</label>
            <input class="form-control" type="file" id="img" name='img' onChange={(e) => handleChange(e, setPet)} />
          </div>
        </div>
        <hr />
        <h3 className="mb-3">Tedavi Bilgileri</h3>
        <div className="row">
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
              min="0"
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
                Kısırlaştırıldı
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
                Kısırlaştırılmadı
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8 mb-3">
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
          <div className="col-4 mb-3">
            <label htmlFor="nextDate" className="form-label fs-6 mb-1">Sonraki Kontrol Tarihi</label>
            <input
              type="date" // Tarih seçimi için input tipini 'date' olarak belirledim
              className="form-control"
              id="nextDate"
              name="nextDate" // Form elemanınızın name özelliğini belirttim
              value={info.nextDate} // info nesnesi içindeki nextDate değerini kullanarak state'i bağladım
              onChange={(e) => handleChange(e, setInfo)} // Değişiklikleri işleyecek olan fonksiyon
              placeholder="Sonraki kontrol tarihini giriniz" // Placeholder bilgisini ekledim
            />
          </div>

        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="petInfoDesc" className="form-label fs-6 mb-1">Tedavi bilgileri ekleyin</label>
            <textarea
              name="desc"
              className="form-control"
              id="petInfoDesc"
              value={info.desc}
              onChange={(e) => handleChange(e, setInfo)}
              placeholder="Açıklama"
              rows="3"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <button className="btn btn-primary btn-lg btn-block" onClick={handleCreatePet}>Create Pet</button>
          </div>
        </div>
      </div>
    </>



  );
}

export default PetForm;
