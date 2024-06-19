import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const updateGood = () => {
  //   setValues(prevValues => ({
  //     ...prevValues,
  //     good: prevValues.good + 1,
  //   }));
  // };
  // const updateNeutral = () => {
  //   setValues(prevValues => ({
  //     ...prevValues,
  //     neutral: prevValues.neutral + 1,
  //   }));
  // };
  // const updateBad = () => {
  //   setValues(prevValues => ({
  //     ...prevValues,
  //     bad: prevValues.bad + 1,
  //   }));
  // };

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

  const totalFeedback = values.good + values.neutral + values.neutral;
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
