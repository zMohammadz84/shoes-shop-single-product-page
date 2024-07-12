"use client";
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "antd";
import React, { FC } from "react";

type CustomButtonPropsType = {} & ButtonProps;

const CustomButton: FC<CustomButtonPropsType> = ({
  children,
  className,
  ...rest
}) => {
  const classNames = cn([
    "flex justify-center items-center gap-5 bg-custom-orange-color text-white py-8 w-full rounded-lg shadow-[0px_5px_30px] shadow-custom-orange-color/75 lg:py-7 hover:bg-custom-orange-color/75 disabled:cursor-not-allowed",
    className,
  ]);

  return (
    <Button className={classNames} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
