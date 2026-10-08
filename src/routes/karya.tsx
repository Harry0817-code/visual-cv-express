import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PortfolioGallery } from "@/components/portfolio-gallery";

export const Route = createFileRoute("/karya")({
  head: () => ({
    meta: [
      { title: "Galeri Desain — Dwitiya Ramaniya" },
      {
        name: "description",
        content:
          "Galeri karya Dwitiya Ramaniya: Digital Imaging, Product Photo Manipulation, dan Instagram Feed Cover.",
      },
      { property: "og:title", content: "Galeri Desain — Dwitiya Ramaniya" },
      {
        property: "og:description",
        content:
          "Galeri karya Dwitiya Ramaniya: Digital Imaging, Product Photo Manipulation, dan Instagram Feed Cover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KaryaPage,
});

function KaryaPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      {/* Ambient light */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 size-[520px] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-1/3 -right-40 size-[460px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-[420px] rounded-full bg-cream/80 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-ink/5 bg-paper/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Beranda
          </Link>
          <span className="font-display text-lg font-medium tracking-tight">
            Dwitiya Ramaniya
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
          Karya Terpilih
        </p>
        <h1 className="mt-3 font-display text-5xl font-light tracking-tight text-balance sm:text-6xl">
          Galeri Desain
        </h1>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink/60">
          Tiga kategori utama — Digital Imaging, Product Photo Manipulation,
          dan Instagram Feed Cover. Koleksi lengkap tersedia di Google Drive.
        </p>
      </div>

      <PortfolioGallery />

      <footer className="border-t border-ink/10 bg-cream/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-ink/40">
          <span>© 2026 Dwitiya Ramaniya</span>
          <Link to="/" className="transition-colors hover:text-ink">
            Kembali ke Beranda
          </Link>
        </div>
      </footer>
    </div>
  );
}
