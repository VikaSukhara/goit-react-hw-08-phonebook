import { useAuth } from 'Hooks/useAuth';

export const HomeComponent = () => {
  const { isLoggedIn } = useAuth();
  const  {user}  = useAuth();
  return (
    <div style={{textAlign: 'center', marginTop: '200px'}}>
      {isLoggedIn ? (
        <div><h1  style={{ fontSize:" 45px", fontWeight: "700"}}>{user.name}, welcome to the phone book</h1></div>
      ) : (
        <div>
          <h1 style={{ fontSize:" 45px", fontWeight: "700"}}>Welcome to the phone book</h1>
          <p style={{ fontSize:" 25px", fontWeight: "400", marginTop: '20px'}}>Register or Log in to use the phone book</p>
        </div>
      )}
    </div>
  );
};
