interface IButtonProps {
  className?: string;
  textContent: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button({
  className = "btn",
  textContent,
  disabled,
  onClick,
}: IButtonProps) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {textContent}
    </button>
  );
}
