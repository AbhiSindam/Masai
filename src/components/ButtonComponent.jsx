import styles from "./Button.module.css";

function ButtonComponent({ title, onClick, disabled, id }) {
  return (
    <button id={id} data-testid="button-component" className={styles.button}>
      {title}
    </button>
  );
}

export default ButtonComponent;
