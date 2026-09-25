import { createFileRoute } from "@tanstack/react-router";

import workRetouch from "@/assets/work-retouch.jpg";
import workCompositing from "@/assets/work-compositing.jpg";
import workPackaging from "@/assets/work-packaging.jpg";
import workBranding from "@/assets/work-branding.jpg";
import workPoster from "@/assets/work-poster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dwitiya Ramaniya — Graphic Designer & Product Image Editor",
      },
      {
        name: "description",
        content:
          "Portfolio Dwitiya Ramaniya: retouching produk, compositing, dan desain grafis dengan pengalaman lebih dari 5 tahun.",
      },
      {
        property: "og:title",
        content: "Dwitiya Ramaniya — Graphic Designer & Product Image Editor",
      },
      {
        property: "og:description",
        content:
          "Portfolio Dwitiya Ramaniya: retouching produk, compositing, dan desain grafis dengan pengalaman lebih dari 5 tahun.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { href: "#karya", label: "Karya" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#kontak", label: "Kontak" },
];

const CONTACT = {
  email: "ramaniyadwitiya@gmail.com",
  phone: "+62 818 0932 105",
  linkedin: "https://linkedin.com/in/Dwitiya-ramaniya",
  location: "Tangerang Selatan, Banten",
};

const WORKS = [
  {
    src: workRetouch,
    alt: "Contoh hasil retouching foto produk serum skincare",
    label: "Retouching Produk",
    span: "",
    width: 1024,
    height: 1280,
    ratio: "aspect-[4/5]",
  },
  {
    src: workCompositing,
    alt: "Contoh komposit foto produk sepatu untuk e-commerce",
    label: "Komposit & E-Commerce",
    span: "sm:col-span-2",
    width: 1920,
    height: 1024,
    ratio: "aspect-[16/9]",
  },
  {
    src: workPackaging,
    alt: "Desain kemasan brand kopi minimalis",
    label: "Desain Kemasan",
    span: "",
    width: 1024,
    height: 1024,
    ratio: "aspect-square",
  },
  {
    src: workBranding,
    alt: "Sistem identitas brand: kartu nama dan kop surat",
    label: "Identitas Brand",
    span: "",
    width: 1024,
    height: 1024,
    ratio: "aspect-square",
  },
  {
    src: workPoster,
    alt: "Seri poster tipografi editorial",
    label: "Poster & Editorial",
    span: "sm:col-span-2",
    width: 1920,
    height: 1024,
    ratio: "aspect-[16/9]",
  },
];

const EXPERIENCE = [
  {
    period: "Agu 2026 — Sekarang",
    role: "Product Image Editor",
    company: "Wirestock, Armenia",
    summary:
      "Menyempurnakan gambar produk menjadi visual yang profesional dan siap komersial — retouching, penyesuaian pencahayaan, tone warna, bayangan, dan refleksi, dengan teknik masking, compositing, dan blending agar produk tetap pusat perhatian.",
  },
  {
    period: "Okt 2025 — Feb 2026",
    role: "Photo Editor",
    company: "Wirestock, Armenia",
    summary:
      "Mengedit foto produk dan model sesuai standar kualitas e-commerce: lebih dari 300 gambar per bulan dengan tingkat revisi di bawah 5% dan revisi diselesaikan dalam 24 jam.",
  },
  {
    period: "Feb 2020 — Jan 2025",
    role: "Graphic Designer",
    company: "AJB Bumiputera 1912, Jakarta",
    summary:
      "Mengembangkan konten kreatif Instagram (engagement naik 25% dalam 3 bulan), memproduksi 300+ e-sertifikat, 50+ flyer dan materi presentasi, serta mendokumentasikan 30+ acara perusahaan melalui visual storytelling.",
  },
];

const HARD_SKILLS = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere",
  "Adobe InDesign",
  "Adobe Lightroom",
  "Canva",
  "CapCut",
  "Microsoft Office",
  "Product Photo Retouching",
  "Image Compositing",
  "Masking & Blending",
  "Color Correction",
  "Background Editing",
  "Quality Control",
];

const SOFT_SKILLS = [
  "Manajemen Waktu",
  "Adaptasi",
  "Komunikasi",
  "Kreativitas",
  "Attention to Detail",
  "Problem Solving",
];

