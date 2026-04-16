import Image from "next/image";

const services = [
  {
    title: "Sonido profesional",
    description:
      "Sistemas de audio de alto nivel para eventos corporativos, sociales, artísticos y producciones en vivo con excelente cobertura, potencia y claridad.",
  },
  {
    title: "Pantallas LED",
    description:
      "Soluciones visuales impactantes para escenarios, lanzamientos, conferencias, conciertos y experiencias de marca que elevan la presencia del evento.",
  },
  {
    title: "Iluminación profesional",
    description:
      "Diseño de iluminación escénica, arquitectónica y ambiental para transformar espacios y crear atmósferas memorables.",
  },
  {
    title: "Techos y estructuras",
    description:
      "Montajes confiables con estructuras y cubrimientos diseñados para brindar seguridad, estética y funcionalidad en cada producción.",
  },
  {
    title: "Streaming en vivo",
    description:
      "Cobertura profesional para transmitir eventos en tiempo real con calidad visual, continuidad técnica y ejecución precisa.",
  },
  {
    title: "Grabación de eventos",
    description:
      "Registro audiovisual profesional para conservar, difundir y potenciar cada momento importante de tu evento.",
  },
];

const reasons = [
  "Experiencias memorables con alto impacto visual y técnico",
  "Cumplimiento real en tiempos, montaje y ejecución",
  "Seguridad y respaldo en cada detalle del evento",
  "Innovación aplicada a producciones modernas",
  "Acompañamiento profesional de principio a fin",
  "Soluciones integrales para eventos corporativos, sociales y shows",
];

