export interface InputProps {
  type: string;
  children: string;
  name: string;
  id: string;
  className?: string;
  ref?: React.LegacyRef<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
