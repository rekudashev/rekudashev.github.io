---
layout: single
title: ""
description: ""
recent_posts: false
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap">

<style>
/* Start page, styled after the Luxembourg Apartment Price Atlas */
.home{
  --ink:#212121; --muted:#6a6a6a; --line:#e1e1e1; --soft:#f5f3ef;
  --accent:#857251; --accent-dark:#65523a;
  font-family:Lato,"Helvetica Neue",Arial,sans-serif; color:var(--ink);
}
.page__content .home p{line-height:1.6}
.home-kicker{margin:0 0 8px!important;color:var(--accent);font-size:.72rem!important;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
.page__content .home .home-title{margin:0 0 14px;padding:0;border:0;font-family:inherit;font-size:clamp(1.6rem,3.2vw,2.3rem);font-weight:700;line-height:1.12}
.page__content .home .home-lead{font-size:1.05rem;color:var(--ink);margin:0 0 .8em}
.page__content .home .home-text{font-size:.95rem;color:#3d3d3d;margin:0 0 1.6em}
.home-card{border:1px solid var(--line);border-radius:2px;background:#fff;box-shadow:0 5px 18px rgba(0,0,0,.06);margin:0 0 1.8em}
.page__content .home .home-card-img{display:block;border-bottom:1px solid var(--line);background:var(--soft);text-decoration:none}
.home-card-img img{display:block;width:100%;height:auto;margin:0}
.home-card-body{padding:clamp(16px,3vw,28px)}
.page__content .home .home-card h2{margin:0 0 10px;padding:0;border:0;font-family:inherit;font-size:clamp(1.25rem,2.2vw,1.6rem);font-weight:700;line-height:1.15}
.page__content .home .home-card p{font-size:.92rem;margin:0 0 1em}
.page__content .home .home-facts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 18px;margin:4px 0 18px;padding:0}
.home-facts div{border-top:2px solid var(--ink);padding:8px 0 0}
.page__content .home .home-facts dt{margin:0;font-size:.64rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.page__content .home .home-facts dd{margin:2px 0 0;font-size:1.05rem;font-weight:700;font-variant-numeric:tabular-nums}
.page__content .home .home-cite{font-size:.82rem!important;color:var(--muted)}
.page__content .home .home-cite a{color:var(--accent-dark)}
.home-actions{display:flex;flex-wrap:wrap;gap:8px}
.page__content .home .home-btn{display:inline-block;padding:8px 13px;border:1px solid var(--line);border-radius:2px;font-size:.85rem;font-weight:700;color:var(--accent-dark);text-decoration:none;background:#fff}
.page__content .home .home-btn:hover{border-color:var(--accent);color:var(--accent-dark)}
.page__content .home .home-btn.primary{background:var(--accent);border-color:var(--accent);color:#fff}
.page__content .home .home-btn.primary:hover{background:var(--accent-dark);border-color:var(--accent-dark);color:#fff}
.home-more{border-top:1px solid var(--line);padding-top:14px}
@media (max-width:700px){ .page__content .home .home-facts{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 18px} }
</style>

<div class="home">

<p class="home-kicker">Spatial economics · Vrije Universiteit Amsterdam</p>
<h1 class="home-title">Hello, and welcome to my website!</h1>

<p class="home-lead">I am a postdoctoral researcher at the Department of Spatial Economics at VU Amsterdam and a candidate fellow at the Tinbergen Institute.</p>

<p class="home-text">My research focuses on structural urban economics, using quantitative spatial urban models to study the economic impacts of cross-border labor mobility and taxation on housing markets, labor market outcomes, and individual well-being.</p>

<section class="home-card" aria-label="Luxembourg Apartment Price Atlas">
  <a class="home-card-img" href="/luxembourg-atlas/"><img src="/assets/images/luxembourg-atlas-preview.jpg" width="1400" height="1057" loading="lazy" alt="Preview of the Luxembourg Apartment Price Atlas: a map of apartment prices by commune in 2021 and the price path of Luxembourg City since 2007"></a>
  <div class="home-card-body">
    <p class="home-kicker">Interactive tool</p>
    <h2>Luxembourg Apartment Price Atlas</h2>
    <p>Apartment price indices for Luxembourg's communes and cadastral sections, built with the Ahlfeldt, Heblich &amp; Seidel (2023) method from land-registry sales, together with an interactive regression-discontinuity view of the price jump at the Luxembourg–Germany border.</p>
    <dl class="home-facts">
      <div><dt>Period</dt><dd>2007–2021</dd></div>
      <div><dt>Communes</dt><dd>102</dd></div>
      <div><dt>Cadastral sections</dt><dd>519</dd></div>
      <div><dt>Apartment sales</dt><dd>61,642</dd></div>
    </dl>
    <p class="home-cite">A companion to Kudashev &amp; Picard (2026), “Floorspace Price Discontinuities and Taxation in Cross-Border Commuting Areas,” <em>Journal of Urban Economics</em> 155, 103904. Data sources and credits are listed on the atlas page. The atlas will be updated as more data from the cross-border areas become available.</p>
    <div class="home-actions">
      <a class="home-btn primary" href="/luxembourg-atlas/">Open the atlas →</a>
      <a class="home-btn" href="https://doi.org/10.1016/j.jue.2026.103904">Published paper</a>
      <a class="home-btn" href="https://hdl.handle.net/10993/66030">Working paper</a>
    </div>
  </div>
</section>

<div class="home-more">
<p class="home-text">Feel free to explore the site, and if you’d like to know more about my work, you can also check out my research and my CV.</p>
<div class="home-actions">
  <a class="home-btn" href="/research/">Research</a>
  <a class="home-btn" href="/assets/files/CV_2025.pdf">CV</a>
</div>
</div>

</div>
