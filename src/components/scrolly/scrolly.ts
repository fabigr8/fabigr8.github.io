// Framework-free scrollytelling runtime.
//
// Convention (see ScrollyContainer.astro / ScrollyStep.astro):
//   <div data-scrolly>                         ← one story, auto-initialized
//     <div class="scrolly-graphic"> …          ← sticky column
//       <div class="scrolly-figure" data-graphic="a">…</div>
//       <div class="scrolly-figure" data-graphic="b">…</div>
//     <div class="scrolly-steps">
//       <section class="scrolly-step" data-step="a">…</section>
//       <section class="scrolly-step" data-step="b">…</section>
//
// As each step scrolls through a band around the viewport center it gets
// `.is-active`, and the matching figure (data-graphic === data-step) is shown.

export function initScrolly(root: HTMLElement): void {
  const steps = Array.from(
    root.querySelectorAll<HTMLElement>(".scrolly-step"),
  );
  const figures = Array.from(
    root.querySelectorAll<HTMLElement>(".scrolly-figure"),
  );
  if (steps.length === 0) return;

  const setActive = (id: string | undefined) => {
    if (!id) return;
    for (const s of steps) s.classList.toggle("is-active", s.dataset.step === id);
    for (const f of figures)
      f.classList.toggle("is-active", f.dataset.graphic === id);
  };

  // Show the first step's graphic before any scrolling happens.
  setActive(steps[0].dataset.step);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive((entry.target as HTMLElement).dataset.step);
      }
    },
    {
      // A thin trigger band across the vertical center of the viewport.
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    },
  );

  for (const s of steps) observer.observe(s);
}

function boot(): void {
  document
    .querySelectorAll<HTMLElement>("[data-scrolly]")
    .forEach(initScrolly);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
