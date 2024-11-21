import { Button } from "reactstrap";
import { BsPencilSquare } from "react-icons/bs";
import styles from "./ModalBasic.module.scss"

export default function ButtonModal(props) {
  const { toggle, iconButton, titleButton } = props;
  return (
    <div className={styles.btnModal}>
      {iconButton ? (
        <Button color="danger" onClick={toggle}>
        <BsPencilSquare size={25}/>
      </Button>
      
      ) : (
        <Button color="danger" onClick={toggle}>
          {titleButton}
        </Button>
      )}
    </div>
  );
}
