import AniListCard from "./AniListCard";
import GithubCard from "./GithubCard";
import TopTracks from "./TopTracks";

export const dynamic = "force-dynamic";

const Dashboard = () => {
  return (
    <>
      <section className="mx-auto mt-8 max-w-5xl px-6">
        <h1 className="mb-8 text-2xl font-semibold">Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          {/* @ts-ignore */}
          <GithubCard />
          {/* @ts-ignore */}
          <AniListCard />
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <h2 className="mb-8 text-xl font-semibold">
          Favorite Song of the Month
        </h2>
        <div className="grid gap-4 divide-y md:grid-cols-2">
          {/* @ts-ignore */}
          <TopTracks />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
