export interface AlertProps {
  open: boolean;
}

export interface AlertEmits {
  (event: "close"): void;
}
