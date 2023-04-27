import Card from "../components/Card";

const DashboardLoading = () => {
  return (
    <>
      <section className="mx-auto mt-8 max-w-5xl px-6">
        <h1 className="mb-8 text-2xl font-semibold">Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="animate-pulse">
                <Card.Spacing>
                  <Card.Label className="text-transparent">
                    Loading...
                  </Card.Label>
                  <Card.Value className="text-transparent">
                    Loading...
                  </Card.Value>
                </Card.Spacing>
              </Card>
            ))}
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <h2 className="mb-8 text-xl font-semibold">
          Favorite Song of the Month
        </h2>
        <div className="grid gap-4 divide-y md:grid-cols-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="animate-pulse">
                <Card.Spacing>
                  <Card.Label className="text-transparent">
                    Loading...
                  </Card.Label>
                  <Card.Value className="text-transparent">
                    Loading...
                  </Card.Value>
                </Card.Spacing>
              </Card>
            ))}
        </div>
      </section>
    </>
  );
};

export default DashboardLoading;
