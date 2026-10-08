import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DRIVE_URL, WORK_CATEGORIES } from "@/lib/portfolio";

const CATEGORIES_PER_PAGE = 3;

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
  const totalPages = Math.ceil(WORK_CATEGORIES.length / CATEGORIES_PER_PAGE);
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const start = page * CATEGORIES_PER_PAGE;
  const visibleCategories = WORK_CATEGORIES.slice(start, start + CATEGORIES_PER_PAGE);
  const totalWorks = WORK_CATEGORIES.reduce((total, category) => total + category.images.length, 0);

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="karya" ref={sectionRef} className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <p className="text-sm text-ink/50">
          {WORK_CATEGORIES.length} kategori · {totalWorks} karya
        </p>
        <DriveLink />
      </div>

      <div className="space-y-14">
        {visibleCategories.map((category, index) => (
          <div key={category.label}>
            <div className="mb-5 flex items-baseline gap-4 border-t border-ink/10 pt-6">
              <span className="text-xs tabular-nums text-ink/40">{String(start + index + 1).padStart(2, "0")}</span>
              <h2 className="min-w-0 font-display text-2xl font-medium text-ink">{category.label}</h2>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
              {category.images.map((image) => (
                <figure key={image.src} className="min-w-0">
                  <Button asChild variant="ghost" className="group block h-auto w-full overflow-hidden rounded-lg p-0">
                    <div aria-label={`Lihat ${image.alt}`}>
                      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.02]" />
                    </div>
                  </Button>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Navigasi halaman galeri" className="mt-12 flex flex-wrap items-center justify-center gap-2 border-t border-ink/10 pt-10">
        <Button
          variant="outline"
          className="h-10 gap-1 px-4"
          disabled={page === 0}
          onClick={() => goToPage(page - 1)}
        >
          <ChevronLeft aria-hidden="true" />
          Sebelumnya
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant={index === page ? "default" : "outline"}
            className="h-10 w-10 px-0 tabular-nums"
            aria-current={index === page ? "page" : undefined}
            onClick={() => goToPage(index)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          className="h-10 gap-1 px-4"
          disabled={page === totalPages - 1}
          onClick={() => goToPage(page + 1)}
        >
          Berikutnya
          <ChevronRight aria-hidden="true" />
        </Button>
      </nav>

      <div className="mt-10 flex justify-center"><DriveLink /></div>
    </section>
  );
}
