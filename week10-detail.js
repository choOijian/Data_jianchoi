import { motifSteps } from './week10-motif.js';

export function week10Detail(w, { escape: e, navigation }) {
  const c = w.content;
  const section = (label, body, id = '') => `<section class="detail-section"${id ? ` id="${id}" tabindex="-1"` : ''}><h2>${label}</h2><div>${body}</div></section>`;
  const heading = title => `<h3>${e(title)}</h3>`;
  const p = text => `<p>${e(text)}</p>`;
  const definitions = entries => `<dl class="week10-definitions">${entries.map(([label, text]) => `<div><dt>${e(label)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`;
  const table = ([headers, ...rows], label) => `<div class="week10-table" tabindex="0" role="region" aria-label="${e(label)}"><table><thead><tr>${headers.map(h => `<th scope="col">${e(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(([first, ...cells]) => `<tr><th scope="row">${e(first)}</th>${cells.map(cell => `<td>${e(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const number = i => String(i + 1).padStart(2, '0');
  const id = i => `week10-section-${number(i)}`;
  const labels = ['FEEDBACK', 'INFORMATION STRUCTURE', 'INFORMATION HIERARCHY', 'BENCHMARK', 'DATA COLLECTION', 'DESIGN MOTIF', 'VISUAL STUDY', 'BENCHMARKING', 'OBSERVATION'];
  const titles = [...c.titles.slice(0, 4), '꽃 정보 데이터 수집', '디자인 모티브 탐색', c.titles[4], '데이터 시각화 벤치마킹', c.titles[5]];
  const visualStudies = [
    ['WEBSITE', '웹사이트 데이터 시각화', '꽃의 사용 및 순환 과정, 절화 수명, 관리 조건, 상태별 활용 방법, 회수 및 배포 현황 등을 웹사이트에서 전달하기 위한 시각화 방식을 탐색했다.', 'website', [3123,1488,81,320,2961,940]],
    ['PICKUP STATION', '셀프픽업스테이션 정보 시각화', '꽃다발의 의미와 수령 가능 수량을 직관적으로 전달하기 위해 꽃말, 꽃다발 조합, 수량 표시 방식 등을 시각화했다.', 'pickup-station', [1829,1321,340,232,1148,857]],
    ['FLOWER TAG', '꽃다발 정보 태그 시각화', '꽃다발을 구성하는 꽃의 종류와 꽃말, 관리에 필요한 핵심 정보를 작은 태그에서도 쉽게 이해할 수 있도록 시각화 방식을 탐색했다.', 'flower-tag', [2257,1321,252,231,1753,860]]
  ];
  const visualStudy = ([medium, title, text, slug, [width,height,x,y,cropWidth,cropHeight]], i) =>
    `<section class="week10-medium week10-visual-study"><span>${number(i)} / ${medium}</span><h4>${e(title)}</h4>${p(text)}<figure style="--sketch-width:${cropWidth / 2961 * 100}%"><a href="assets/week10/visual-study-${slug}.png" target="_blank" rel="noopener" aria-label="${e(title)} 원본 크게 보기"><img src="assets/week10/visual-study-${slug}-web.png" alt="${e(title)} 스케치" width="${cropWidth}" height="${cropHeight}" loading="lazy" decoding="async"></a></figure></section>`;
  const bodies = [
    p('중간발표 피드백의 쟁점을 여섯 가지로 나누고, 각 쟁점을 서비스 설계에 어떻게 반영할지 정리했다.') + table([['구분','피드백 내용','발전 방향'], ...c.feedback], '피드백과 발전 방향') + `<blockquote>${e(c.direction)}</blockquote>`,
    p(c.structure) + definitions([['주요 데이터','꽃 종류, 꽃말, 절화 수명, 관리 방법, 꽃 조합, 활용 방법'],['정보 분류','주요 정보(Primary), 보조 정보(Secondary)'],['사용자 경험','서비스 신청 → 정보 탐색 → 꽃 선택 및 수령 → 관리 → 결과 확인']]) + p('이 분류를 바탕으로 웹사이트, 셀프픽업스테이션, 꽃 정보 태그에 서로 다른 정보 전달 역할을 부여했다.'),
    p(c.hierarchy) + c.media.map((m,i) => `<section class="week10-medium"><span>${number(i)} / ${e(m.name)}</span><h4>${e(m.ko)}</h4>${definitions(m.summary)}<h5>내부 정보 위계</h5>${table(m.table, m.ko + ' 내부 정보 위계')}</section>`).join(''),
    p(c.benchmark),
    p(c.study) + visualStudies.map(visualStudy).join('') + c.sketches.map(([name,text],i) => `<div class="week10-sketch"><h4><span>${number(i)}</span> ${e(name)}</h4>${p(text)}</div>`).join(''),
    `<blockquote>${e(c.observation[0])}</blockquote>` + p(c.observation[1])
  ];
  const motifStep = (step, i) => {
    const [x,y,cropWidth,cropHeight] = step.crop;
    return `<section class="week10-motif-step"><span>${number(i)} / ${e(step.english)}</span><h4>${e(step.title)}</h4>${p(step.description)}
      <a class="week10-motif-image" href="${e(step.image)}" target="_blank" rel="noopener" aria-label="${e(step.title)} 원본 크게 보기" style="aspect-ratio:${cropWidth}/${cropHeight}"><img src="${e(step.image)}" alt="${e(step.title)} 조사 자료" width="${step.width}" height="${step.height}" loading="lazy" decoding="async" style="width:${step.width/cropWidth*100}%;left:${-x/cropWidth*100}%;top:${-y/cropHeight*100}%"></a>
      ${step.english === 'COLOR STUDY' ? '<p class="week10-color-codes">#DBE198 · #BDBD68 · #29300B · #F3D7DC · #93201B</p>' : ''}
    </section>`;
  };
  bodies.splice(4, 0, motifStep(motifSteps[0], 0), motifSteps.slice(1).map((step, i) => motifStep(step, i + 1)).join(''));
  const benchmarkGroups = [
    ['관련 주제 정보 시각화 사례', '꽃과 순환, 절화 수명 및 관리 정보 등 프로젝트 주제와 직접적으로 연결되는 시각화 사례를 조사했다.', 'related'],
    ['비관련 주제 정보 시각화 사례', '꽃과 직접적인 관련은 없지만, 수치 비교와 정보 분류 등 시각화 방식에서 참고할 수 있는 사례를 조사했다.', 'unrelated']
  ];
  const benchmarking = p('데이터 시각화의 표현 방식을 구체화하기 위해 관련 주제와 비관련 주제의 디자인 사례를 조사했다. 각 사례의 정보 전달 방식과 시각적 특징, 한계를 비교하고 이를 프로젝트에 적용할 수 있는 방향을 탐색했다.') + benchmarkGroups.map(([title,text,slug],i) => `<section class="week10-benchmark-group"><h4>${number(i)} / ${e(title)}</h4>${p(text)}<div class="week10-benchmark-grid">${[1,2,3].map(n => `<figure><a href="assets/week10/benchmarking-${slug}-${n}.png" target="_blank" rel="noopener" aria-label="${e(title)} ${n} 원본 크게 보기"><img src="assets/week10/benchmarking-${slug}-${n}.png" alt="${e(title)} ${n}: 정보 전달 방식, 시각적 특징, 한계 및 프로젝트 적용 분석" width="1272" height="1532" loading="lazy" decoding="async"></a></figure>`).join('')}</div></section>`).join('');
  bodies.splice(7, 0, p(c.benchmark) + benchmarking);
  // Consolidate the earlier overview into the detailed benchmarking section.
  titles.splice(3, 1);
  labels.splice(3, 1);
  bodies.splice(3, 1);
  return `<article class="page detail week10-detail"><a class="back" href="#archive">Back to archive</a><header class="detail-header"><span>WEEK 10</span><h1>${e(w.title)}</h1></header>${navigation}
    ${section('OVERVIEW', p(c.overview))}
    ${section('CONTENTS', `<nav class="week10-contents" aria-label="WEEK 10 목차">${titles.map((title,i) => `<a href="#${id(i)}"><span>${number(i)}</span>${e(title)}</a>`).join('')}</nav>`)}
    ${titles.map((title,i) => section(`${number(i)} / ${labels[i]}`, heading(title) + bodies[i], id(i))).join('')}
    <div class="detail-next"><a href="#week/09">Week 09</a><a href="#archive">All weeks</a></div></article>`;
}
