import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps
}) => {
  let finalClassName = s.button;

  if (!disabled && !xType) {
    finalClassName += " " + s.default;
  } else if (!disabled && xType === "red") {
    finalClassName += " " + s.red;
  } else if (disabled && xType === "red") {
    finalClassName += " " + s.disabled;
  } else if (!disabled && xType === "secondary") {
    finalClassName += " " + s.secondary;
  }

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
