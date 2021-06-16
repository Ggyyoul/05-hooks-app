import { useFetch } from '../../hooks/useFetch';
import './examples.css'

export const MultipleCustomHook = () => {

  const state = useFetch('https://www.breakingbadapi.com/api/quotes/1')
  console.log(state)
  return (
    <div>
      <h1>Custoom Hooks!!</h1>
      <hr />
    </div>
  );
};
