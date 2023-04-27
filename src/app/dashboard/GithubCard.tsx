import { getUserData } from "@/lib/github/user";
import Card from "../components/Card";
// import "server-only";

const GithubCard = async () => {
  const user = await getUserData();

  return (
    <Card>
      <Card.Spacing>
        <Card.Value className="mb-1">
          {user?.public_repos.toLocaleString()}
        </Card.Value>
        <Card.Label>Public Repositories</Card.Label>
      </Card.Spacing>
    </Card>
  );
};

export default GithubCard;
