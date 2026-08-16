import { selectedWork } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

function ProjectArtwork() {
  const monitoringItems = ["Logs", "Metrics", "Alarms"];
  const transversalServices = [
    { name: "IAM", detail: "Security" },
    { name: "GitHub Actions", detail: "CI/CD" },
    { name: "AWS Budgets", detail: "Cost Control" },
  ];

  return (
    <div
      className="relative overflow-hidden border border-border bg-hero-background p-4 text-hero-foreground md:p-6"
      aria-label="Arquitectura serverless AWS del portfolio"
    >
      {/* Fondo decorativo */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-coral/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-acid/10 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-coral md:text-xs">
              AWS Architecture
            </p>

            <p className="mt-1 text-xs text-hero-foreground/60">
              Serverless Portfolio
            </p>
          </div>

          <div className="border border-coral/50 bg-coral/10 px-3 py-1 text-[0.6rem] font-black uppercase tracking-wider text-coral">
            Cloud
          </div>
        </div>

        {/* Usuario */}
        <div className="flex justify-center">
          <div className="border-2 border-hero-foreground bg-background px-5 py-2 text-center shadow-[4px_4px_0_0_var(--coral)]">
            <div className="font-display text-sm md:text-base">
              USER
            </div>
          </div>
        </div>

        <Connector />

        {/* CloudFront */}
        <ServiceBox
          title="CLOUDFRONT"
          subtitle="CDN · HTTPS"
          variant="primary"
          width="w-[78%]"
        />

        <Connector />

        {/* S3 */}
        <ServiceBox
          title="AMAZON S3"
          subtitle="Astro Frontend"
          variant="dark"
          width="w-[68%]"
        />

        {/* API separator */}
        <div className="my-4 flex items-center">
          <div className="h-px flex-1 bg-border" />

          <span className="px-3 text-[0.55rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
            POST /contact
          </span>

          <div className="h-px flex-1 bg-border" />
        </div>

        {/* API Gateway */}
        <ServiceBox
          title="API GATEWAY"
          subtitle="HTTP API"
          variant="outline"
          width="w-[72%]"
        />

        <Connector />

        {/* Lambda */}
        <ServiceBox
          title="AWS LAMBDA"
          subtitle="PortfolioContactFunction"
          variant="primary"
          width="w-[72%]"
        />

        {/* Branch */}
        <div className="mx-auto mt-2 h-5 w-px bg-coral" />

        <div className="mx-auto h-px w-[68%] bg-coral" />

        <div className="mx-auto grid w-[92%] grid-cols-3">
          <div className="mx-auto h-5 w-px bg-coral" />
          <div className="mx-auto h-5 w-px bg-coral" />
          <div className="mx-auto h-5 w-px bg-coral" />
        </div>

        {/* Servicios backend */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* DynamoDB */}
          <div className="border-2 border-hero-foreground bg-background p-3 text-center">
            <div className="font-display text-sm md:text-base">
              DYNAMODB
            </div>

            <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-wide text-muted-foreground">
              Messages
            </p>

            <div className="mx-auto my-2 h-3 w-px bg-border" />

            <p className="text-[0.6rem] leading-relaxed text-muted-foreground">
              Almacenamiento de mensajes
            </p>
          </div>

          {/* SES */}
          <div className="border-2 border-coral bg-coral p-3 text-center text-ink">
            <div className="font-display text-sm md:text-base">
              AMAZON SES
            </div>

            <p className="mt-1 text-[0.55rem] font-black uppercase tracking-wide">
              Email
            </p>

            <div className="mx-auto my-2 h-3 w-px bg-ink/40" />

            <p className="text-[0.6rem] font-semibold leading-relaxed">
              Notificación por Gmail
            </p>
          </div>

          {/* CloudWatch */}
          <div className="border-2 border-hero-foreground bg-ink p-3 text-center text-white">
            <div className="font-display text-sm md:text-base">
              CLOUDWATCH
            </div>

            <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-wide text-white/60">
              Monitoring
            </p>

            <div className="mt-3 grid gap-1.5">
              {monitoringItems.map((item) => (
                <span
                  key={item}
                  className="border border-white/15 bg-white/5 px-2 py-1 text-[0.55rem] font-black uppercase tracking-wider text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SES → Gmail */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div />

          <div className="flex flex-col items-center">
            <div className="h-4 w-px bg-coral" />
            <div className="text-xs text-coral">↓</div>

            <div className="mt-1 w-full border border-border bg-background/70 px-2 py-2 text-center">
              <div className="font-display text-xs">
                GMAIL
              </div>

              <div className="mt-1 break-all text-[0.5rem] text-muted-foreground">
                milagros.callejo03@gmail.com
              </div>
            </div>
          </div>

          <div />
        </div>

        {/* Servicios transversales */}
        <div className="mt-6 border-t border-border pt-4">
          <p className="mb-3 text-center text-[0.55rem] font-black uppercase tracking-[0.2em] text-muted-foreground">
            Security · Deployment · Cost Control
          </p>

          <div className="grid grid-cols-3 gap-2">
            {transversalServices.map((service) => (
              <div
                key={service.name}
                className="border border-border bg-background/50 px-2 py-2 text-center"
              >
                <div className="text-[0.55rem] font-black uppercase tracking-wide text-coral md:text-[0.6rem]">
                  {service.name}
                </div>

                <div className="mt-1 text-[0.48rem] uppercase tracking-wide text-muted-foreground">
                  {service.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-4 w-px bg-coral" />
      <div className="text-xs leading-none text-coral">↓</div>
      <div className="h-2 w-px bg-coral" />
    </div>
  );
}

type ServiceBoxProps = {
  title: string;
  subtitle: string;
  width: string;
  variant: "primary" | "dark" | "outline";
};

function ServiceBox({
  title,
  subtitle,
  width,
  variant,
}: ServiceBoxProps) {
  const styles = {
    primary: "border-coral bg-coral text-ink",
    dark: "border-hero-foreground bg-ink text-white",
    outline: "border-coral bg-background text-hero-foreground",
  };

  return (
    <div
      className={`mx-auto border-2 px-4 py-3 text-center ${width} ${styles[variant]}`}
    >
      <div className="font-display text-base md:text-xl">
        {title}
      </div>

      <div
        className={`mt-1 text-[0.55rem] font-bold uppercase tracking-wider ${
          variant === "dark"
            ? "text-white/60"
            : variant === "primary"
              ? "text-ink/70"
              : "text-muted-foreground"
        }`}
      >
        {subtitle}
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