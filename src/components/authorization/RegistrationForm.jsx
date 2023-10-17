import { useDispatch } from 'react-redux';
import { fetchRegister } from 'components/redux/auth/authOperation';
import css from './Ragist.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      fetchRegister({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Create you account
        </h3>
        <label>
          <p className={css.labelParag}>Username</p>
        </label>
        <input
          className={css.input}
          type="text"
          placeholder="Enter name"
          name="name"
          required
        />

        <label>
          <p className={css.labelParag}>Email</p>
        </label>
        <input
          className={css.input}
          type="text"
          placeholder="Enter email"
          name="email"
          required
        />

        <label>
          <p className={css.labelParag}>Password</p>
        </label>
        <input
          className={css.input}
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />
        <button className={css.button} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
