import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const ButtonUI = ({
  className, href, text, variant, // href,
  color, label, underline = 'none',
  disabled, children, ...restProps
}) => {
  return href ? (
    <Link to={href}>
      <Button
        className={className ? className : ' '}
        variant={variant ? variant : 'text'}
        color={color ? color : 'primary'}
        disabled={disabled ? disabled : false}
        {...{...restProps, underline}}
      >
        {children || label || text}
      </Button>
    </Link>
  ) : (
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