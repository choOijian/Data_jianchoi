// Missing source images remain null in week11.content.images; no placeholders or substitutes.
export function week11Detail(w, { escape: e, navigation }) {
  const c = w.content;
  const n = i => String(i + 1).padStart(2, '0');
  const target = i => `week11-section-${n(i)}`;
  const p = text => text ? `<p>${e(text)}</p>` : '';
  const section = (label, body, id='') => `<section class="detail-section"${id ? ` id="${id}" tabindex="-1"` : ''}><h2>${e(label)}</h2><div>${body}</div></section>`;
  const image = (key, alt, cls='') => {
    const asset = c.images[key];
    if (!asset) return '';
    if (Array.isArray(asset)) return asset.map(item => `<figure class="week11-image ${cls}"><a href="${e(item.original || item.image)}" target="_blank" rel="noopener" aria-label="${e(item.alt || alt)} 원본 크게 보기"><img src="${e(item.image)}" alt="${e(item.alt || alt)}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async"></a></figure>`).join('');
    return `<figure class="week11-image ${cls}"><a href="${e(asset.original || asset.image)}" target="_blank" rel="noopener" aria-label="${e(alt)} 원본 크게 보기"><img src="${e(asset.image)}" alt="${e(alt)}" width="${asset.width}" height="${asset.height}" loading="lazy" decoding="async"></a></figure>`;
  };
  const block = (i, title, body, cls='') => `<section class="week11-block ${cls}"><h4><span>${n(i)} / </span>${e(title)}</h4>${body}</section>`;
  const definitions = entries => `<dl class="week11-definitions">${entries.map(([name,text])=>`<div><dt>${e(name)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`;
  const bodies = [
    block(0,'피드백 분석 및 발전 방향',definitions(c.feedback)) + block(1,'디자인 모티브 탐색',image('design-motif','꽃, 폐화, 개화와 유기적인 형태의 디자인 모티브') + `<dl class="week11-keywords">${c.keywords.map(([name,text])=>`<div><dt>${e(name)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`),
    block(0,'Color System',`<div class="week11-colors">${c.colors.map(([name,hex])=>`<figure><div class="week11-swatch" style="background-color:${hex}" role="img" aria-label="${e(name)} ${hex}"></div><figcaption><span>${e(name)}</span><span>${hex}</span></figcaption></figure>`).join('')}</div><h5>${e(c.colorConcept)}</h5>${p(c.colorDescription)}`) +
    block(1,'Logo Design',p('꽃이 피어나는 유기적인 형태와 브랜드의 정체성을 고려해 PIUM의 로고를 설정했다.')+image('logo','PIUM 로고','week11-logo')) +
    block(2,'Icon System',p('웹사이트와 서비스 전반에서 필요한 기능을 직관적으로 전달하기 위해 선의 굵기와 형태를 통일한 아이콘 시스템을 제작했다.')+image('icons','검정 및 핑크 아이콘 시스템')),
    block(0,'Website Moodboard',p('꽃의 유기적인 형태, 밝은 색감, 키치한 그래픽, 인터랙티브한 정보 전달 방식을 중심으로 웹사이트의 시각적 방향을 탐색했다.')+image('website-moodboard','웹사이트 모티브 레퍼런스')) +
    block(1,'Website User Flow',p('사용자가 꽃의 순환 과정과 관리 정보를 자연스럽게 탐색할 수 있도록 주요 페이지의 연결 구조를 설계했다.')+image('website-user-flow','웹사이트 주요 콘텐츠와 사용자 이동 경로')) +
    block(2,'Website Wireframe',p('페이지별 정보 위계와 콘텐츠 배치를 구체화하고, 사용자가 정보를 탐색하는 흐름을 고려해 화면 구조를 설계했다.')+`<h5>HOME</h5>`+image('website-wireframe','웹사이트 와이어프레임')+`<h5>FLOWER GUIDE</h5>`+p(c.flowerGuideConcept)+image('flower-guide-wireframes','플라워 가이드 와이어프레임')+`<h5>MY FLOWER BACK</h5>`+p(c.myFlowerBackConcept)+image('my-flower-back-wireframes','마이 플라워 백 와이어프레임')),
    block(0,'Self Pickup Station',image('pickup-moodboard','셀프 픽업 스테이션 무드보드')+`<div class="week11-pickup-information">${c.pickupInformation.map((step,i)=>`<section class="week11-pickup-step"><h5><span>${n(i)} / </span>${e(step.title)}</h5>${(step.paragraphs || []).map(p).join('')}${step.image ? image(step.image,step.title) : ''}${step.examples ? `<h6>꽃다발 조합 예시</h6>${image(step.examples,'LOVE, JOY, THANKS, CHEER 꽃다발 조합 예시')}` : ''}</section>`).join('')}</div>`) +
    block(1,'Flower Tag',image('tag-moodboard','꽃다발 태그 무드보드')+image('bouquet-moodboard','꽃다발과 태그 적용 무드보드')+`<div class="week11-tag-pair">${image('tag-front','꽃다발 태그 앞면')}${image('tag-back','꽃다발 태그 뒷면')}</div>`+definitions([['앞면','PIUM 브랜드 · 꽃다발 조합명 · 구성 꽃의 이름 · 꽃다발이 담고 있는 의미와 메시지'],['뒷면','QR코드 · 꽃의 관리 방법을 확인하도록 안내하는 문구']])+p('꽃다발을 수령한 이후에도 꽃의 의미와 관리 정보를 확인할 수 있도록 태그의 앞면과 뒷면에 서로 다른 역할을 부여했다.')),
    block(0,'매체별 정보 전달 방향',image('touchpoint-comparison','셀프 픽업 스테이션과 꽃다발 태그의 역할 비교')+p('사용자의 이용 시점과 목적에 따라 셀프 픽업 스테이션과 꽃다발 태그의 역할을 구분했다. 스테이션에서는 꽃다발을 비교하고 선택하는 데 필요한 정보를, 태그에서는 수령 이후 꽃의 의미와 관리 정보를 제공하도록 설계했다.'))+
    block(1,'Guest User Flow',image('guest-user-flow','하객 USER FLOW')+p('셀프 픽업 스테이션에서 꽃다발을 선택하고 수령한 뒤, 태그의 QR코드를 통해 웹사이트의 관리 정보로 연결되는 하객의 이용 흐름을 설계했다. 이를 통해 오프라인에서 시작된 경험이 온라인으로 이어지도록 구성했다.')+`<p class="week11-flow-summary">스테이션 발견 → 꽃다발 비교 → 꽃다발 선택 및 수령 → 태그 확인 → QR 스캔 → 웹사이트 꽃 관리 가이드</p>`)
  ];
  return `<article class="page detail week11-detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK ${e(w.week)}</span><h1>${e(w.title)}</h1></header>${navigation}
    ${section('OVERVIEW',p(c.overview))}
    ${section('CONTENTS',`<nav class="week11-contents" aria-label="WEEK 11 목차">${c.sections.map((s,i)=>`<a href="#${target(i)}"><span>${n(i)}</span>${e(s.title)}</a>`).join('')}</nav>`)}
    ${c.sections.map((s,i)=>section(`${n(i)} / ${s.label}`,`<h3>${e(s.title)}</h3>${p(s.description)}${bodies[i]}`,target(i))).join('')}
    ${section('OBSERVATION',`<h3 class="week11-observation">${e(c.observation.statement)}</h3>${p(c.observation.description)}`)}
    <div class="detail-next"><a href="#week/10">Week 10 / 디자인 요소 발전</a><a href="#archive">All weeks</a></div></article>`;
}