const COURSES = [
  { name: "Interpersonal Skills", by: "Muamalat Institute", year: "Feb 2025" },
  { name: "Short Class: Color & Typography", by: "MySkill", year: "Mar 2025" },
  { name: "Mini Course: Digital Marketing", by: "RevoU", year: "Mar 2025" },
  { name: "Elevate UI/UX with Graphic Design", by: "Dibimbing", year: "Mar 2025" },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      {/* Ambient light */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 size-[520px] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-1/3 -right-40 size-[460px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-[420px] rounded-full bg-cream/80 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-ink/5 bg-paper/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-display text-lg font-medium tracking-tight"
          >
            Dwitiya Ramaniya
          </a>
          <nav className="hidden items-center gap-8 text-sm text-ink/60 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontak"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper ring-1 ring-ink/10 transition-colors hover:bg-ink/85"
          >
            Hubungi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <p className="rise mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Portofolio · Desain Grafis &amp; Editing Produk
        </p>
        <h1 className="rise d1 font-display text-5xl font-light leading-[1.02] tracking-tight text-balance sm:text-7xl">
          Dwitiya Ramaniya
        </h1>
        <p className="rise d2 mt-6 max-w-[46ch] text-lg leading-relaxed text-pretty text-ink/70">
          Graphic Designer &amp; Product Image Editor dengan pengalaman lebih
          dari 5 tahun — retouching, compositing, dan visual konten untuk
          kebutuhan korporat, digital, dan komersial.
        </p>
        <div className="rise d3 mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/60">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            {CONTACT.location}
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="transition-colors hover:text-ink"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Profile summary */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rise d4 rounded-[min(2vw,20px)] border border-ink/5 bg-white/40 p-8 backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
                Tentang
              </p>
              <p className="mt-4 font-display text-2xl font-light leading-snug text-ink/90">
                Lebih dari lima tahun mengolah visual yang rapi dan profesional.
              </p>
            </div>
            <div className="sm:col-span-8">
              <p className="text-base leading-relaxed text-pretty text-ink/70">
                Terampil menggunakan Adobe Creative Suite dan Canva — mulai
                dari retouching, compositing, masking, blending, color
                correction, hingga penyesuaian pencahayaan dan perspektif.
                Terbiasa bekerja berdasarkan brief, referensi visual, feedback,
                dan deadline dengan memperhatikan detail serta kualitas hasil.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
                <div>
                  <p className="font-display text-3xl font-medium text-ink">
                    300+
                  </p>
                  <p className="mt-1 text-sm text-ink/50">gambar / bulan</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-medium text-ink">
                    25%
                  </p>
                  <p className="mt-1 text-sm text-ink/50">
                    kenaikan engagement
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-medium text-ink">
                    10%
                  </p>
                  <p className="mt-1 text-sm text-ink/50">
                    kenaikan pendaftar agen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="karya" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
              Karya Terpilih
            </p>
            <h2 className="mt-3 font-display text-4xl font-light tracking-tight text-balance sm:text-5xl">
              Galeri Desain
            </h2>
          </div>
          <span className="hidden text-sm text-ink/40 sm:block">05 karya</span>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {WORKS.map((work) => (
            <figure
              key={work.label}
              className={`group relative overflow-hidden rounded-[min(1vw,12px)] ${work.span}`}
            >
              <img
                src={work.src}
                alt={work.alt}
                width={work.width}
                height={work.height}
                loading="lazy"
                className={`${work.ratio} w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-paper/70 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur-md">
                {work.label}
              </span>
            </figure>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="pengalaman" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
          Pengalaman
        </p>
        <h2 className="mt-3 font-display text-4xl font-light tracking-tight text-balance sm:text-5xl">
          Jejak Karier
        </h2>
        <div className="mt-12 border-t border-ink/10">
          {EXPERIENCE.map((job) => (
            <div
              key={job.role}
              className="grid grid-cols-12 gap-6 border-b border-ink/10 py-8"
            >
              <div className="col-span-12 text-sm text-ink/40 sm:col-span-3">
                {job.period}
              </div>
              <div className="col-span-12 sm:col-span-9">
                <h3 className="font-display text-2xl font-medium">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-ink/50">{job.company}</p>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-pretty text-ink/70">
                  {job.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="keahlian" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[min(2vw,20px)] border border-ink/5 bg-white/40 p-8 backdrop-blur-xl sm:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Keahlian
          </p>
          <h2 className="mt-3 font-display text-4xl font-light tracking-tight text-balance sm:text-5xl">
            Apa yang Saya Kuasai
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-ink">Hard Skill</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {HARD_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink/10 bg-paper/50 px-3 py-1.5 text-sm text-ink/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Soft Skill</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink/10 bg-paper/50 px-3 py-1.5 text-sm text-ink/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education + courses */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
              Pendidikan
            </p>
            <div className="mt-6 border-t border-ink/10 pt-6">
              <h3 className="font-display text-xl font-medium">
                S1 Desain Komunikasi Visual
              </h3>
              <p className="mt-1 text-sm text-ink/50">
                Universitas Komputer Indonesia, Bandung — 2018 · GPA 3.41/4.00
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
              Pelatihan &amp; Kursus
            </p>
            <ul className="mt-6 divide-y divide-ink/10">
              {COURSES.map((course) => (
                <li
                  key={course.name}
                  className="flex items-baseline justify-between gap-4 py-3 text-sm text-ink/70"
                >
                  <span>
                    {course.name}
                    <span className="text-ink/40"> — {course.by}</span>
                  </span>
                  <span className="shrink-0 text-xs text-ink/40">
                    {course.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer / contact */}
      <footer
        id="kontak"
        className="border-t border-ink/10 bg-cream/60 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Kontak
          </p>
          <h2 className="mt-4 max-w-[24ch] font-display text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Mari buat sesuatu yang tenang dan berkelas.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-ink/60">
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-ink"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-ink"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-16 text-xs text-ink/40">
            © 2026 Dwitiya Ramaniya — Tangerang Selatan, Indonesia
          </p>
        </div>
      </footer>
    </div>
  );
}
