import { IErrorProps } from '../../types';
export default function Error({ message }: IErrorProps) {
  return <p>{message}</p>;
}
