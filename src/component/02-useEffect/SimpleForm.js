import { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

  /*
   * El useEffec es un hook que nos permite ejecutar un efecto secundario cuando algo ocurra en el
   *componente
   */

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;
  /*
  *En el siguiente efecto sol se dispara cuando se renderiza por primera vez el componente
  */ 
  useEffect(() => {
    console.log('hey');
  }, []);

  useEffect(() => {
    console.log('formState Cambio')
  }, [formState])
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>Use Effect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='your name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='thing@mail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
