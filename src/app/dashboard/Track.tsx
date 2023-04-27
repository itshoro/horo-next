import Image from "next/image";
import { Track as TrackProps } from "@/lib/spotify/topTracks";
import React from "react";
import Card from "../components/Card";

const Track = ({ name, artists, external_urls, album }: TrackProps) => {
  const coverImage = album.images[1];

  return (
    <Card className="flex min-w-0 items-center gap-1 border-none bg-transparent">
      <a
        href={album.external_urls.spotify}
        className="group relative block flex-shrink-0 overflow-hidden rounded-lg"
      >
        <Image
          src={coverImage.url}
          width={coverImage.width}
          height={coverImage.height}
          alt=""
          aria-hidden="true"
          className="block h-20 w-20"
        />
        <div className="absolute inset-0 z-10 grid h-full w-full place-content-center bg-black/80 text-2xl opacity-0 transition-all group-hover:opacity-100">
          &#8599;
        </div>
      </a>
      <Card.Spacing className="flex w-full min-w-0 flex-col">
        <Card.Value className="truncate">
          <a
            className="underline decoration-transparent underline-offset-4 transition-all hover:decoration-white hover:underline-offset-2"
            href={external_urls.spotify}
          >
            {name}
          </a>
        </Card.Value>
        <Card.Label className="truncate">
          {artists.map((artist, i) => (
            <React.Fragment key={artist.id}>
              <a
                className="underline decoration-transparent underline-offset-4 transition-all hover:text-white hover:decoration-white hover:underline-offset-2"
                href={artist.external_urls.spotify}
              >
                {artist.name}
              </a>
              {i < artists.length - 1 && ", "}
            </React.Fragment>
          ))}
        </Card.Label>
      </Card.Spacing>
    </Card>
  );
};

export default Track;
