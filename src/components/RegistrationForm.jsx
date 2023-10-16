import { useDispatch } from 'react-redux';
import { fetchRegister } from 'components/redux/auth/authOperation';

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
  }
  return (
    <div>
      <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
        <label>
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter name" name="name" required />

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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
