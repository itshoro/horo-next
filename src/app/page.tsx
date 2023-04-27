import Image from "next/image";
import profile from "../../public/profile.jpg";
import Icon from "@/app/components/Icons";
import Carousel from "@/app/components/Carousel";
import Card from "./components/Card";
import Badge from "./components/Badge";

export const dynamic = "force-dynamic";

const projects = [
  {
    name: "BASHO",
    languages: ["python" as const],
    href: "https://github.com/itshoro/basho",
  },
  {
    name: "nworking",
    languages: ["python" as const],
    href: "https://github.com/itshoro/nworking",
  },
];

const preferredStack = [
  {
    type: "typescript" as const,
    label: "TypeScript",
  },
  {
    type: "react" as const,
    label: "React",
  },
  {
    type: "tailwindcss" as const,
    label: "Tailwind CSS",
  },
  {
    type: "nextjs" as const,
    label: "Next.js",
  },
  {
    type: "python" as const,
    label: "Python",
  },
  {
    type: "csharp" as const,
    label: "C#",
  },
  {
    type: "figma" as const,
    label: "Figma",
  },
  {
    type: "git" as const,
    label: "git",
  },
  {
    type: "vscode" as const,
    label: "VS Code",
  },
];

export default function Home() {
  return (
    <main className="mt-16 p-6 md:p-24">
      {/* <div
        className="absolute inset-0 -z-10 w-screen max-w-full text-zinc-900 opacity-40"
        style={{
          background: [
            "radial-gradient(circle 800px at 700px 200px, rgb(48 2 12), transparent)",
            "radial-gradient(circle 400px at 400px 400px, rgb(112 26 117), transparent)",
            "radial-gradient(circle 800px at calc(100% - 300px) 300px, rgb(2 44 34), transparent)",
            "radial-gradient(circle 600px at calc(100% - 500px) 800px, rgb(8 47 73), transparent)",
            "radial-gradient(circle 600px at calc(20%) 800px, rgb(3 7 18), transparent)",
            "rgb(24 24 27)",
          ].join(),
        }}
      /> */}
      {/* <div
        className="absolute inset-0 -z-10 w-screen max-w-full bg-gradient-radial-at-t from-zinc-100 to-transparent"
        style={{
          color: "#fee7eb",
          background:
            "radial-gradient(circle at top left, rgb(254 231 235 / 0.2), transparent)",
        }}
      /> */}
      <section className="mx-auto max-w-5xl">
        <div>
          <Image
            src={profile}
            alt="Selfie of Tim Nelke"
            priority={true}
            className="my-8 h-24 w-24 rounded-full rounded-bl-none object-cover"
            quality={100}
            width={96}
            height={96}
          />
          <h1 className="pb-16 text-2xl font-medium text-black dark:text-white">
            Tim Nelke, a design interested software developer.
          </h1>
        </div>
        <div className="max-w-prose space-y-4 leading-7">
          <p>
            I'm a Software Developer currently working at{" "}
            <a
              className="font-medium text-foxfire-300 underline decoration-transparent underline-offset-4 transition-all hover:decoration-foxfire-300 active:underline-offset-2"
              href=""
            >
              publicplan GmbH&#8599;
            </a>
            , where I help to improve how people interact digitally with the
            public sector.
          </p>
          <p>
            Self-proclaimed walking documentation and jack-of-all-trades, master
            of{" "}
            <span
              aria-hidden={true}
              className="text-zinc-300 line-through decoration-foxfire-300"
            >
              none
            </span>{" "}
            all.
            {/* Outside of work I'd be best described as either a walking
            encyclopedia on various technical topics or simply a nerd. */}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-5xl">
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="light: text-lg font-medium text-black dark:text-white">
            Selected projects
          </h2>
          <div className="py-3">
            <a
              href="https://github.com/itshoro"
              target="_blank"
              className="inline-flex items-center gap-2 text-foxfire-300 transition-all hover:text-inherit focus:text-inherit"
            >
              <span className="text-sm font-medium">
                View more on <span className="sr-only">Github</span>
              </span>
              <Icon type="github" size={20} />
            </a>
          </div>
        </div>

        <Carousel className="-mx-6 gap-8 bg-gradient-radial-at-b from-white/5 to-transparent to-60% px-6 py-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-200 p-3 text-sm font-semibold transition hover:border-zinc-700 active:translate-y-1 dark:border dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Icon type={project.languages[0]} />
              <span className="ml-3 border-l border-zinc-300 pl-3 text-sm dark:border-zinc-700">
                {project.name}
              </span>
            </a>
          ))}
        </Carousel>
      </section>

      <section className="mx-auto max-w-5xl">
        <section>
          <h2 className="mb-2 mt-32 text-lg font-medium text-black dark:text-white">
            Quick Overview
          </h2>

          <div className="grid items-start divide-white/5 lg:auto-rows-fr lg:grid-cols-2 lg:divide-x">
            <div className="lg:pr-32">
              <small className="mb-2">Achievements</small>

              <div className="grid gap-4 py-8 lg:gap-8">
                <Card>
                  <Card.Spacing>
                    <Card.Value className="mb-2">
                      Jr. Sofware Developer
                    </Card.Value>
                    <Card.Label>
                      Current Occupation &middot;{" "}
                      <a
                        className="group text-sm text-foxfire-300 transition-colors duration-100 ease-out"
                        href="https://publicplan.de/"
                      >
                        publicplan GmbH{" "}
                        <span className="inline-block -translate-x-2 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                          &rsaquo;
                        </span>
                      </a>
                    </Card.Label>
                  </Card.Spacing>
                </Card>

                <Card>
                  <Card.Spacing>
                    <Card.Value className="mb-2">
                      B. Sc. in Computer Science
                    </Card.Value>
                    <Card.Label>
                      Highest Education &middot;{" "}
                      <a
                        className="group text-sm text-foxfire-300 transition-colors duration-100 ease-out"
                        href="https://www.hs-niederrhein.de/"
                      >
                        Hochschule Niederrhein{" "}
                        <span className="inline-block -translate-x-2 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                          &rsaquo;
                        </span>
                      </a>
                    </Card.Label>
                  </Card.Spacing>
                </Card>
              </div>
            </div>
            <div className="lg:pl-32">
              <div className="border-white/5 py-8 md:py-0">
                <small className="mb-8 block">Preferred Tools</small>

                <div className="flex flex-wrap items-center justify-between gap-4 md:justify-normal">
                  {preferredStack.map(({ label, type }: any) => (
                    <Badge
                      key={label}
                      label={label}
                      icon={<Icon type={type} />}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
