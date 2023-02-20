import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { addAnimal, removeAnimal,  setLoading, setAllAnimals } from "./redux/animalSlice";
import { useAppDispatch, useAppSelector } from './redux/hooks';
import AddNewAnimal from './Components/add animal/AddNewAnimal';
import styles from './App.module.css'
import SortAndShowAnimals from './Components/SortAndShowAnimals';
function App() {

  // const [selectedType, setSelectedType] = useState("");

  // const dispatch = useAppDispatch();

  // const animals = useAppSelector((store) => {
  //   return store.animal.animals;
  // });

  // useEffect(() => {
  //   const storedAnimals = localStorage.getItem('animals');
  //   dispatch(setLoading(true));
  //   dispatch(setAllAnimals(storedAnimals ? JSON.parse(storedAnimals) : []));
  //   dispatch(setLoading(false));
  // }, []);

  // if (!animals.length) {
  //   return (
  //     <>
  //       <h1>uuups</h1>
  //       <h2>nothing to show</h2>
  //     </>
  //   )
  // }

  // const deleteAnimal = (id:number) => {
  //   dispatch(removeAnimal(id));
  // };

  // const filtered = animals.filter((animal) => {
  //   if (selectedType === "all") {
  //     return animals;
  //   } else {
  //     return animal.type.includes(selectedType);
  //   }
  // });

  return (
    <div className={styles.app}>
      <h1>ANIMAL CARDS</h1>
      <br />
      <AddNewAnimal/>
      <br />
      <SortAndShowAnimals />
      
    </div>
  )
}

export default App
