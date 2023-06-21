"use client";
import { FunctionComponent, ReactNode, useEffect } from "react";

interface IProps {
  theme: string;
}

const ThemeSwitch: FunctionComponent<IProps> = ({ theme }) => {
  useEffect(() => {
    const HtmlElement = document.body.parentElement;
    HtmlElement!.className = `fm-${theme}`;

    window.addEventListener("load", () => {
      setTimeout(() => {
        window.scrollTo(0, 1);
      }, 0);
    });
  }, [theme]);

  return <div></div>;
};

export default ThemeSwitch;