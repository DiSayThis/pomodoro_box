import React, { useEffect, useRef, useState } from "react";
import styles from "./dropdown.css";
import ReactDOM from "react-dom";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen = false }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const refButton = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    const btn = refButton.current?.getBoundingClientRect();
    setOffset({
      top: (btn?.top || 0) + window.scrollY,
      left: (btn?.left || 0) + window.scrollX,
    });
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={refButton}>
        {button}
      </div>
      {isDropdownOpen && (
        <DropdownMenu refButton={refButton} top={offset.top} left={offset.left} onClose={handleClose} children={children} />
      )}
    </div>
  );
}

interface IDropdownMenuProps {
  top: number;
  left: number;
  onClose: () => void;
  children: React.ReactNode;
  refButton: React.RefObject<HTMLDivElement>;
}

function DropdownMenu({ top, left, children, onClose, refButton }: IDropdownMenuProps) {
  const node = document.querySelector("#dropdown_root");
  if (!node) return null;

  const refMenu = useRef<HTMLDivElement>(null);

  function handleClose(e: MouseEvent) {
    console.log("click");
    if (e.target instanceof Node && !refMenu.current?.contains(e.target) && !refButton.current?.contains(e.target)) {
      //&& !refButton.current?.contains(e.target)
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return ReactDOM.createPortal(
    <div ref={refMenu} style={{ top, left }} className={styles.listContainer}>
      <div className={styles.list} onClick={onClose}>
        {children}
      </div>
    </div>,
    node,
  );
}
