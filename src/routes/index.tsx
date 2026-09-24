import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import thirdEye from "../assets/third-eye.png.asset.json";
import motherMatrix from "../assets/mother-matrix.png.asset.json";
import matrixEvolution from "../assets/matrix-evolution-cover.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sophia Stewart Book Collection | The Third Eye & More" },
      { name: "description", content: "Explore Sophia Stewart's books, including The Third Eye, Mother of the Matrix, and The Matrix: Evolution." },
      { property: "og:title", content: "Sophia Stewart Book Collection" },
      { property: "og:description", content: "Explore the writings and original creative vision of author and screenwriter Sophia Stewart." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const books = [
  {
    title: "The Third Eye",
    label: "The original manuscript / screenplay",
    description: "The epic science-fiction work Sophia Stewart identifies as the creative foundation connecting the worlds of The Matrix and The Terminator.",
    image: thirdEye.url,
    width: 873,
    height: 982,
    alt: "The Third Eye by Sophia Stewart book cover",
  },
  {
    title: "Mother of the Matrix",
    label: "The story, told directly",
    description: "Sophia Stewart's first-person account of authorship, perseverance, and the decades-long fight to make her creative legacy known.",
    image: motherMatrix.url,
    width: 873,
    height: 982,
    alt: "Mother of the Matrix by Sophia Stewart book cover",
  },
  {
    title: "The Matrix: Evolution",
    label: "Cracking the Genetic Code",
    description: "A journey deeper into the code—tracing human evolution, metaphysics, and the ideas that continue beyond the original story.",
    image: matrixEvolution,
    width: 1024,
    height: 1536,
    alt: "The Matrix Evolution: Cracking the Genetic Code by Sophia Stewart concept cover",
  },
];

const stats = [
  ["14,500/month", "Website traffic"],
  ["650,000/month", "Viral peak traffic"],
  ["130,000–3 million", "TikTok viral views"],
  ["20,000–100,000", "YouTube views per interview"],
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let animation = 0;
    let columns: number[] = [];
    const glyphs = "01アイウエオカキクケコサシスセソ";

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      columns = Array.from({ length: Math.ceil(window.innerWidth / 22) }, () => Math.random() * -50);
    };
    const draw = () => {
      if (frame % 3 === 0) {
        context.fillStyle = "rgba(3, 9, 6, 0.1)";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        context.font = '14px "Share Tech Mono", monospace';
        context.fillStyle = "rgba(0, 255, 65, 0.23)";
        columns.forEach((y, index) => {
          context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], index * 22, y * 20);
          columns[index] = y * 20 > window.innerHeight && Math.random() > 0.985 ? 0 : y + 0.7;
        });
      }
      frame += 1;
      animation = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-35" />;
}

