import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

interface MenuItemProps {
    title: string,
    link: string,
    icon: string
}

export default function MenuItem({ title, link, icon }: MenuItemProps){
    return <div className={styles.MenuItemContainer}>
        <Link to={link} className={styles.LinkStyling}>
            <div className={styles.MenuItem}>
                <p>{title}</p>
                <i className={icon}></i>
            </div>
        </Link>
    </div>
}