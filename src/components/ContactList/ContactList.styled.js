import { styled } from 'styled-components';


export const List = styled.ol`
  margin-top: 15px;
`;
export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 5px;
`;
export const Paragraph = styled.p`
  margin: 0;
  font-size: 18px;
`;
export const Button = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 25px;
  border: 1px solid black;
  border-radius: 7px;
  background-color: white;
  cursor: pointer;


  /* display: flex;
  justify-content: space-between;
   */

  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }
`;
