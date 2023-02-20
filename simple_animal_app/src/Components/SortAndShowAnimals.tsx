import { all } from "axios"
import { useState, useEffect } from "react";
import src from "react-select/dist/declarations/src"
import Select from "react-select/dist/declarations/src/Select"
import { removeAnimal, setAllAnimals, setLoading } from "../redux/animalSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styles from '../App.module.css'
const SortAndShowAnimals = () => {
    const [selectedType, setSelectedType] = useState("");

    const dispatch = useAppDispatch();
  
    const animals = useAppSelector((store) => {
      return store.animal.animals;
    });
  
    useEffect(() => {
      const storedAnimals = localStorage.getItem('animals');
      dispatch(setLoading(true));
      dispatch(setAllAnimals(storedAnimals ? JSON.parse(storedAnimals) : []));
      dispatch(setLoading(false));
    }, []);
  
    if (!animals.length) {
      return (
        <>
          <h1>uuups</h1>
          <h2>nothing to show</h2>
        </>
      )
    }
  
    const deleteAnimal = (id:number) => {
      dispatch(removeAnimal(id));
    };
  
    const filtered = animals.filter((animal) => {
      if (selectedType === "all") {
        return animals;
      } else {
        return animal.type.includes(selectedType);
      }
    });
    return (
        <>
        <div className={styles.sortByType}>
          <form className={styles.modal}>
                <label>
                      SHOW ONLY:
                      <select 
                      required
                      className={styles.select_type}
                      onChange={(e)=>(setSelectedType(e.target.value))}>
                          <option value="" disabled >Select your option</option>
                          <option value="mammal">mammals</option>
                          <option value="bird">birds</option>
                          <option value="reptiles">reptiles</option>
                          <option value="amphibians">amphibians</option>
                          <option value="invertebrates">invertebrates</option>
                          <option value="fish">fish</option>
                          <option value="all">all</option>
                      </select>
                  </label>
                  </form> 
              </div>
      <div className={styles.Animals}>
        {filtered.map(({name, type, img, id}) => {
            return (
              <div className={styles.CardWithAnimal}
              key={id+Math.random()}>
                <img 
                src={img} 
                alt={name}  
                key={id+Math.random()}
                className={styles.animalImg}/>
                <h2 key={id+Math.random()}>{name.toUpperCase()}</h2>
                <h3 key={id+Math.random()}>{type}</h3>
                <button 
                key={id}
                className={styles.submitBtn_48}
                onClick={() => {deleteAnimal(id);}}
                >✕</button>
              </div>
          )})}
       </div>
        </>
        
    )
}

export default SortAndShowAnimals;