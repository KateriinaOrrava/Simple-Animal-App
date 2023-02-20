import React, { ReactNode, useEffect, useState } from 'react';
import styles from './AddNewModal.module.css';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { addAnimal } from '../../../redux/animalSlice';
import axios from 'axios';
import Select from 'react-select';

type Modal = {
  // children:ReactNode;
  open: boolean;
  onClose: () => void;
};
type NewAnimal = { name: string; type: string; img: string; id: number };

const Modal = (props: Modal) => {
  const dispatch = useAppDispatch();
  const [img, setAnimalImage] = useState('');
  const [name, setAnimalName] = useState('');
  const [type, setAnimalType] = useState('');
  const postAnimal = (an: NewAnimal) => {
    dispatch(addAnimal(an));
  };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const id = Math.random();
    let newAnimal = { name, type, img, id };
    console.log(newAnimal);
    postAnimal(newAnimal);
    props.onClose();
    setAnimalImage('');
    setAnimalName('');
    setAnimalType('');
    return newAnimal;
  };

  if (!props.open) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalAround}>
      <div className={styles.modal}>
        <form onSubmit={onSubmit} className={styles.modal}>
          <button 
          onClick={props.onClose}
          className={styles.submitBtn_48} >✕</button>
          <label>
            Animal name:
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setAnimalName(e.target.value)}
            />
          </label>

          <label>
            Animal image:
            <input
              required
              type="text"
              name="image"
              value={img}
              onChange={(e) => setAnimalImage(e.target.value)}
            />
          </label>

          <label>
            Type:
            <select required onChange={(e) => setAnimalType(e.target.value)}>
              <option value="">Select your option</option>
              <option value="mammal">mammal</option>
              <option value="bird">bird</option>
              <option value="reptiles">reptiles</option>
              <option value="amphibians">amphibians</option>
              <option value="invertebrates">invertebrates</option>
              <option value="fish">fish</option>
              <option value="all">all</option>
            </select>
          </label>
          <input type="submit" value="Submit" className={styles.submitBtn_48} />
        </form>
      </div>
    </div>,
    document.body as HTMLElement
  );
};
export default Modal;
