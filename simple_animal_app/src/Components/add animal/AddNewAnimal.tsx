
import { ReactNode, useState } from "react"
import ReactDOM from "react-dom";
import Modal from "./add new animal modal/AddNewMadal";
import styles from './add new animal modal/AddNewModal.module.css'
interface PortalProps {
    children: ReactNode;
    target: HTMLElement;
  }
  
  const Portal: React.FC<PortalProps> = ({ children, target }) => {
    return ReactDOM.createPortal(children, target);
  };

const AddNewAnimal = () => {

    const [open, setOpen] = useState(false);


    return (
            <div>
                <button 
                 className={styles.submitBtn}
                onClick={()=> 
                  {setOpen(true); 
                  console.log('clicked');
                 
                }}> Add new animal</button>
                <Modal open={open} onClose={()=> setOpen(false)} />
                </div>
    )
}
export default AddNewAnimal;