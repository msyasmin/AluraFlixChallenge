import styles from "./Pie.module.css";
import logo from "./Logoaluraflix.png";

function Pie(){
    return <footer className={styles.footer}>
        <img src={logo} alt="logo" />
    </footer>
    
}

export default Pie