(function () {
  const TRANSITION_MS = 350;
  let currentIndex = -1;

  const $chapter = document.getElementById("chapter");
  const $chapterNumber = document.getElementById("chapterNumber");
  const $titleZh = document.getElementById("chapterTitleZh");
  const $titleEn = document.getElementById("chapterTitleEn");
  const $textZh = document.getElementById("textZh");
  const $textEn = document.getElementById("textEn");
  const $indicator = document.getElementById("chapterIndicator");
  const $btnRandom = document.getElementById("btnRandom");
  const $btnPrev = document.getElementById("btnPrev");
  const $btnNext = document.getElementById("btnNext");

  function randomIndex(exclude) {
    if (chapters.length <= 1) return 0;
    let idx;
    do {
      idx = Math.floor(Math.random() * chapters.length);
    } while (idx === exclude);
    return idx;
  }

  function renderChapter(index) {
    const ch = chapters[index];
    $chapterNumber.textContent = `Chapter ${ch.number}`;
    $titleZh.textContent = ch.title.zh;
    $titleEn.textContent = ch.title.en;
    $textZh.textContent = ch.text.zh;
    $textEn.textContent = ch.text.en;
    $indicator.textContent = `${ch.number} / ${chapters.length}`;
    currentIndex = index;
  }

  function transitionTo(index) {
    if (index === currentIndex) return;
    $chapter.classList.add("fade-out");
    $chapter.classList.remove("fade-in");

    setTimeout(() => {
      renderChapter(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
      $chapter.classList.remove("fade-out");
      $chapter.classList.add("fade-in");
    }, TRANSITION_MS);
  }

  $btnRandom.addEventListener("click", () => {
    transitionTo(randomIndex(currentIndex));
  });

  $btnPrev.addEventListener("click", () => {
    const prev = (currentIndex - 1 + chapters.length) % chapters.length;
    transitionTo(prev);
  });

  $btnNext.addEventListener("click", () => {
    const next = (currentIndex + 1) % chapters.length;
    transitionTo(next);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") $btnPrev.click();
    if (e.key === "ArrowRight") $btnNext.click();
    if (e.key === " " || e.key === "r") {
      e.preventDefault();
      $btnRandom.click();
    }
  });

  const initial = randomIndex(-1);
  renderChapter(initial);
  $chapter.classList.add("fade-in");
})();
