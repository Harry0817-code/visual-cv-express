import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_CATEGORIES, PORTFOLIO_DRIVE_URL } from "@/lib/portfolio";

export function DriveLink() {
  return (
    <Button asChild variant="outline" className="h-11 gap-3 px-5">
      <a href={PORTFOLIO_DRIVE_URL} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 3h8l7 12-4 7H5l-4-7L8 3Z" />
          <path d="m8 3 11 19M16 3 5 22M1 15h22M9 15l3-5 3 5" />
        </svg>
        Lihat Semua Karya
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function PortfolioGallery() {
  const count = GALLERY_CATEGORIES.reduce((total, category) => total + category.images.length, 0);
  return (
    <section id="karya" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <p className="text-sm text-ink/50">{GALLERY_CATEGORIES.length} kategori · {count} karya</p>
        <DriveLink />
      </div>
      <div className="space-y-14">
        {GALLERY_CATEGORIES.map((category, index) => (
          <div key={category.label}>
            <div className="mb-5 flex items-baseline gap-4 border-t border-ink/10 pt-6">
              <span className="text-xs tabular-nums text-ink/40">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="min-w-0 font-display text-2xl font-medium text-ink">{category.label}</h2>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
              {category.images.map((image) => (
                <figure key={image.src} className="min-w-0">
                  <Button asChild variant="ghost" className="group block h-auto w-full overflow-hidden rounded-lg p-0">
                    <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Lihat ${image.alt}`}>
                      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.02]" />
                    </a>
                  </Button>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center border-t border-ink/10 pt-10"><DriveLink /></div>
    </section>
  );
}
