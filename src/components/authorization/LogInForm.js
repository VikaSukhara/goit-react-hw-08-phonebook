import { useDispatch } from 'react-redux';
import { fetchLogIn } from 'components/redux/auth/authOperation';
import css from './Ragist.module.css';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      fetchLogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Log in</h3>
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
          Log in
        </button>
      </form>
    </div>
  );
};
