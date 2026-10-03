import { weeks } from './weeks.js';
import { profile } from './profile.js';
import { projects } from './projects.js';
import { weekNavigation } from './week-navigation.js';
const app = document.querySelector('#app');
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags = values => `<span class="tags">${values.map(escape).join(' / ')}</span>`;
const year = item => escape(item.year || '2026');
const title = text => `<h1 class="page-title"><a href="#" aria-label="${text} — Home">${text}</a></h1>`;
function contact(value, placeholder, email = false) {
  if (!value) return `<span class="placeholder">${placeholder}</span>`;
  let href;
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) href = `mailto:${value}`;
  else if (!email) { try { const url = new URL(value); if (['https:', 'http:'].includes(url.protocol)) href = url.href; } catch {} }
  return href ? `<a href="${escape(href)}"${email ? '' : ' target="_blank" rel="noopener noreferrer"'}>${escape(!email && value === profile.instagram ? new URL(value).pathname.split('/').filter(Boolean)[0] : value)}</a>` : `<span>${escape(value)}</span>`;
}
const identity = () => `<p>${escape(profile.name)}<br>${escape(profile.field)}<br>${escape(profile.university)}<br>${escape(profile.studentId || '[학번 입력]')}</p>`;
function home() {
  app.innerHTML = `<section class="home"><h1 class="home-title">JIAN<br>ARCHIVE</h1><div class="home-information"><section><h2>ABOUT</h2>${identity()}</section><section><h2>CONTACT</h2><p>Email<br>${contact(profile.email, '[이메일 입력]', true)}</p><p>Instagram<br>${contact(profile.instagram, '[선택 입력]')}</p></section></div></section>`;
}
function archive() {
  app.innerHTML = `<section class="page archive-page"><div class="archive-container">${title('ARCHIVE')}${weekNavigation(weeks)}<div class="record-list">${weeks.map(w => `<a class="record" href="#week/${encodeURIComponent(w.week)}" aria-label="Week ${escape(w.week)}: ${escape(w.title)}">${w.thumbnail ? `<div class="record-image"><img src="${escape(w.thumbnail)}" alt="${escape(w.title)} 작업 과정" loading="lazy"${w.thumbnailPosition ? ` style="object-position:${escape(w.thumbnailPosition)}"` : ''}></div>` : ''}<header class="record-information"><span>WEEK ${escape(w.week)}</span><h2>${escape(w.title)}</h2></header></a>`).join('')}</div></div></section>`;
}
function work() {
  app.innerHTML = `<section class="page work-page">${title('WORK')}<div class="record-list">${projects.length ? projects.map(p => `<a class="record" href="#project/${encodeURIComponent(p.id)}" aria-label="${escape(p.title)}"><div class="record-image"><img src="${escape(p.thumbnail)}" alt="${escape(p.title)}" loading="lazy"></div><div class="record-information"><div><h2>${escape(p.title)}</h2><span>${escape(p.category)}</span></div><span>${year(p)}</span></div></a>`).join('') : '<p class="empty-state">완성된 개인 프로젝트가 추가될 공간입니다.</p>'}</div></section>`;
}
function about() {
  app.innerHTML = `<section class="page about-page">${title('ABOUT')}<div class="about-information"><div>${identity()}<p>${escape(profile.location)}</p></div><div><p>Email<br>${contact(profile.email, '[이메일 입력]', true)}</p><p>Instagram<br>${contact(profile.instagram, '[선택 입력]')}</p><p>Portfolio<br>${contact(profile.portfolio, '[포트폴리오 주소 입력]')}</p></div></div></section>`;
}
function detail(w) {
  if (w.content.layout === 'data-analysis') { dataAnalysisDetail(w); return; }
  if (w.content.layout === 'data-collection') { dataCollectionDetail(w); return; }
  if (w.content.layout === 'research-benchmark') { researchDetail(w); return; }
  if (w.content.layout === 'topic-exploration') { topicDetail(w); return; }
  const c = w.content; const next = weeks[(weeks.indexOf(w)+1)%weeks.length];
  app.innerHTML = `<article class="page detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK ${escape(w.week)}</span><h1>${escape(w.title)}</h1></header>${weekNavigation(weeks, w.week)}<img class="detail-lead" src="${escape(w.thumbnail)}" alt="${escape(w.title)} 대표 이미지"><section class="detail-section"><h2>Overview</h2><p>${escape(c.overview)}</p></section><section class="detail-section"><h2>Process</h2><div class="process-images">${c.process.map(p => `<figure><img src="${escape(p.image)}" alt="${escape(p.caption)}" loading="lazy"><figcaption>${escape(p.caption)}</figcaption></figure>`).join('')}</div></section><section class="detail-section"><h2>Topics</h2>${tags(c.topics)}</section><section class="detail-section"><h2>Insight</h2><p>${escape(c.insight)}</p></section><section class="detail-section"><h2>Reflection</h2><p>${escape(c.reflection)}</p></section><div class="detail-next"><a href="#archive">All weeks</a><a href="#week/${encodeURIComponent(next.week)}">Week ${escape(next.week)} / ${escape(next.title)}</a></div></article>`;
}
function topicDetail(w) {
  const c = w.content;
  const next = weeks[(weeks.indexOf(w) + 1) % weeks.length];
  app.innerHTML = `<article class="page detail week02-detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK ${escape(w.week)}</span><h1>${escape(w.title)}</h1></header>${weekNavigation(weeks, w.week)}<section class="detail-section"><h2>OVERVIEW</h2><p>${escape(c.overview)}</p></section><section class="detail-section week02-topic"><h2>TOPIC</h2><div><h3>${escape(c.topic.title)}</h3><p>${escape(c.topic.description)}</p></div></section><div class="week02-photos">${c.process.map(p => `<figure><img src="${escape(p.image)}" width="${p.width}" height="${p.height}" alt="${escape(p.caption)}"><figcaption>${escape(p.caption)}</figcaption></figure>`).join('')}</div><section class="detail-section"><h2>ISSUE CATEGORIES</h2><div class="week02-categories">${c.issueCategories.map(category => `<div><h3>${escape(category.title)}</h3><p>${category.issues.map(escape).join(' · ')}</p></div>`).join('')}</div></section><section class="detail-section week02-observation"><h2>OBSERVATION</h2><p>${escape(c.observation)}</p></section><div class="detail-next"><a href="#archive">All weeks</a><a href="#week/${encodeURIComponent(next.week)}">Week ${escape(next.week)} / ${escape(next.title)}</a></div></article>`;
}
const researchFigure = data => data.image ? `<figure class="week03-research-image"><img src="${escape(data.image)}" alt="${escape(data.caption)}"><figcaption>${escape(data.caption)}</figcaption></figure>` : '';
function researchDetail(w) {
  const c = w.content;
  const next = weeks[(weeks.indexOf(w) + 1) % weeks.length];
  app.innerHTML = `<article class="page detail week03-detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK ${escape(w.week)}</span><h1>${escape(w.title)}</h1></header>${weekNavigation(weeks, w.week)}<section class="detail-section"><h2>OVERVIEW</h2><p>${escape(c.overview)}</p></section><section class="detail-section"><h2>TOPIC</h2><div><h3>${escape(c.topic.title)}</h3><p>${escape(c.topic.description)}</p></div></section><section class="detail-section"><h2>RESEARCH</h2><div><h3>${escape(c.research.title)}</h3><p>${escape(c.research.description)}</p><h4>KEY FINDINGS</h4><div class="week03-findings">${c.research.items.map(item => `<p><span>${escape(item.title)}</span> ${escape(item.description)}</p>`).join('')}</div></div></section>${researchFigure(c.research)}<section class="detail-section"><h2>BENCHMARKING</h2><div><h3>${escape(c.benchmarking.title)}</h3><p>${escape(c.benchmarking.description)}</p><h4>KEY FEATURES</h4><p>${escape(c.benchmarking.features)}</p></div></section>${researchFigure(c.benchmarking)}<section class="detail-section week03-observation"><h2>OBSERVATION</h2><div><h3>${escape(c.observation.question)}</h3>${c.observation.paragraphs.map(p => `<p>${escape(p)}</p>`).join('')}</div></section><div class="detail-next"><a href="#archive">All weeks</a><a href="#week/${encodeURIComponent(next.week)}">Week ${escape(next.week)} / ${escape(next.title)}</a></div></article>`;
}
function focusResearchSection(focus) {
  if (!focus) return '';
  return `<section class="detail-section week04-focus"><h2>FOCUS RESEARCH</h2><div><h3>${escape(focus.title)}</h3><p>${escape(focus.description)}</p><div class="focus-groups">${focus.groups.map(group => `<section class="focus-group"><h4>${escape(group.title)}</h4><p class="focus-subtitle">${escape(group.subtitle)}</p><p>${escape(group.description)}</p><h5>KEY DATA</h5><dl class="focus-data">${group.data.map(item => `<div><dt>${escape(item.label)}</dt><dd>${escape(item.value)}${item.change ? `<span>${escape(item.change)}</span>` : ''}</dd></div>`).join('')}</dl><div class="focus-insight"><h5>INSIGHT</h5><p>${escape(group.insight)}</p></div></section>`).join('')}</div></div></section>`;
}
function dataCollectionDetail(w) {
  const c = w.content;
  const next = weeks[(weeks.indexOf(w) + 1) % weeks.length];
  const figure = (data, wide = false) => data.image ? `<figure class="week04-image${wide ? ' week04-image-wide' : ''}"><img src="${escape(data.image)}" alt="${escape(data.caption)}"><figcaption>${escape(data.caption)}</figcaption></figure>` : '';
  app.innerHTML = `<article class="page detail week04-detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK ${escape(w.week)}</span><h1>${escape(w.title)}</h1></header>${weekNavigation(weeks, w.week)}<section class="detail-section"><h2>OVERVIEW</h2><p>${escape(c.overview)}</p></section><section class="detail-section"><h2>5 WHY</h2><div><h3>${escape(c.fiveWhy.title)}</h3><div class="week04-steps"><div><h4>Problem</h4><p>${escape(c.fiveWhy.problem)}</p></div>${c.fiveWhy.questions.map(q=>`<div><h4>${escape(q.label)}</h4><p>${escape(q.question)}<br>→ ${escape(q.answer)}</p></div>`).join('')}<div><h4>ROOT CAUSE</h4><p>${escape(c.fiveWhy.rootCause)}</p></div></div></div></section>${figure(c.fiveWhy)}<section class="detail-section"><h2>DATA COLLECTION</h2><div><h3>${escape(c.collection.title)}</h3><p>${escape(c.collection.description)}</p><div class="week04-data">${c.collection.items.map(item=>`<div><h4>${escape(item.title)}</h4><p>${escape(item.description)}</p></div>`).join('')}</div></div></section>${figure(c.collection, true)}${focusResearchSection(c.focusResearch)}<section class="detail-section week04-observation"><h2>OBSERVATION</h2><div><h3>${escape(c.observation.question)}</h3><p>${escape(c.observation.description)}</p></div></section><div class="detail-next"><a href="#archive">All weeks</a><a href="#week/${encodeURIComponent(next.week)}">Week ${escape(next.week)} / ${escape(next.title)}</a></div></article>`;
}
function dataAnalysisDetail(w) {
  const c = w.content;
  const next = weeks[(weeks.indexOf(w) + 1) % weeks.length];
  const textSection = (label, data, extra = '') => `<section class="detail-section"><h2>${label}</h2><div><h3>${escape(data.title)}</h3><p>${escape(data.description)}</p>${extra}</div></section>`;
  const figure = data => `<figure class="week05-image"><img src="${escape(data.image)}" alt="${escape(data.caption)}"><figcaption>${escape(data.caption)}</figcaption></figure>`;
  app.innerHTML = `<article class="page detail week05-detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK ${escape(w.week)}</span><h1>${escape(w.title)}</h1></header>${weekNavigation(weeks, w.week)}<section class="detail-section"><h2>OVERVIEW</h2><p>${escape(c.overview)}</p></section>${textSection('DATA CLASSIFICATION', c.classification)}${figure(c.classification)}${textSection('SCOPE REFINEMENT', c.scope, `<p class="week05-transition">${escape(c.scope.transition)}</p>`)}${textSection('FURTHER RESEARCH', c.furtherResearch, `<ul class="week05-directions">${c.furtherResearch.directions.map(item=>`<li>${escape(item)}</li>`).join('')}</ul>`)}${textSection('RECLASSIFICATION', c.reclassification)}${figure(c.reclassification)}<section class="detail-section week05-observation"><h2>OBSERVATION</h2><div><h3>${escape(c.observation.question)}</h3><p>${escape(c.observation.description)}</p></div></section><div class="detail-next"><a href="#archive">All weeks</a><a href="#week/${encodeURIComponent(next.week)}">Week ${escape(next.week)} / ${escape(next.title)}</a></div></article>`;
}
function projectDetail(p) {
  app.innerHTML = `<article class="page detail"><a class="back" href="#work">Back to work</a><header class="detail-header"><span>${escape(p.category)}</span><h1>${escape(p.title)}</h1><span>${year(p)}</span></header><img class="detail-lead" src="${escape(p.thumbnail)}" alt="${escape(p.title)}"><div class="project-content">${p.description ? `<p>${escape(p.description)}</p>` : ''}${(p.images || []).map(i=>`<figure><img src="${escape(i.image)}" alt="${escape(i.caption || p.title)}" loading="lazy">${i.caption ? `<figcaption>${escape(i.caption)}</figcaption>`:''}</figure>`).join('')}</div></article>`;
}
function route() {
  const hash = location.hash;
  let page = 'home'; let pageTitle = 'JIAN ARCHIVE';
  if(hash === '#archive'){archive();page='archive';pageTitle='ARCHIVE';}
  else if(hash === '#work'){work();page='work';pageTitle='WORK';}
  else if(hash === '#about'){about();page='about';pageTitle='ABOUT';}
  else if(hash.startsWith('#week/')){const w=weeks.find(w=>hash===`#week/${encodeURIComponent(w.week)}`);if(w){detail(w);page='archive';pageTitle=`Week ${w.week} — ${w.title}`;}else home();}
  else if(hash.startsWith('#project/')){const p=projects.find(p=>hash===`#project/${encodeURIComponent(p.id)}`);if(p){projectDetail(p);page='work';pageTitle=p.title;}else home();}
  else home();
  document.title = pageTitle === 'JIAN ARCHIVE' ? pageTitle : `${pageTitle} | JIAN ARCHIVE`;
  document.body.dataset.page=page;
  document.querySelectorAll('.navigation nav a').forEach(a=>{if(a.hash===`#${page}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  window.scrollTo({top:0,behavior:'instant'});
}
window.addEventListener('hashchange',route);route();
