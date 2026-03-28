"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

/** Smooth hovers: opacity + underline depth only (no vertical movement) */
const linkBase =
  "underline decoration-foreground underline-offset-[3px] transition-[opacity,color,text-underline-offset] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none";

const linkPrimary = `${linkBase} font-medium text-foreground hover:opacity-85 hover:underline-offset-[5px]`;

const linkSecondary = `${linkBase} text-foreground hover:opacity-80 hover:underline-offset-[5px]`;

const rowHover =
  "-mx-2 rounded-lg px-2 py-1.5 transition-[background-color] duration-300 ease-out hover:bg-foreground/[0.045] motion-reduce:hover:bg-transparent dark:hover:bg-foreground/[0.06]";

function BulletRow({
  title,
  titleHref,
  children,
}: {
  title: string;
  titleHref?: string;
  children: ReactNode;
}) {
  const titleEl = titleHref ? (
    <Link
      href={titleHref}
      target="_blank"
      rel="noopener noreferrer"
      className={linkPrimary}
    >
      {title}
    </Link>
  ) : (
    <span className="font-medium">{title}</span>
  );

  return (
    <li
      className={`flex gap-2 text-base leading-relaxed md:text-[17px] ${rowHover}`}
    >
      <span className="shrink-0" aria-hidden>
        -
      </span>
      <span>
        {titleEl}
        <span>: {children}</span>
      </span>
    </li>
  );
}

function firstSentenceRest(text: string) {
  const i = text.indexOf(". ");
  if (i === -1) {
    return { first: text, rest: "" };
  }
  return {
    first: text.slice(0, i + 1),
    rest: text.slice(i + 2),
  };
}

/** Soft ease — slow start, gentle landing */
const easeSmooth = [0.25, 0.1, 0.25, 1] as const;

export function HomeContent() {
  const reduceMotion = useReducedMotion();

  const stagger = reduceMotion ? 0 : 0.11;
  const y = reduceMotion ? 0 : 12;

  const container = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : {
            opacity: { duration: 0.55, ease: easeSmooth },
            y: {
              type: "spring" as const,
              stiffness: 88,
              damping: 30,
              mass: 0.9,
            },
          },
    },
  };

  const { links } = portfolio;
  const { first: aboutFirst, rest: aboutRest } = firstSentenceRest(
    portfolio.about,
  );

  const techEntries = Object.entries(portfolio.tech).map(([key, items]) => ({
    label:
      key === "languages"
        ? "Languages"
        : key === "frameworks"
          ? "Frameworks"
          : key === "tools"
            ? "Tools"
            : key === "ui"
              ? "UI"
              : key === "databases"
                ? "Databases"
                : key === "orms"
                  ? "ORMs"
                  : key === "deployment"
                    ? "Deployment"
                    : key === "other"
                      ? "Other"
                      : key,
    items: items as readonly string[],
  }));

  const socialLinkClass = `${linkSecondary} font-medium`;

  return (
    <LazyMotion features={domAnimation} strict>
      <main className="mx-auto min-h-screen max-w-6xl px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
        <m.div
          className="mx-auto w-full max-w-4xl text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <m.header variants={item} className="will-change-transform">
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            {portfolio.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-foreground/90 md:text-xl">
            {portfolio.tagline}
          </p>
          </m.header>

          <m.div variants={item} className="will-change-transform">
          <p className="mt-8 text-balance text-base leading-relaxed md:text-lg">
            <span className="bg-highlight px-0.5">{aboutFirst}</span>
            {aboutRest ? ` ${aboutRest}` : null}
          </p>

          <p className="mt-6 flex flex-wrap items-center justify-start gap-x-2 gap-y-2 text-base md:text-[17px]">
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              LinkedIn
            </Link>
            <span className="text-neutral-500 dark:text-neutral-400" aria-hidden>
              ·
            </span>
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              GitHub
            </Link>
            <span className="text-neutral-500 dark:text-neutral-400" aria-hidden>
              ·
            </span>
            <Link
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              X
            </Link>
            <span className="text-neutral-500 dark:text-neutral-400" aria-hidden>
              ·
            </span>
            <Link
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              Résumé
            </Link>
          </p>
          </m.div>

          <m.section
            variants={item}
            className="mt-16 will-change-transform md:mt-20"
          >
            <h2 className="text-xl font-semibold md:text-2xl">Experience</h2>
          <ul className="mt-6 list-none space-y-5 pl-0">
            {portfolio.experience.map((job) => (
              <BulletRow
                key={job.company}
                title={job.company}
                titleHref={job.url}
              >
                {job.role} · {job.period}
              </BulletRow>
            ))}
            </ul>
          </m.section>

          <m.section
            variants={item}
            className="mt-16 will-change-transform md:mt-20"
          >
            <h2 className="text-xl font-semibold md:text-2xl">Projects</h2>
          <ul className="mt-6 list-none space-y-4 pl-0">
            {portfolio.projects.map((p) => (
              <li
                key={p.name}
                className={`text-base leading-relaxed md:text-[17px] ${rowHover}`}
              >
                <div className="flex gap-2">
                  <span className="shrink-0" aria-hidden>
                    -
                  </span>
                  <span className="min-w-0">
                    <Link
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkPrimary}
                    >
                      {p.name}
                    </Link>
                    <span>: {p.description}</span>
                    <span className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-base md:text-[17px]">
                      <Link
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkSecondary}
                      >
                        Live
                      </Link>
                      {"github" in p && p.github ? (
                        <>
                          <span
                            className="text-neutral-500 dark:text-neutral-400"
                            aria-hidden
                          >
                            ·
                          </span>
                          <Link
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkSecondary}
                          >
                            Source
                          </Link>
                        </>
                      ) : null}
                    </span>
                  </span>
                </div>
              </li>
            ))}
            </ul>
          </m.section>

          <m.section
            variants={item}
            className="mt-16 will-change-transform md:mt-20"
          >
            <h2 className="text-xl font-semibold md:text-2xl">Open source</h2>
            <p className="mt-2 text-lg text-foreground/75 md:text-xl">
              Projects I have contributed to
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-1 gap-y-2 text-base leading-relaxed md:text-[17px]">
              {portfolio.contributions.map((c, i) => (
                <span key={c.name} className="inline-flex items-baseline">
                  {i > 0 ? (
                    <span
                      className="mx-1.5 text-neutral-400 dark:text-neutral-500"
                      aria-hidden
                    >
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkPrimary}
                  >
                    {c.name}
                  </Link>
                </span>
              ))}
            </div>
          </m.section>

          <m.section
            variants={item}
            className="mt-16 will-change-transform md:mt-20"
          >
            <h2 className="text-xl font-semibold md:text-2xl">Tech</h2>
            <ul className="mt-6 list-none space-y-4 pl-0">
              {techEntries.map(({ label, items }) => (
                <li
                  key={label}
                  className={`flex flex-col gap-1 text-base leading-relaxed sm:flex-row sm:items-baseline sm:gap-x-8 md:text-[17px] ${rowHover}`}
                >
                  <span className="shrink-0 font-medium sm:min-w-[8.5rem] md:min-w-[9.5rem]">
                    {label}
                  </span>
                  <span className="min-w-0 flex-1 text-foreground/95">
                    {items.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </m.section>
        </m.div>
      </main>
    </LazyMotion>
  );
}
