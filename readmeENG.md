# 🐾 Pet Management Platform

This platform allows users to register their pets, update their information, and track their health information. Conceptually, it is designed for veterinary service organizations to register animals that come in for treatment and to track their treatment history. The purpose of the application is to securely store and track pet treatment information on the ICP.

You can watch how the program works with this <a target="_blank" href="https://www.youtube.com/watch?v=b9mm4p2cbH4">YouTube video.</a>

## Screenshots

<img src='https://github.com/Musti2735/ICP-FinalProject/blob/main/images/3.png'  width='700px'>
<hr><br>
<img src='https://github.com/Musti2735/ICP-FinalProject/blob/main/images/1.png'  width='700px'>
<hr><br>
<img src='https://github.com/Musti2735/ICP-FinalProject/blob/main/images/2.png'  width='700px'>

## Features

- A pet record is created in the application, and the pet is assigned a random ID by the system.
- Treatment information can be added simultaneously while creating a pet.
- The created pet is saved to a list. Users can access the relevant pet item by searching with "ID" or by "name".
- New treatment information can be added to the pet.
- Users can access pet information and all past treatment information.
- If a pet is adopted, it is saved to another list.

## Technologies

- **Backend:** Motoko (for the Internet Computer platform)
- **Frontend:** React, Bootstrap

## Backend Functions

### `createPet`
- **Description:** Registers a new pet in the system.
- **Parameters:** `id` (Text), `pet` (Pet), `petInfo` (PetInfo)
- **Return Value:** async Bool (True if successful)

### `addInfo`
- **Description:** Adds health information to a specific pet.
- **Parameters:** `id` (Text), `newInfo` (Info)
- **Return Value:** async Bool (True if successful)

### `addOwnerList`
- **Description:** Adds the pet to the adoption list.
- **Parameters:** `id` (Text), `pet` (Pet)
- **Return Value:** async Bool (True if successful)

### Query Functions
- `getPetList`: Lists all pets registered in the system.
- `getInfoList`: Lists all health information of pets.
- `getOwnerList`: Retrieves a list of adopted pets.
- `getInfos`: Retrieves health information of a specific pet.
- `getPet`: Retrieves a specific pet by ID.

## Frontend Components

### `App`
- **Description:** The main component of the application. It contains other components and manages state.

### `PetForm`
- **Description:** A form for creating a pet and entering its information.

### `PetList`
- **Description:** Displays a list of registered pets.

### `PetInfoForm`
- **Description:** Used to add health information for a pet.

## Setup and Running

### Backend
1. Dfinity SDK needs to be installed.
2. Use the `dfx start` command to start a local Internet Computer replica.
3. Deploy your codes to the replica with `dfx deploy`.

### Frontend
1. Install necessary packages with `npm install`.
2. Start the application with `npm start`.
