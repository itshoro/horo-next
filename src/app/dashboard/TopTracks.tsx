import { getAccessToken } from "@/lib/spotify/accessToken";
import { fetchTopTracks } from "@/lib/spotify/topTracks";
import Track from "./Track";

const TopTracks = async () => {
  const accessToken = await getAccessToken();
  const topTracks = await fetchTopTracks(accessToken);

  return (
    <>
      {topTracks.map((track) => (
        <Track key={track.href} {...track} />
      ))}
    </>
  );
};

export default TopTracks;
