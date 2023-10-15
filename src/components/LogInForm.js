import { useDispatch } from 'react-redux';
import { fetchLogIn } from 'components/redux/auth/authOperation';

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
  }
  return (
    <div>
      <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
        <label>
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter email" name="email" required />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
