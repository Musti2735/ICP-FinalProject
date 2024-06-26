You can access the English README file from <a target="_blank" href="https://github.com/Musti2735/ICP-FinalProject/blob/main/readmeENG.md"> here <a/> 

# 🐾 Pet Management Platform

Bu platform, kullanıcıların evcil hayvanlarını kaydetmelerine, bilgilerini güncellemelerine ve sağlık bilgilerini takip etmelerine olanak tanır. Kurgusal olarak, veterinerlik hizmeti veren kurukuşların, tedaviye gelen hayvanları sisteme kaydettiği ve tedavi geçmişinin takip edildiği bir senaryo üzerinde düşünülmüştür.
Uygulamanın amacı, pet tedavi bilgilerinin güvenli bir şekilde ICP üzerinde saklanması ve takip edilmesidir. 

Progmramın nasıl çalıştığını ve program tanıtımını <a target="_blank" href="https://www.youtube.com/watch?v=b9mm4p2cbH4">bu youtube videosu </a> ile izleyebilirsiniz. 

## Ekran Görüntüleri

<img src='https://github.com/Musti2735/ICP-FinalProject/blob/main/images/3.png'  width='700px'>
<hr><br>
<img src='https://github.com/Musti2735/ICP-FinalProject/blob/main/images/1.png'  width='700px'>
<hr><br>
<img src='https://github.com/Musti2735/ICP-FinalProject/blob/main/images/2.png'  width='700px'>





## Özellikler

- Uygulamada bir pet kaydı oluşturulur, pet'e sistem tarafından random bir ID atanır.
- Pet oluşturulurken aynı zamanda tedavi bilgileri eklenebilir. 
- Oluşturulan pet bir listeye kaydedilir. Kullanıcı, ilgili pet öğresine "ID" ile veya "name" ile arama yaparak erişebilir.
- Pet'e yeni tedavi bilgileri eklenebilir.
- Kullanıcı pet bilgilerine ve geçmiş tüm tedavi bilgilerine erişebilir. 
- Eğer pet sahiplendirilmişe başka bir listeye kaydedilir.


## Teknolojiler

- **Backend:** Motoko (Internet Computer platformu için)
- **Frontend:** React, Bootstrap

## Backend Fonksiyonları

### `createPet`
- **Açıklama:** Yeni bir evcil hayvanı sisteme kaydeder.
- **Parametreler:** `id` (Text), `pet` (Pet), `petInfo` (PetInfo)
- **Dönüş Değeri:** async Bool (Başarılı ise true)

### `addInfo`
- **Açıklama:** Belirli bir evcil hayvana sağlık bilgisi ekler.
- **Parametreler:** `id` (Text), `newInfo` (Info)
- **Dönüş Değeri:** async Bool (Başarılı ise true)

### `addOwnerList`
- **Açıklama:** Evcil hayvanı sahiplendirme listesine ekler.
- **Parametreler:** `id` (Text), `pet` (Pet)
- **Dönüş Değeri:** async Bool (Başarılı ise true)

### Sorgu Fonksiyonları
- `getPetList`: Sisteme kayıtlı tüm evcil hayvanları listeler.
- `getInfoList`: Tüm evcil hayvanların sağlık bilgilerini listeler.
- `getOwnerList`: Sahiplendirilmiş evcil hayvanların listesini getirir.
- `getInfos`: Belirli bir evcil hayvanın sağlık bilgilerini getirir.
- `getPet`: ID'ye göre belirli bir evcil hayvanı getirir.

## Frontend Komponentleri

### `App`
- **Açıklama:** Uygulamanın ana bileşenidir. Diğer bileşenleri içerir ve durum yönetimini sağlar.

### `PetForm`
- **Açıklama:** Evcil hayvan oluşturma ve bilgilerini giriş formu.

### `PetList`
- **Açıklama:** Kayıtlı evcil hayvanların listesini gösterir.

### `PetInfoForm`
- **Açıklama:** Evcil hayvanın sağlık bilgilerini eklemek için kullanılır.

## Kurulum ve Çalıştırma

### Backend
1. Dfinity SDK'nın yüklenmesi gerekmektedir.
2. `dfx start` komutu ile yerel bir Internet Computer replikası başlatılabilir.
3. `dfx deploy` ile kodlarınızı replikaya yükleyebilirsiniz.

### Frontend
1. `npm install` ile gerekli paketleri yükleyin.
2. `npm start` ile uygulamayı başlatın.

Not : Images klasörü içinde, program demosunda kullanılmak üzere birtakım fotoğraflar yüklenmiştir.
