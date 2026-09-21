(function () {
  'use strict';

  // [name, blurb, tag, githubUrl, imagePath]
  // Point githubUrl at each project's repo, and imagePath at a screenshot in assets/projects/
  // (leave imagePath '' to keep the placeholder pattern).
  const PROJECTS = [
    ['SIM Mortality', 'ETL pipeline of death records from Brazil national mortality registry, focused on maternal and infant mortality trends over the decade.', 'Python · SQLite · Power BI', 'https://github.com/anxmarks/sim-mortality-etl', 'assets/projects/sim-mortality.avif'],
    ['Sweet Cost', 'A mobile app for pastry shops that calculates the cost and selling price of their products—from purchased ingredients to the final recipe price—accounting for raw materials, labor, packaging, and the studios fixed costs.', 'JavaScript · TypeScript · CSS', 'https://github.com/anxmarks/sweet-cost', 'assets/projects/sweet-cost.jpg'],
    ['Reel Rate', 'ReelRate is a web application for movie lovers that combines an extensive film catalog with community ratings. Users explore new releases, view individual title pages, and record their opinions—including a rating and a comment—creating a collective reference for each film.', 'JavaScript · TypeScript · CSS', 'https://github.com/anxmarks/ReelRate-ver2', 'assets/projects/reel-rate.jpg'],
    ['Chocolate Sales Analysis', 'This project performs a comprehensive analysis of a chocolate sales database, integrating data processing with Python and creating an executive dashboard in Tableau. The main objective is to extract strategic insights related to revenue performance, product efficiency, and regional sales distribution.', 'Python · Tableau', 'https://github.com/anxmarks/chocolate-sales', 'assets/projects/chocolate-sales.jpg']
   
  ];

  const SKILLS = [
    ['Python', 'pandas, NumPy, matplotlib. My default place to think.', 'Daily', 'python', '#F07CB8'],
    ['SQL', 'Joins, window functions, and queries that finish before lunch.', 'Daily', 'db', '#8E6FC4'],
    ['Power BI & Tableau', 'Dashboards that stakeholders can actually navigate alone.', 'Confident', 'bars', '#4FA8E0'],
    ['Statistics', 'A/B tests, regression, and knowing when not to trust a p-value.', 'Confident', 'pie', '#F5A03C'],
    ['Excel', 'Pivot tables, Power Query, and a slightly worrying love of shortcuts.', 'Fluent', 'sheet', '#6BC08A'],
    ['Storytelling', 'Turning a model into three sentences a manager remembers.', 'Favourite', 'net', '#D4468C']
  ];

  // Petal/center pairs for the seam between About and Projects — deliberately
  // far from the section backgrounds (#F5A9C0 pink, #C9A7F0 purple) so the
  // flowers read as objects sitting on top, not camouflage.
  const SEAM_FLOWERS = [
    ['#A8D8FF', '#FFFFFF'],
    ['#BEE55C', '#FFF9B0'],
    ['#FFE066', '#FF9EB5'],
    ['#9AC8EB', '#FFFFFF'],
    ['#ED82FF', '#FFF3D0'],
    ['#B8D555', '#FFFFFF'],
    ['#F6E4B9', '#ED82FF'],
    ['#A7BFE3', '#FFF6E0'],
    ['#E8C4C4', '#FFFFFF'],
    ['#FFE066', '#F07CB8']
  ];
  const SEAM_SIZES = [52, 88, 66, 104, 74, 58, 96, 68, 110, 80];

  function svgTag(inner, viewBox) {
    return '<svg viewBox="' + viewBox + '" xmlns="http://www.w3.org/2000/svg" style="display:block">' + inner + '</svg>';
  }

  function flowerSVG(petal, center) {
    const angles = [0, 60, 120, 180, 240, 300];
    const petals = angles.map(a => `<ellipse cx="50" cy="26" rx="13" ry="22" fill="${petal}" transform="rotate(${a} 50 50)"/>`).join('');
    return svgTag(petals + `<circle cx="50" cy="50" r="13" fill="${center}"/>`, '0 0 100 100');
  }

  function beeSVG(body) {
    body = body || '#F5C446';
    const inner =
      `<ellipse cx="30" cy="42" rx="12" ry="9" fill="#9FD0F5" opacity=".75"/>` +
      `<ellipse cx="50" cy="42" rx="12" ry="9" fill="#9FD0F5" opacity=".75"/>` +
      `<ellipse cx="40" cy="34" rx="22" ry="15" fill="${body}" stroke="#3A2A44" stroke-width="2"/>` +
      `<rect x="32" y="21" width="7" height="26" rx="3" fill="#3A2A44"/>` +
      `<rect x="45" y="23" width="7" height="22" rx="3" fill="#3A2A44"/>` +
      `<circle cx="62" cy="32" r="3" fill="#3A2A44"/>`;
    return svgTag(inner, '0 0 80 60');
  }

  function iconSVG(kind, bg) {
    const base = `<rect x="0" y="0" width="60" height="60" rx="18" fill="${bg}"/>`;
    let shapes = '';
    if (kind === 'bars') {
      shapes = `<rect x="15" y="32" width="7" height="14" rx="3" fill="#fff"/><rect x="26" y="22" width="7" height="24" rx="3" fill="#fff"/><rect x="37" y="27" width="7" height="19" rx="3" fill="#fff"/>`;
    } else if (kind === 'db') {
      shapes = `<ellipse cx="30" cy="20" rx="14" ry="5.5" fill="#fff"/><rect x="16" y="20" width="28" height="18" fill="#fff"/><ellipse cx="30" cy="38" rx="14" ry="5.5" fill="#fff"/><ellipse cx="30" cy="28" rx="14" ry="5" fill="${bg}"/>`;
    } else if (kind === 'python') {
      shapes = `<circle cx="23" cy="24" r="8" fill="#fff"/><circle cx="37" cy="36" r="8" fill="#fff"/><rect x="19" y="20" width="22" height="8" rx="4" fill="#fff"/><rect x="19" y="32" width="22" height="8" rx="4" fill="#fff"/>`;
    } else if (kind === 'sheet') {
      shapes = `<rect x="16" y="15" width="28" height="30" rx="5" fill="#fff"/><rect x="20" y="22" width="20" height="3" rx="1.5" fill="${bg}"/><rect x="20" y="29" width="20" height="3" rx="1.5" fill="${bg}"/><rect x="20" y="36" width="12" height="3" rx="1.5" fill="${bg}"/>`;
    } else if (kind === 'pie') {
      shapes = `<circle cx="30" cy="30" r="15" fill="#fff"/><path d="M30 30 L30 15 A15 15 0 0 1 45 30 Z" fill="${bg}"/>`;
    } else {
      shapes = `<circle cx="22" cy="24" r="5" fill="#fff"/><circle cx="39" cy="20" r="5" fill="#fff"/><circle cx="34" cy="40" r="5" fill="#fff"/><path d="M22 24 L39 20 M39 20 L34 40 M22 24 L34 40" stroke="#fff" stroke-width="2.5"/>`;
    }
    return svgTag(base + shapes, '0 0 60 60');
  }

  const FLOWERS = {
    a: flowerSVG('#FFF3D0', '#F5A03C'),
    b: flowerSVG('#F5A9C0', '#FFF3D0'),
    c: flowerSVG('#C9A7F0', '#FBEFB0')
  };
  const BEES = { plain: beeSVG(), warm: beeSVG('#FFF3D0') };

  document.querySelectorAll('[data-flower]').forEach(el => {
    el.innerHTML = FLOWERS[el.dataset.flower] || '';
  });
  document.querySelectorAll('[data-bee]').forEach(el => {
    el.innerHTML = BEES[el.dataset.bee] || '';
  });

  const band = document.getElementById('flowerBand');
  function buildSeam() {
    if (!band) return;
    band.innerHTML = '';
    const overlap = 34; // px trimmed from each flower's footprint via negative margin
    const targetWidth = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0, 1200) * 1.4;
    let total = 0;
    let i = 0;
    while (total < targetWidth) {
      const size = SEAM_SIZES[i % SEAM_SIZES.length];
      const [petal, center] = SEAM_FLOWERS[i % SEAM_FLOWERS.length];
      const wrap = document.createElement('div');
      wrap.style.width = size + 'px';
      wrap.style.height = size + 'px';
      const jitter = Math.round(Math.random() * 20 - 10);
      // Random rotation: two flowers with the same rotation would both
      // show their petal gaps at the same angle, letting the seam peek
      // through right where they meet.
      const rot = Math.round(Math.random() * 360);
      wrap.style.transform = `translateY(${jitter}px) rotate(${rot}deg)`;
      // Random stacking so overlap isn't always "later in the row wins" —
      // otherwise every flower would sit on top of the one to its left.
      wrap.style.zIndex = Math.floor(Math.random() * 1000);
      wrap.innerHTML = flowerSVG(petal, center);
      band.appendChild(wrap);
      total += size - overlap;
      i++;
    }
  }
  buildSeam();
  let seamResizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(seamResizeTimer);
    seamResizeTimer = setTimeout(buildSeam, 150);
  });

  const projectsIntro = document.getElementById('projectsIntro');
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    const count = PROJECTS.length;
    if (projectsIntro) {
      projectsIntro.textContent = count + (count === 1 ? ' thing' : ' things') + ' I built, broke, and rebuilt. Hover one to have a look.';
    }
    PROJECTS.forEach(([name, blurb, tag, link, image]) => {
      const card = document.createElement('a');
      card.className = 'project-card';
      card.href = link;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.innerHTML =
        `<div class="project-shot">${image ? `<img src="${image}" alt="${name} screenshot">` : 'project shot'}</div>` +
        `<div class="project-title-row"><span class="dot"></span><h3></h3></div>` +
        `<p></p>` +
        `<span class="project-tag"></span>`;
      card.querySelector('h3').textContent = name;
      card.querySelector('p').textContent = blurb;
      card.querySelector('.project-tag').textContent = tag;
      projectsGrid.appendChild(card);
    });
  }

  const skillsList = document.getElementById('skillsList');
  if (skillsList) {
    SKILLS.forEach(([name, detail, level, iconKind, color]) => {
      const row = document.createElement('div');
      row.className = 'skill-row';
      row.innerHTML =
        `<div class="skill-icon"></div>` +
        `<div class="skill-text"><h3></h3><p></p></div>`;
      row.querySelector('.skill-icon').innerHTML = iconSVG(iconKind, color);
      row.querySelector('h3').textContent = name;
      row.querySelector('p').textContent = detail;
      skillsList.appendChild(row);
    });
  }

  const revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

  const photoStack = document.getElementById('photoStack');
  const cardA = document.getElementById('cardA');
  const cardB = document.getElementById('cardB');
  let front = 0;
  let animating = false;
  function applyPose(phase) {
    const cards = [cardA, cardB];
    cards.forEach((card, idx) => {
      card.classList.remove('pose-front', 'pose-back', 'pose-lift');
      const isFront = idx === front;
      if (isFront) {
        if (phase === 'lift') card.classList.add('pose-lift');
        else if (phase === 'behind') card.classList.add('pose-back');
        else card.classList.add('pose-front');
      } else {
        if (phase === 'behind') card.classList.add('pose-front');
        else card.classList.add('pose-back');
      }
    });
  }
  applyPose(null);
  if (photoStack) {
    photoStack.addEventListener('click', () => {
      if (animating) return;
      animating = true;
      applyPose('lift');
      setTimeout(() => applyPose('behind'), 300);
      setTimeout(() => {
        front = front ? 0 : 1;
        applyPose(null);
        animating = false;
      }, 560);
    });
  }

  const contactForm = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  if (contactForm) {
    const sendBtnDefaultText = sendBtn.textContent;
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      sendBtn.textContent = 'Sending…';
      sendBtn.disabled = true;
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Request failed');
        sendBtn.textContent = 'Sent! Talk soon ♡';
        contactForm.reset();
      } catch (err) {
        sendBtn.textContent = 'Oops, try again';
        sendBtn.disabled = false;
        setTimeout(() => { sendBtn.textContent = sendBtnDefaultText; }, 2500);
      }
    });
  }
})();
