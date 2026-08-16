import { useState } from "react";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

const API_URL =
  "https://hmrzmgcxal.execute-api.us-east-1.amazonaws.com/contact";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setMessage("Mensaje enviado correctamente. ¡Gracias por contactarme!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "Ocurrió un error al enviar el mensaje. Podés intentarlo nuevamente."
      );
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-background pb-20 pt-12 text-foreground md:pb-28 md:pt-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading>Contacto</SectionHeading>
        </MotionWrapper>

        <MotionWrapper>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Si querés contactarme por una oportunidad laboral, proyecto o consulta,
            podés enviarme un mensaje desde este formulario.
          </p>
        </MotionWrapper>

        <MotionWrapper>
          <form
            onSubmit={handleSubmit}
            className="grid max-w-2xl gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-coral focus:ring-1 focus:ring-coral"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-coral focus:ring-1 focus:ring-coral"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-bold"
              >
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-coral focus:ring-1 focus:ring-coral"
                placeholder="Motivo del contacto"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={6}
                className="w-full resize-y border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-coral focus:ring-1 focus:ring-coral"
                placeholder="Escribí tu mensaje..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="pressable inline-flex min-h-11 w-fit items-center justify-center bg-coral px-6 py-3 text-sm font-black uppercase tracking-wide text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>

            {message && (
              <p
                className={`text-sm font-semibold ${
                  status === "success"
                    ? "text-coral"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
}