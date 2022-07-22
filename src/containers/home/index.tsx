import ContainerHomeNewsletter from './components/homeNewsletter';
import ContainerHomeCover from './components/homeCover';

import styles from './home.module.css';

export default function ContainerHome() {
  return (
    <div className={styles.wrapper}>
      <ContainerHomeCover />
      <ContainerHomeNewsletter />
    </div>
  );
}
