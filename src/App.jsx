import RatingForm from './RatingForm'
import ThankYou from './ThankYou'
import Rating from './Rating'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(3);
  let [isSubmitted, setIsSubmitted] = useState(false);
  let content;

  const changeValue = (event, newValue) => {
    setValue(newValue);
  }

  const onClick = () => {
    setIsSubmitted(!isSubmitted);
    console.log(value);
    console.log(isSubmitted);
  }

  if (isSubmitted) {
    content = <ThankYou value={value} onClick={onClick} />
  } else {
    content = <RatingForm value={value} onClick={onClick} changeValue={changeValue} />
  }

  return (
    <>
      {content}
    </>
  )
}

export default App
