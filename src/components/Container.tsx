interface IContainerProps {
  children?: React.ReactChild | React.ReactNode;
  className?: string;
}

export function Container({ children, className = "app" }: IContainerProps) {
  return <div className={className}>{children}</div>;
}
