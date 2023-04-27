// import { NowPlaying } from "@/components/spotify";
import profile from "../../../../public/profile.jpg";

import Link from "next/link";
import Image from "next/image";
import Carousel from "../Carousel";
import NowPlaying from "../now-playing/spotify";
import Card from "../Card";
import Icon from "../Icons";

const Footer = () => (
  <footer className="mx-auto max-w-5xl pb-6 pt-16">
    <div className="text-sm">
      <div className="from-zinc-900 to-black to-80% px-8 dark:bg-gradient-radial-at-t">
        <div className="border-t border-zinc-300 py-4 dark:border-zinc-900">
          <div className="-mx-2 mb-6 flex gap-4">
            <Card className="w-full max-w-lg">
              {/* @ts-ignore */}
              <NowPlaying />
            </Card>
            {/* <Card className="basis-0 inline-flex items-center">
              <Icon size={24} type="twitter" />
            </Card>
            <Card className="basis-0  inline-flex items-center">
              <Icon size={24} type="github" />
            </Card> */}
          </div>
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground focus:text-foreground focus:bg-foreground hover:bg-foreground rounded-md font-medium transition-all hover:bg-opacity-5 hover:px-2 hover:py-1 focus:bg-opacity-5 focus:px-2 focus:py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-foreground focus:text-foreground focus:bg-foreground hover:bg-foreground rounded-md font-medium transition-all hover:bg-opacity-5 hover:px-2 hover:py-1 focus:bg-opacity-5 focus:px-2 focus:py-1"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-foreground focus:text-foreground focus:bg-foreground hover:bg-foreground rounded-md font-medium transition-all hover:bg-opacity-5 hover:px-2 hover:py-1 focus:bg-opacity-5 focus:px-2 focus:py-1"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
