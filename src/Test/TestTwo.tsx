import Test from '@/Test';
import styles from './test.module.scss';

function TestTwo() {
  return (
    <>
      <Test />
      <div className={styles['test']}>
        <p className={styles['test-text']}>Настройки</p>
      </div>
    </>
  );
}

export default TestTwo;
