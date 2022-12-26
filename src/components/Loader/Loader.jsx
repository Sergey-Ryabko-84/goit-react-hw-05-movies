import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    <RotatingLines
      strokeColor="#2b4055d0"
      strokeWidth="5"
      animationDuration="0.75"
      width="48"
      visible={true}
    />
  </SpinnerWrapper>
);