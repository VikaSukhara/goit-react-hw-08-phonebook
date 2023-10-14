import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'left', marginTop: '10px', marginLeft: '20px' }}>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </div>
  );
};