import { Button } from '@mui/material';

// <a href={href ? href : '#'}></a>
const ButtonUI = ({
  className, text, variant, // href,
  color, label, underline = 'none',
  disabled, children, ...restProps
}) => {
  return (
    <Button
      className={className ? className : ' '}
      variant={variant ? variant : 'text'}
      color={color ? color : 'primary'}
      disabled={disabled ? disabled : false}
      {...{...restProps, underline}}
    >
      {children || label || text}
    </Button>
  )
};
export default ButtonUI;