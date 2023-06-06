import { useRef, useEffect } from 'react';
import { ModaLProps } from '../../types';
import ModalSTL from './Modal.module.css';
import ReactDOM from 'react-dom';
export default function Modal({ isOpen, onCloseModal, children }: ModaLProps): JSX.Element | null {
  const portalElem = document.getElementById('modal') as HTMLElement;

  const overlayRef = useRef<HTMLHeadingElement>(null);

  const pressEscBtn = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event);
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };
  const onOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={ModalSTL.Overlay}
      onClick={onOverlayClick}
      onKeyDown={pressEscBtn}
      role='button'
      tabIndex={0}
      ref={overlayRef}
    >
      <div className={ModalSTL.Modal}>{children}</div>
    </div>,
    portalElem,
  );
}
