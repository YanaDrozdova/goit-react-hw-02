import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useEffect, useState } from 'react';

export default function App() {
  const [values, setValues] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetValue = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onReset={resetValue}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={values} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
