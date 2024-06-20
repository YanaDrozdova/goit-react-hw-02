import style from './Options.module.css';

export default function Options({ onUpdateFeedback, onReset, totalFeedback }) {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <button
          className={style.button}
          onClick={() => onUpdateFeedback('good')}
        >
          Good
        </button>
        <button
          className={style.button}
          onClick={() => onUpdateFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={style.button}
          onClick={() => onUpdateFeedback('bad')}
        >
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={style.button} onClick={onReset}>
            Reset
          </button>
        )}
      </ul>
    </div>
  );
}