const gallery = [
  "/hero-evento.jpg",
  "/evento-led.jpg",
  "/evento-luces.jpg",
  "/evento-techo.jpg",
  "/evento-show.jpg",
  "/evento-streaming.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-evento.jpg"
            alt="Montaje profesional de evento Strong Technology"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,204,0,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 lg:px-10">
          {/* NAV */}
          <header className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-strong.png"
                alt="Logo Strong Technology"
                width={180}
                height={70}
                className="h-auto w-[150px] sm:w-[180px]"
              />
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/80">
              <a href="#servicios" className="transition hover:text-yellow-400">
                Servicios
              </a>
              <a href="#porque" className="transition hover:text-yellow-400">
                Por qué elegirnos
              </a>
              <a href="#galeria" className="transition hover:text-yellow-400">
                Galería
              </a>
              <a href="#contacto" className="transition hover:text-yellow-400">
                Contacto
              </a>
            </nav>
          </header>

          {/* HERO CONTENT */}
          <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div>
              <p className="mb-4 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300">
                Producción técnica para eventos de alto impacto
              </p>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                Hacemos de tu evento una{" "}
                <span className="text-yellow-400">experiencia inolvidable</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                En <strong>Strong Technology</strong> combinamos sonido
                profesional, pantallas LED, iluminación, estructuras, techos,
                streaming en vivo y grabación de eventos para crear montajes
                impactantes, seguros y ejecutados con excelencia.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/573102175490?text=Hola%20Strong%20Technology,%20quiero%20cotizar%20un%20evento."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-yellow-400 px-7 py-4 text-center font-semibold text-black transition hover:scale-[1.02] hover:bg-yellow-300"
                >
                  Cotizar por WhatsApp
                </a>

                <a
                  href="#servicios"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-center font-semibold text-white transition hover:border-yellow-400/60 hover:bg-white/10"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur">
                <h3 className="text-lg font-bold text-yellow-400">Impacto</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Producciones que transforman espacios y elevan la experiencia
                  del público.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur">
                <h3 className="text-lg font-bold text-yellow-400">
                  Cumplimiento
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Respuesta oportuna, ejecución precisa y compromiso real con
                  cada evento.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur">
                <h3 className="text-lg font-bold text-yellow-400">Seguridad</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Montajes confiables con respaldo técnico y atención a cada
                  detalle.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur">
                <h3 className="text-lg font-bold text-yellow-400">
                  Innovación
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Tecnología, creatividad y soluciones modernas para eventos que
                  dejan huella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                Nuestra propuesta de valor
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Más que equipos, creamos experiencias que se recuerdan
              </h2>
            </div>

            <div className="space-y-5 text-white/75 leading-8">
              <p>
                En Strong Technology no nos limitamos a instalar sonido, luces o
                pantallas. Diseñamos y ejecutamos experiencias que combinan
                impacto visual, respaldo técnico, estética, cumplimiento y
                seguridad.
              </p>
              <p>
                Cada evento representa una oportunidad para proyectar una marca,
                emocionar a una audiencia y dejar una impresión duradera. Por
                eso trabajamos con enfoque profesional, atención al detalle e
                innovación en cada montaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Servicios
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Soluciones integrales para eventos que exigen alto nivel
            </h2>
            <p className="mt-4 text-white/70 leading-8">
              Integramos tecnología, logística y producción para entregar
              montajes funcionales, impactantes y alineados con el objetivo de
              cada evento.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-yellow-400/40 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ELEGIRNOS */}
      <section id="porque" className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/evento-show.jpg"
                alt="Escenario profesional de Strong Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                Por qué elegirnos
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Tecnología, experiencia y ejecución impecable
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-white/80"
                  >
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Galería
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Montajes reales, resultados que hablan por sí solos
            </h2>
            <p className="mt-4 text-white/70 leading-8">
              Cada imagen representa el compromiso de Strong Technology con la
              calidad, la innovación, la seguridad y el impacto visual.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-72 overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={image}
                  alt={`Proyecto Strong Technology ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO FINAL */}
<section
  id="contacto"
  className="border-t border-white/10 bg-[linear-gradient(180deg,#050505_0%,#0b0f14_100%)]"
>
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
    <div className="grid gap-8 lg:grid-cols-2">
      {/* LADO IZQUIERDO */}
      <div className="rounded-[28px] border border-cyan-400/20 bg-black/60 p-8 shadow-[0_0_40px_rgba(0,180,255,0.08)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
          Contacto
        </p>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
          Hablemos de tu <br /> evento
        </h2>

        <div className="mt-8 space-y-4">
          <a
            href="mailto:strongtechnology@gmail.com"
            className="block text-2xl font-semibold text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200"
          >
            strongtechnology@gmail.com
          </a>

          <a
            href="https://wa.me/573102175490"
            target="_blank"
            rel="noreferrer"
            className="block text-2xl font-semibold text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200"
          >
            +57 310 217 5490
          </a>
        </div>

        <p className="mt-12 text-3xl font-bold leading-tight text-white">
          O completa este <br /> formulario
        </p>
      </div>

      {/* LADO DERECHO */}
      <div className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] sm:p-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre *"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/45 focus:border-cyan-400/50"
          />

          <input
            type="text"
            placeholder="Empresa o marca"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/45 focus:border-cyan-400/50"
          />

          <input
            type="email"
            placeholder="Correo electrónico *"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/45 focus:border-cyan-400/50"
          />

          <input
            type="tel"
            placeholder="Número de teléfono *"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/45 focus:border-cyan-400/50"
          />

          <textarea
            placeholder="Cuéntanos más sobre tu evento *"
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/45 focus:border-cyan-400/50"
          />

          <div className="pt-2">
            <p className="mb-3 text-sm font-medium text-white">
              Prefiero que me contacten por:
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white">
                <input type="checkbox" className="h-4 w-4" />
                WhatsApp
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white">
                <input type="checkbox" className="h-4 w-4" />
                Correo
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white">
                <input type="checkbox" className="h-4 w-4" />
                Llamada
              </label>
            </div>
          </div>

          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white">
            <input type="checkbox" className="h-4 w-4" />
            Autorizo el tratamiento de mis datos personales.
          </label>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
</main>
  );
}