import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import expertImg from "@/assets/expert.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emagreça sem precisar pisar na Academia" },
      {
        name: "description",
        content:
          "Mais de 20 mil mulheres já descobriram como voltar a emagrecer sem academia. Entre no grupo gratuito.",
      },
      { property: "og:title", content: "Emagreça sem precisar pisar na Academia" },
      {
        property: "og:description",
        content:
          "Mais de 20 mil mulheres já descobriram como voltar a emagrecer sem academia. Entre no grupo gratuito.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://ludcarnevale.com/";
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto w-full max-w-[460px] px-5 pb-10">
        {/* Expert image with fade */}
        <div className="relative mx-auto mt-2 w-[180px] sm:w-[200px]">
          <img
            src={expertAsset.url}
            alt="Especialista em emagrecimento"
            className="block h-auto w-full object-contain"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Headline */}
        <h1 className="mt-3 text-center text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
          Emagreça sem precisar pisar na{" "}
          <span className="text-[#3aaf3a]">Academia</span>
          <span className="text-neutral-900">.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-4 max-w-[380px] text-center text-[14px] leading-relaxed text-neutral-700">
          O motivo pelo qual você começa e sempre para não é falta de força de vontade.
        </p>

        {/* Main text */}
        <p className="mx-auto mt-3 max-w-[380px] text-center text-[14px] leading-relaxed text-neutral-700">
          Mais de <strong className="font-bold">20 mil mulheres</strong> já descobriram como voltar a emagrecer sem academia.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input
            type="text"
            required
            maxLength={100}
            placeholder="Nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="h-12 w-full rounded-full border border-neutral-200 bg-white px-5 text-[15px] text-neutral-800 placeholder:text-neutral-400 shadow-sm focus:border-[#3aaf3a] focus:outline-none focus:ring-2 focus:ring-[#3aaf3a]/20"
          />
          <input
            type="email"
            required
            maxLength={255}
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="h-12 w-full rounded-full border border-neutral-200 bg-white px-5 text-[15px] text-neutral-800 placeholder:text-neutral-400 shadow-sm focus:border-[#3aaf3a] focus:outline-none focus:ring-2 focus:ring-[#3aaf3a]/20"
          />
          <input
            type="tel"
            required
            maxLength={20}
            placeholder="WhatsApp"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="h-12 w-full rounded-full border border-neutral-200 bg-white px-5 text-[15px] text-neutral-800 placeholder:text-neutral-400 shadow-sm focus:border-[#3aaf3a] focus:outline-none focus:ring-2 focus:ring-[#3aaf3a]/20"
          />

          <button
            type="submit"
            className="h-14 w-full rounded-full bg-[#3aaf3a] text-[15px] font-bold tracking-wide text-white shadow-[0_10px_25px_-8px_rgba(58,175,58,0.6)] transition-colors hover:bg-[#34a134] active:bg-[#2f9a2f]"
          >
            GARANTIR MINHA VAGA GRATUITA
          </button>
        </form>

        {/* Explanation */}
        <p className="mx-auto mt-5 max-w-[380px] text-center text-[13px] leading-relaxed text-neutral-600">
          Entre no grupo gratuito e descubra o que realmente está impedindo você de emagrecer.
        </p>

        {/* Benefits */}
        <ul className="mx-auto mt-4 flex max-w-[420px] flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-neutral-800">
          {["Acesso gratuito", "Conteúdo exclusivo", "Exclusivo para mulheres", "Mais de 20 mil alunas"].map((b) => (
            <li key={b} className="flex items-center gap-1.5">
              <Check />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Warning */}
        <div className="mt-8 text-center">
          <p className="flex items-center justify-center gap-1.5 text-[13px] font-semibold text-neutral-900">
            <Warn />
            Atenção: na quarta-feira será revelado.
          </p>
          <p className="mx-auto mt-2 max-w-[380px] text-[13px] leading-relaxed text-neutral-600">
            E na quinta-feira será aberta uma oportunidade exclusiva apenas para quem estiver no grupo.
          </p>
        </div>
      </div>
    </main>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3aaf3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Warn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
