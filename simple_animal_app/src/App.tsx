import AddNewAnimal from './Components/add animal/AddNewAnimal';
import styles from './App.module.css';
import SortAndShowAnimals from './Components/SortAndShowAnimals/SortAndShowAnimals';

function App() {
  return (
    <div className={styles.app}>
      <AddNewAnimal />
      <h1>ANIMAL CARDS</h1>
      <SortAndShowAnimals />
    </div>
  );
}

export default App;