function Index() {
  const [subscribed, setSubscribed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CodeRain />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-10 h-px bg-primary/50 shadow-[0_0_18px_var(--signal)] motion-safe:animate-[scan_9s_linear_infinite]" />

      <header className="absolute inset-x-0 top-0 z-30 border-b border-line bg-background/70 backdrop-blur-md">
        <nav aria-label="Main navigation" className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <a href="#top" className="min-w-0 font-display text-xs uppercase tracking-[0.22em] text-primary sm:text-sm">Sophia Stewart <span className="hidden text-muted-foreground sm:inline">/ The Collection</span></a>
          <a href="#books" className="shrink-0 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">Books</a>
        </nav>
      </header>

      <main id="top" className="relative z-20">
        <section className="relative flex min-h-[88svh] items-end border-b border-line px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:min-h-[92svh] lg:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center gap-3 font-display text-xs uppercase tracking-[0.24em] text-primary">
              <span className="h-2 w-2 bg-primary motion-safe:animate-[signal-pulse_2.4s_ease-in-out_infinite]" />
              The Sophia Stewart Collection
            </div>
            <h1 className="max-w-5xl font-display text-[clamp(2.8rem,8vw,7rem)] uppercase leading-[0.92] tracking-[0.01em] text-foreground">
              The Truth Behind <span className="text-primary">The Matrix</span> &amp; The Terminator
            </h1>
            <div className="mt-9 grid max-w-5xl gap-8 border-t border-line pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">The original screenplay that inspired one of the biggest franchises in film history — by Sophia Stewart.</p>
              <a href="#books" className="inline-flex h-12 w-fit items-center gap-3 border border-primary bg-primary px-6 font-display text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary">Explore the Books <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-title" className="border-b border-line bg-background/92 px-5 py-20 backdrop-blur-sm sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <div><p className="font-display text-xs uppercase tracking-[0.22em] text-primary">01 / The author</p><h2 id="about-title" className="mt-4 font-display text-3xl uppercase sm:text-4xl">A writer shaped by story and cinema.</h2></div>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl">Sophia Stewart earned a Bachelor of Arts in journalism from the City University of New York, with minors in law and psychology. She later studied cinema at the University of Southern California and began writing professionally in the early 1980s.</p>
              <a href="https://www.truthaboutmatrix.com/about" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.14em] text-primary hover:text-signal-soft">Read the full story <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section id="books" aria-labelledby="books-title" className="scroll-mt-10 bg-ink px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-5 border-b border-line pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div><p className="font-display text-xs uppercase tracking-[0.22em] text-primary">02 / Book store</p><h2 id="books-title" className="mt-4 font-display text-4xl uppercase sm:text-5xl">Read the source.</h2></div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">Three works. One uncompromising creative vision.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {books.map((book, index) => (
                <article key={book.title} className="group flex min-w-0 flex-col border border-line bg-panel p-4 transition-colors hover:border-primary/60 sm:p-5">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <span className="absolute left-3 top-3 z-10 border border-line bg-background/85 px-2 py-1 font-display text-[10px] tracking-[0.18em] text-primary backdrop-blur">0{index + 1}</span>
                    <img src={book.image} alt={book.alt} loading="lazy" width={book.width} height={book.height} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" />
                  </div>
                  <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-primary">{book.label}</p>
                    <h3 className="mt-3 font-display text-2xl uppercase leading-tight">{book.title}</h3>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{book.description}</p>
                    <a href="#affiliate-link-needed" aria-label={`View ${book.title} on Amazon; affiliate link needed`} className="mt-7 inline-flex h-11 items-center justify-between border border-line px-4 font-display text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary">View on Amazon <ArrowIcon /></a>
                    <span className="mt-2 font-display text-[10px] tracking-[0.1em] text-muted-foreground">[AFFILIATE_LINK_HERE]</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="impact-title" className="border-y border-line bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <p className="font-display text-xs uppercase tracking-[0.22em] opacity-70">03 / Digital impact</p>
            <h2 id="impact-title" className="sr-only">Audience and impact statistics</h2>
            <dl className="mt-8 grid grid-cols-2 border-l border-primary-foreground/25 lg:grid-cols-4">
              {stats.map(([value, label]) => <div key={label} className="border-b border-r border-primary-foreground/25 p-5 sm:p-7 lg:border-b-0"><dt className="font-display text-[clamp(1.55rem,3vw,2.4rem)] leading-none">{value}</dt><dd className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] opacity-75">{label}</dd></div>)}
            </dl>
          </div>
        </section>

        <section aria-labelledby="subscribe-title" className="bg-background/95 px-5 py-20 backdrop-blur-sm sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-24">
            <div><p className="font-display text-xs uppercase tracking-[0.22em] text-primary">04 / Stay connected</p><h2 id="subscribe-title" className="mt-4 max-w-2xl font-display text-4xl uppercase leading-tight sm:text-5xl">Follow the story as it continues.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Receive news about Sophia Stewart's writing, appearances, and the continuing legacy of her work.</p></div>
            <div>
              {subscribed ? <p role="status" className="border-l-2 border-primary bg-panel p-5 font-display text-sm uppercase tracking-[0.12em] text-primary">Thank you. Your interest has been noted for this preview.</p> : <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row"><label htmlFor="email" className="sr-only">Email address</label><input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email address" className="h-12 min-w-0 flex-1 border border-input bg-panel px-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" /><button type="submit" className="h-12 shrink-0 border border-primary bg-primary px-6 font-display text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary">Subscribe</button></form>}
              <p className="mt-4 text-sm text-muted-foreground">For media and official inquiries, <a href="https://www.truthaboutmatrix.com/contact-us" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">contact Sophia's team directly.</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-20 border-t border-line bg-ink px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 text-xs leading-relaxed text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p>Fan-created promotional page. Not officially affiliated with Sophia Stewart or All Eyes On Me, INC.</p>
          <a href="https://www.truthaboutmatrix.com/" target="_blank" rel="noreferrer" className="font-display uppercase tracking-[0.12em] text-primary hover:text-signal-soft">Visit the official site ↗</a>
        </div>
      </footer>
      <div id="affiliate-link-needed" className="sr-only">Amazon affiliate links must be added before publication.</div>
    </div>
  );
}
