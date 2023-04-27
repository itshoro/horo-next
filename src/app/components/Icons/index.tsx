import { CSharpIcon } from "./csharp";
import { FigmaIcon } from "./figma";
import { GitIcon } from "./git";
import { NextJSIcon } from "./nextjs";
import { PythonIcon } from "./python";
import { TailwindCSSIcon } from "./tailwindcss";
import { VSCodeIcon } from "./vscode";
import { GithubIcon } from "./github";
import { TwitterIcon } from "./twitter";
import { SpotifyIcon } from "./spotify";
import { TypeScriptIcon } from "./typescript";
import { ReactIcon } from "./react";

const Icon = ({ type, size }: IconProps) => {
  switch (type) {
    case "csharp":
      return <CSharpIcon size={size} />;
    case "figma":
      return <FigmaIcon size={size} />;
    case "git":
      return <GitIcon size={size} />;
    case "nextjs":
      return <NextJSIcon size={size} />;
    case "python":
      return <PythonIcon size={size} />;
    case "react":
      return <ReactIcon size={size} />;
    case "tailwindcss":
      return <TailwindCSSIcon size={size} />;
    case "typescript":
      return <TypeScriptIcon size={size} />;
    case "vscode":
      return <VSCodeIcon size={size} />;
    case "github":
      return <GithubIcon size={size} />;
    case "twitter":
      return <TwitterIcon size={size} />;
    case "spotify":
      return <SpotifyIcon size={size} />;
    default:
      return null;
  }
};

export interface IconProps {
  type: IconType;
  size?: number;
}

export type IconType =
  | "csharp"
  | "figma"
  | "nextjs"
  | "git"
  | "python"
  | "react"
  | "tailwindcss"
  | "typescript"
  | "vscode"
  | "github"
  | "twitter"
  | "spotify";

export default Icon;
