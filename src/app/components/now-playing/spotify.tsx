import Icon from "../Icons";
import React from "react";

import { getNowPlaying } from "@/lib/spotify/cached";
// import "server-only";

const NowPlaying = async ({}: NowPlayingArgs) => {
  const nowPlaying = await getNowPlaying();

  let title = "Not Playing";
  let artists = [{ name: "Spotify", external_urls: { spotify: "" } }];
  let url = "#";
  let img = null;

  if (nowPlaying?.isPlaying) {
    title = nowPlaying.name;
    artists = nowPlaying.artists;
    url = nowPlaying.external_urls.spotify;
    img = nowPlaying.album.images[1];
  }

  return (
    <div className="flex justify-between">
      <div className="flex min-w-0 items-center gap-4 p-4">
        <div
          className={[
            nowPlaying.isPlaying && "text-[#1ED760]",
            "transition-colors",
          ]
            .filter((x) => x)
            .join(" ")}
        >
          <Icon type="spotify" size={24} />
        </div>
        <div className="inline-flex w-full min-w-0 items-center justify-between gap-4">
          <div className="min-w-0">
            <a
              target="_blank"
              className="mb-1 block truncate text-base font-medium hover:underline"
              href={url}
            >
              {title}
            </a>
            <span className="block truncate text-xs text-zinc-400">
              {artists.map(({ name, external_urls }, i) => (
                <React.Fragment key={name}>
                  <a
                    target="_blank"
                    className="hover:text-black hover:underline hover:dark:text-white"
                    href={external_urls.spotify}
                  >
                    {name}
                  </a>
                  {i < artists.length - 1 && ", "}
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
      {/* {img && (
        <img
          className="h-18 w-18 pointer-events-none block flex-shrink-0 select-none rounded-lg"
          src={img.url}
          width={img.width}
          height={img.height}
          loading="lazy"
          alt=""
          aria-hidden="true"
        />
      )} */}
    </div>
  );
};

type NowPlayingArgs = {
  loading?: boolean;
};

export default NowPlaying;
