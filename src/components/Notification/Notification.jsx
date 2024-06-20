import style from './Notification.module.css';

export default function Notification() {
  return (
    <div className={style.container}>
      <p className={style.notification}>No feedback yet</p>
    </div>
  );
}
