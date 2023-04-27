import { SimpleCache, getCachedValue } from "../cache";
import {
  AccessToken,
  getAccessToken as uncached_getAccessToken,
} from "./accessToken";
import {
  NowPlaying,
  fetchNowPlaying as uncached_getNowPlaying,
} from "./nowPlaying";

const accessTokenCache: SimpleCache<AccessToken> = {
  updatedAt: 0,
};

const nowPlayingCache: SimpleCache<NowPlaying> = {
  updatedAt: 0,
};

async function getAccessToken() {
  return await getCachedValue(accessTokenCache, 3000, uncached_getAccessToken);
}

async function getNowPlaying() {
  const accessToken = await getAccessToken();
  return await getCachedValue(nowPlayingCache, 60, async () =>
    uncached_getNowPlaying(accessToken)
  );
}

export { getNowPlaying };
