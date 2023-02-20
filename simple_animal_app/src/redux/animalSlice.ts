import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

export type Animal = {
    id: number,
    name: string,
    type: string,
    img: string
}
  
interface AnimalStateType {
    animals: Animal[],
    loading: boolean
}

const initialState: AnimalStateType = {
    animals: [],
    loading: false
  }

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        setAllAnimals: (state, action: PayloadAction<Animal[]>) => {
            state.animals=action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        addAnimal: (state, action: PayloadAction<Animal>) => {
            console.log(action.payload)
            const animal = {
                id: Math.random() * 100,
                name: action.payload.name,
                type: action.payload.type,
                img: action.payload.img
            };
            state.animals = [...state.animals, animal];
            window.localStorage.setItem(`animals`, JSON.stringify(state.animals))
        },
        removeAnimal: (state, action:PayloadAction<number>) => {
            state.animals = state.animals.filter((animals) => animals.id !== action.payload);
            window.localStorage.setItem(`animals`, JSON.stringify(state.animals))
        },

        },
    });
// setAllAnimals
    export const { addAnimal, removeAnimal, setAllAnimals, setLoading } = animalSlice.actions;
    export default animalSlice.reducer;