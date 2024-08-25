import MenuItem from '../MenuItem/MenuItem';
import styles from './Menu.module.css';

export default function Menu(){
    return <div className={styles.container}>
      <MenuItem title='HOME' icon='fa-solid fa-house' link='home' />
      <MenuItem title='SETTINGS' icon='fa-solid fa-gear' link='settings' />
      <MenuItem title='APPS' icon='fa-solid fa-bars' link='apps' />
      <MenuItem title='CALENDAR' icon='fa-regular fa-calendar' link='calendar' />
      <MenuItem title='HISTORY' icon='fa-solid fa-clock-rotate-left' link='history' />
      <MenuItem title='TAGS' icon='fa-solid fa-tags' link='tags' />
    </div>
  }
  