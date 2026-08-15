import { selectedWork } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

function ProjectArtwork() {
  return (
    <div
      className="relative aspect-4/3 overflow-hidden border border-border bg-hero-background p-5 text-hero-foreground md:p-7"
      aria-hidden="true"
    >
      {/* Fondo decorativo */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-acid/15 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              AWS Architecture
            </p>
            <p className="mt-1 text-xs text-hero-foreground/55">
              Serverless Portfolio
            </p>
          </div>

          <div className="border border-coral/50 bg-coral/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-coral">
            Cloud
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Usuario */}
          <div className="border-2 border-hero-foreground bg-background px-5 py-2 text-center shadow-[5px_5px_0_0_var(--coral)]">
            <span className="font-display text-sm md:text-base">
              USER
            </span>
          </div>

          <div className="h-5 w-px bg-coral" />
          <div className="text-coral">↓</div>
          <div className="h-2 w-px bg-coral" />

          {/* CloudFront */}
          <div className="w-[70%] border-2 border-coral bg-coral px-4 py-3 text-center text-ink">
            <div className="font-display text-lg md:text-xl">
              CLOUDFRONT
            </div>
            <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider">
              CDN · HTTPS
            </div>
          </div>

          <div className="h-5 w-px bg-coral" />
          <div className="text-coral">↓</div>
          <div className="h-2 w-px bg-coral" />

          {/* S3 */}
          <div className="w-[58%] border-2 border-hero-foreground bg-ink px-4 py-3 text-center text-white">
            <div className="font-display text-lg md:text-xl">
              AMAZON S3
            </div>
            <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/65">
              Astro Frontend
            </div>
          </div>

          <div className="my-4 flex w-full items-center">
            <div className="h-px flex-1 bg-border" />
            <span className="px-3 text-[0.6rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
              API
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Backend */}
          <div className="grid w-full grid-cols-3 gap-2 md:gap-3">
            <div className="border-2 border-hero-foreground bg-background px-2 py-3 text-center">
              <div className="font-display text-[0.78rem] md:text-sm">
                API
              </div>
              <div className="font-display text-[0.78rem] md:text-sm">
                GATEWAY
              </div>
            </div>

            <div className="flex items-center justify-center text-coral">
              →
            </div>

            <div className="border-2 border-coral bg-coral px-2 py-3 text-center text-ink">
              <div className="font-display text-sm md:text-base">
                LAMBDA
              </div>
              <div className="mt-1 text-[0.55rem] font-bold uppercase">
                Serverless
              </div>
            </div>
          </div>

          <div className="h-4 w-px bg-coral" />
          <div className="text-coral">↓</div>
          <div className="h-1 w-px bg-coral" />

          {/* DynamoDB */}
          <div className="w-[55%] border-2 border-hero-foreground bg-acid px-3 py-2 text-center text-ink">
            <div className="font-display text-sm md:text-base">
              DYNAMODB
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["IAM", "CloudWatch", "GitHub Actions"].map((service) => (
            <span
              key={service}
              className="border border-border bg-background/60 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-wider text-muted-foreground"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-16 bg-background pb-20 pt-12 text-foreground md:pb-28 md:pt-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading>Proyecto</SectionHeading>
        </MotionWrapper>

        <MotionWrapper>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Este portfolio forma parte de un proyecto de modernización y migración a AWS,
            desarrollado para aplicar conocimientos de arquitectura cloud, servicios serverless,
            seguridad y despliegue.
          </p>
        </MotionWrapper>

        <div className="space-y-20 md:space-y-28">
          {selectedWork.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.08}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:items-start md:gap-14">
                <div className={index % 2 ? "md:order-2" : ""}>
                  <ProjectArtwork />
                </div>

                <div className={index % 2 ? "md:order-1" : ""}>
                  <p className="mb-3 text-sm font-black uppercase tracking-wide text-ember">
                    {project.context}
                  </p>

                  <h3 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.92] tracking-[-0.02em]">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                    {project.description.map((description) => (
                      <li key={description} className="flex gap-3 leading-relaxed">
                        <span
                          className="mt-[7px] h-2 w-2 shrink-0 bg-coral"
                          aria-hidden="true"
                        />
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    className="mt-7 flex flex-wrap gap-2"
                    aria-label="Technology stack"
                  >
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}