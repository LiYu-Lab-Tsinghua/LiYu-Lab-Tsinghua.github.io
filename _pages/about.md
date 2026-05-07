---
permalink: /
title: "Li Yu Laboratory"
excerpt: "Exploring Migrasome Biology at Tsinghua University"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Tsinghua University · School of Life Sciences
      </div>
      <h1 class="hero-title">
        Exploring the <span class="gradient-text-inline">Migrasome</span> Frontier
      </h1>
      <p class="hero-subtitle">
        We investigate the biogenesis, function, and pathophysiological roles of migrasomes — 
        migration-dependent organelles discovered by our lab in 2014.
      </p>
      <div class="hero-actions">
        <a href="/research/" class="btn-modern btn-hero-primary">Our Research →</a>
        <a href="/members/" class="btn-modern btn-hero-secondary">Meet the Team</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-molecule">
        <div class="molecule-ring"></div>
        <div class="molecule-ring"></div>
        <div class="molecule-ring"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-dot"></div>
        <div class="molecule-center">🧬</div>
      </div>
    </div>
  </div>
</section>

<!-- Research Highlights -->
<section class="research-highlights">
  <h2 class="section-title">Research Focus</h2>
  <p class="section-desc">
    We investigate the biogenesis, function, and pathophysiological roles of migrasomes — migration-dependent organelles discovered by our lab in 2014.
  </p>
  <div class="highlights-grid">
    <div class="highlight-card animate-on-scroll delay-1">
      <div class="card-icon">&#x1F52C;</div>
      <h3>Migrasome Discovery</h3>
      <p>Discovered and named migrasomes in 2014. These migration-dependent vesicular structures mediate a novel form of intercellular communication.</p>
    </div>
    <div class="highlight-card animate-on-scroll delay-2">
      <div class="card-icon">&#x1F9EC;</div>
      <h3>Organ Morphogenesis</h3>
      <p>Revealing how migrasomes deliver signaling molecules to orchestrate zebrafish organ development with spatial precision.</p>
    </div>
    <div class="highlight-card animate-on-scroll delay-3">
      <div class="card-icon">&#x269B;&#xFE0F;</div>
      <h3>Cell Communication</h3>
      <p>Migrasomes integrate spatial, temporal, and chemical information to coordinate collective cell behaviors during development and disease.</p>
    </div>
    <div class="highlight-card animate-on-scroll delay-4">
      <div class="card-icon">&#x1F4A1;</div>
      <h3>Technology Innovation</h3>
      <p>Developing cutting-edge imaging, biochemical, and genetic tools to dissect migrasome biology at molecular resolution.</p>
    </div>
  </div>
</section>

<!-- What are Migrasomes -->
<div class="page__content" style="max-width: 900px; margin: 0 auto; padding: 80px 24px;">

  <h2 style="text-align: center; margin-bottom: 8px;">What Are Migrasomes?</h2>
  <p style="text-align: center; color: #71717A; max-width: 600px; margin: 0 auto 40px;">
    Migration-dependent organelles that serve as packets of information with specific delivery addresses
  </p>

  <p>
    Our lab discovered and named <strong>migrasomes</strong> in 2014. During cell migration, retraction fibers are pulled from the rear of migrating cells, and large vesicular structures grow on these fibers. When the cell migrates away, the retraction fibers break, leaving the vesicles behind. Since their formation depends on migration, we named these structures <em>migrasomes</em>. Cellular contents — including luminal vesicles, proteins, and mRNA — can be released from cells via migrasomes through a process we term <em>migracytosis</em>.
  </p>

  <div style="text-align: center; margin: 40px 0;">
    <video width="100%" style="max-width: 640px; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.1);" autoplay loop muted playsinline controls>
      <source src="https://liyulab-tsinghua.oss-cn-beijing.aliyuncs.com/img/migrasome.mp4" type="video/mp4">
    </video>
  </div>

  <p>
    Our recent work reveals that migrasomes play key roles in <strong>zebrafish organogenesis</strong>. Signaling molecules are packaged into migrasomes and released at defined locations, activating surrounding cells with spatiotemporal precision. In essence, a migrasome is a <strong>packet of information with a specific delivery address</strong> — mediating a novel type of cell-cell communication critical for embryonic development, immune responses, tumor metastasis, and angiogenesis.
  </p>

  <p>
    Migrasomes also participate in organelle quality control (mitocytosis), lateral transfer of cellular contents, and unconventional secretion — expanding the functional repertoire of these remarkable organelles.
  </p>

</div>

<!-- Stats Section -->
<section class="stats-section">
  <div class="stats-grid">
    <div class="stat-item animate-on-scroll delay-1">
      <div class="stat-number">50+</div>
      <div class="stat-label">Publications</div>
    </div>
    <div class="stat-item animate-on-scroll delay-2">
      <div class="stat-number">10+</div>
      <div class="stat-label">Years of Research</div>
    </div>
    <div class="stat-item animate-on-scroll delay-3">
      <div class="stat-number">30+</div>
      <div class="stat-label">Lab Members</div>
    </div>
    <div class="stat-item animate-on-scroll delay-4">
      <div class="stat-number">2014</div>
      <div class="stat-label">Year of Discovery</div>
    </div>
  </div>
</section>

<!-- Latest News -->
<section class="latest-news">
  <div class="section-header">
    <h2>Latest News</h2>
    <a href="/news/" class="view-all">View All &rarr;</a>
  </div>
  <div class="news-list">
    {% assign recent_news = site.news | sort: 'date' | reverse | limit: 3 %}
    {% for item in recent_news %}
    <div class="news-item animate-on-scroll">
      <div class="news-date">{{ item.date | date: "%B %d, %Y" }}</div>
      <h3 class="news-title">{{ item.title }}</h3>
      <p class="news-excerpt">{{ item.excerpt | strip_html | truncatewords: 30 }}</p>
    </div>
    {% endfor %}
  </div>
</section>