import { FallingLines } from 'react-loader-spinner';
import { DivloaderContainer } from '../Styled-Components/Styled-Components.styled';
export default function Loader() {
  return (
    <DivloaderContainer>
      <FallingLines color='#3f51b5' width='100' visible={true} />
    </DivloaderContainer>
  );
}
