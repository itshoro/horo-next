import { getUserData } from "@/lib/anilist/user";
import Card from "../components/Card";

const AniListCard = async () => {
  const { anime } = await getUserData();
  const { minutesWatched = 0 } = anime;

  return (
    <Card>
      <Card.Spacing>
        <Card.Value className="mb-1">
          {Math.round(minutesWatched / 60).toLocaleString()} hours
        </Card.Value>
        <Card.Label>Anime watched</Card.Label>
      </Card.Spacing>
    </Card>
  );
};

export default AniListCard;
