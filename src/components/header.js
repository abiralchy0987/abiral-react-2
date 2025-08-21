 import styles from './header.module.css';
import "./header.css";


import { InputStyle, InputWrapper } from "./components.styled";
import { Link } from 'react-router-dom';

const Header = () => {
    return (<header className={styles.header}>
        <nav>
            <InputWrapper>
                <ul className={styles.list}>
                    <li className={styles['list-item']}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles['list-item']}>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className={styles['list-item']}>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </InputWrapper>
        </nav>
    </header>);
};

export default Header;