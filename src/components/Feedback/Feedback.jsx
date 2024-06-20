import style from './Feedback.module.css';

export default function Feedback({ feedback, positiveFeedback }) {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <p className={style.item}>Good: {feedback.good}</p>
        <p className={style.item}>Neutral: {feedback.neutral}</p>
        <p className={style.item}>Bad: {feedback.bad}</p>
        <p className={style.item}>
          Total:{feedback.good + feedback.neutral + feedback.bad}
        </p>
        <p className={style.item}>Positive: {positiveFeedback}%</p>
      </ul>
    </div>
  );
}
