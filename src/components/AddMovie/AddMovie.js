import React, { useState } from "react";

import Modal from "react-modal";

import "./AddMovie.css";

// Modal.setAppElement('#root');

const AddMovie = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    date: "",
    rating: "",
    description: "",
    image: "",
  });

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState("");
  const [image, setimage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" required />
          <label>Movie Rate</label>
          <input type="text" name="rating" required />
          <label>Movie Release Date</label>
          <input type="text" name="date" required />
          <label>Movie Image</label>
          <input type="url" name="image" required />
          <label>Movie Summary</label>
          <textarea type="text" name="description" required />
        </form>
        <button className="Modal-btn">Submit</button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
