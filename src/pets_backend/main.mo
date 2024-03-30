import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Bool "mo:base/Bool";

actor {

  type Pet = {
    id : Text;
    name : Text;
    gender : Text;
    species : Text;
    age : Text;
    img : Blob;
  };
  type PetInfo = [Info];

  type Info = {
    desc : Text;
    date : Text;
    infertile : Bool;
    vaccine : Text;
    nextDate : Text;
    weight : Text;
  };

  let petList = Map.HashMap<Text, Pet>(0, Text.equal, Text.hash);

  let infoList = Map.HashMap<Text, PetInfo>(0, Text.equal, Text.hash);

  let ownerList = Map.HashMap<Text, Pet>(0, Text.equal, Text.hash);

  // CreatePet fonksiyonu oluşturduk ve petlist ile infoliste put methodu ile öğeyi ekledik.
  public func createPet(id : Text, pet : Pet, petInfo : PetInfo) : async Bool {
    petList.put(id, pet);
    infoList.put(id, petInfo);
    true;
  };

  // Pet öğesine info ekleme
  public func addInfo(id : Text, newInfo : Info) : async Bool {
    switch (infoList.get(id)) {
      case (null) {
        false;
      };
      case (?currentInfoList) {
        let updatedInfoList = Array.append<Info>(currentInfoList, [newInfo]);
        infoList.put(id, updatedInfoList);
        true;
      };
    };
  };

  // Pet öğesini owner liste ekleme
  public func addOwnerList(id : Text, pet : Pet) : async Bool {
    if (id != "" and petList.get(id) != null) {
      ownerList.put(id, pet);
      petList.delete(id);
      true;
    } else {
      false;
    };
  };

  // Tüm pet listesi
  public query func getPetList() : async [Pet] {
    Iter.toArray(petList.vals());
  };

  //pet içindeki info listesi
  public query func getInfoList() : async [PetInfo] {
    Iter.toArray(infoList.vals());
  };

  // Sahipli pet listesi
  public query func getOwnerList() : async [Pet] {
    Iter.toArray(ownerList.vals());
  };

  //ID ile pet sorgu
  public query func getInfos(id : Text) : async (?PetInfo) {
    let infos : ?PetInfo = infoList.get(id);
    infos;
  };

  // Name ile pet sorgu
  public query func getPet(id : Text) : async (?Pet) {
    let pet : ?Pet = petList.get(id);
    pet;
  };

};
