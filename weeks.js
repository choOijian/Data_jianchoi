// 새 기록은 이 배열에 추가하세요. 이미지 경로는 assets/ 또는 외부 URL을 사용할 수 있습니다.
// content: { overview, process: [{ image, caption }], topics, insight, reflection }
export const weeks = [
  {
    week: '02', title: '주제 탐색', description: '교육과 생활 속에서 발견할 수 있는\n다양한 사회적 이슈를 탐색하고 분류했다.',
    tags: ['Research', 'Education', 'Social Issues'],
    year: '2026',
    thumbnailPosition: '50% 42%',
    // Representative image and category derive from the actual detail content.
    get thumbnail() { return this.content.process[0].image; },
    get category() { return this.content.topic.title; },
    content: {
      layout: 'topic-exploration',
      overview: '5개의 큰 주제를 중심으로 우리 주변에서 발견할 수 있는 다양한 사회 이슈를 탐색했다. 나는 그중 교육과 생활을 중심으로 관련 문제를 비슷한 성격의 이슈끼리 묶어 분류하는 과정을 진행했다.',
      topic: {
        title: '교육과 생활',
        description: '교육과 일상생활 속에서 당연하게 지나치기 쉬운 불편과 사회적 문제들을 찾아보았다. 개인의 문제처럼 보이지만 사회의 구조나 환경과 연결되어 있는 현상에 집중했다.'
      },
      process: [
        { image: 'assets/week02-portrait.jpeg', caption: '교육과 생활 — 이슈를 모아 분류한 활동 기록', width: 2268, height: 4032 },
        { image: 'assets/week02-landscape.jpeg', caption: '비슷한 성격의 이슈끼리 묶어보는 과정', width: 4032, height: 3024 }
      ],
      issueCategories: [
        { title: '교육 환경', issues: ['교육 격차', '사교육 의존', '지역별 교육환경 차이', '디지털 교육 격차'] },
        { title: '청년과 대학생활', issues: ['등록금 부담', '주거비 부담', '취업 경쟁', '스펙 경쟁', '대학생 생활비 문제'] },
        { title: '디지털 생활', issues: ['스마트폰 의존', '숏폼 과몰입', '정보 과잉', '디지털 피로'] },
        { title: '생활과 소비', issues: ['배달 및 일회용품 증가', '과소비'] }
      ],
      observation: '교육과 관련된 이슈에서는 사교육과 입시 스트레스라는 키워드가 반복적으로 많이 등장했고, 우리가 교육을 생각할 때 경쟁과 부담을 자연스럽게 함께 떠올린다는 점이 인상적이었다.'
    }
  },
  {
    week: '03', title: '주제 선정', category: '환경과 생태', year: '2026',
    showArchiveMetadata: true,
    description: '판매 시기를 놓친 잉여 상품의 폐기 문제를 조사하고 관련 서비스를 벤치마킹했다.',
    tags: [],
    get thumbnail() { return this.content.research.image; },
    content: {
      layout: 'research-benchmark',
      overview: '여러 사회 이슈 중 환경과 생태를 프로젝트 주제로 선정했다. 일상에서 발생하는 폐기 문제를 조사하며, 그중 아직 사용할 수 있지만 판매 시기를 놓쳐 버려지는 상품에 주목해 문제의 범위를 구체화하고 관련 자료를 수집했다.',
      topic: {
        title: '판매 시기를 놓친 잉여 상품',
        description: '빵집, 꽃집, 식료품점 등 동네 가게에서는 수요 예측 실패, 시간 경과, 시즌 종료, 상품 상태 변화 등 다양한 이유로 판매되지 못하는 상품이 발생한다. 이러한 잉여 상품이 왜 발생하고, 언제 폐기되며, 현재는 어떻게 처리되고 있는지를 중심으로 조사했다.'
      },
      research: {
        image: 'assets/week03-research.png', // 상세와 대표 썸네일이 같은 원본을 사용합니다.
        caption: '업종별 발생 패턴 — 발생 빈도, 주요 발생 시점, 영향을 주는 요인과 실제 발생 패턴',
        title: '업종별 발생 패턴',
        description: '잉여 상품이 식품에만 국한되지 않는다는 점에 주목해, 베이커리·꽃집·문구 및 소품점·의류점·가구 및 생활용품점을 대상으로 업종별 잉여 상품의 발생 패턴을 조사했다. 업종에 따라 발생 빈도와 시점은 달랐지만, 시간 경과·시즌 변화·수요 감소·상품 교체·상태 변화 등이 공통적으로 상품의 판매 가능성을 낮추는 요인으로 나타났다.',
        items: [
          { title: '베이커리', description: '당일 판매 후 남는 재고' },
          { title: '꽃집', description: '신선도와 시즌에 따른 가치 감소' },
          { title: '문구·소품', description: '시즌 종료와 신상품 입고' },
          { title: '의류', description: '시즌 및 트렌드 변화' },
          { title: '가구·생활용품', description: '전시 종료와 상품 교체' }
        ]
      },
      benchmarking: {
        title: 'Too Good To Go',
        description: '판매되지 않은 음식을 주변 소비자에게 할인 판매하는 Too Good To Go를 벤치마킹했다. 매장에서 남은 음식을 Surprise Bag 형태로 등록하면 사용자가 앱에서 주변 매장을 탐색하고 예약·결제한 뒤 정해진 시간에 직접 픽업하는 서비스 구조를 살펴보았다.',
        features: '지도 기반 주변 가게 탐색 · 남은 수량 표시 · 픽업 가능 시간 안내 · 할인 가격 강조 · 예약부터 픽업까지 이어지는 간단한 이용 흐름',
        image: 'assets/week03-benchmarking.png', // 원본 UI 자료
        caption: 'Too Good To Go — 주변 매장 탐색부터 예약과 픽업까지의 앱 화면'
      },
      observation: {
        question: '상품의 가치가 사라진 것이 아니라, 판매할 수 있는 시간을 놓친 것은 아닐까?',
        paragraphs: [
          '조사와 벤치마킹을 통해 단순히 폐기 이후의 처리보다, 상품의 가치가 남아 있는 시간 안에 필요한 사람과 연결하는 방식이 중요하다고 보았다.',
          '또한 Too Good To Go처럼 사용자가 환경적 행동을 의식적으로 실천해야 한다는 부담보다, 일상적인 구매 과정 자체가 자연스럽게 폐기 감소로 이어지는 구조가 인상적이었다.'
        ]
      }
    }
  },
  {
    week: '04', title: '데이터 탐색 및 수집', tags: [],
    description: '5 Why로 문제를 구조화하고 각 질문을 확인할 데이터를 정의·탐색·수집했다.',
    get thumbnail() { return this.content.fiveWhy.image; },
    content: {
      layout: 'data-collection',
      overview: '선정한 주제를 데이터로 구체화하기 위해 5 Why 방식으로 문제의 원인을 단계적으로 탐색했다. 각 질문에서 확인해야 할 내용을 정의하고, 이를 검증할 수 있는 데이터를 찾아 수집·아카이빙했다.',
      fiveWhy: {
        title: '문제 구조화',
        problem: '일상에서 많은 양의 폐기물이 발생한다.',
        questions: [
          { label: 'Why 01', question: '왜 사용되지 않은 물건까지 버려질까?', answer: '음식, 의류, 생활용품 등 다양한 물건이 사용되지 못한 채 남는다.' },
          { label: 'Why 02', question: '왜 상품 가치가 떨어지면 버려질까?', answer: '판매 시기를 놓치거나 시즌이 지나면서 상품으로서의 가치가 빠르게 떨어진다.' },
          { label: 'Why 03', question: '왜 다시 활용하기 어려울까?', answer: '아직 사용할 수 있어도 다시 판매하거나 활용할 방법을 찾기 어렵다.' },
          { label: 'Why 04', question: '왜 필요한 사람과 연결되지 않을까?', answer: '남은 물건을 필요한 사람과 쉽게 연결할 수 있는 방법이 부족하다.' }
        ],
        rootCause: '판매 가치가 남아 있는 상품의 ‘남은 쓸모’를 발견하고 연결하는 과정이 부족하다.',
        image: null, // 원본 5 Why 자료를 연결하면 Archive 썸네일도 자동 반영됩니다.
        caption: 'Problem → Why → Because → Root Cause — 문제의 원인을 단계적으로 구조화한 과정'
      },
      collection: {
        title: '수집 데이터 정의',
        description: '5 Why에서 도출한 질문을 바탕으로 각각의 문제를 실제 데이터로 확인하기 위해 어떤 데이터를 수집해야 하는지 구체화했다.',
        items: [
          { title: '01 / 폐기 규모', description: '품목별 폐기량 · 폐기 비율 · 연간 폐기 규모' },
          { title: '02 / 잉여 발생', description: '미판매량 · 재고량 · 잔여 빈도 · 처리 방식' },
          { title: '03 / 가치 변화', description: '상품별 판매 가능 기간 · 시간에 따른 상태 변화 · 가치 하락 원인' },
          { title: '04 / 남은 시간', description: '잉여 판단 시점 · 할인 시점 · 폐기 시점' },
          { title: '05 / 연결 가능성', description: '가격별 구매 가능성 · 잉여 상품 인지 정도 · 허용 이동거리 · 픽업 시간 · 판매자 등록 장벽' }
        ],
        image: null, // 원본 데이터 수집 계획 표
        caption: '연결되는 Problem / Why · 확인해야 할 것 · 수집할 데이터'
      },
      focusResearch: {
        title: 'Why 04. 연결 가능성 심층 탐색',
        description: '5 Why 중 “왜 필요한 사람과 연결되지 않을까?”에 집중해 실제 연결을 결정하는 조건을 구체적으로 조사했다. 소비자가 잉여상품을 발견하고 구매하기까지의 과정과 판매자가 상품을 등록하는 과정에서 발생하는 장벽을 중심으로 데이터를 심층적으로 수집했다.',
        groups: [
          {
            title: '01 / 새로운 쓰임의 영향', subtitle: '활용법 제공 전·후 구매의향',
            description: '판매 시기가 지난 꽃, 시즌 종료 문구·잡화, 자투리 원단 등에서 새로운 활용법을 제시했을 때 구매의향이 어떻게 변화하는지 비교했다.',
            data: [
              { label: '판매 시기가 지난 꽃', value: '32% → 61%', change: '+29%p' },
              { label: '시즌 종료 문구·잡화', value: '38% → 62%', change: '+24%p' },
              { label: '자투리 원단', value: '29% → 58%', change: '+29%p' }
            ],
            insight: '단순히 상품을 할인하는 것보다 상품의 ‘새로운 쓰임’을 발견하게 하는 정보가 구매 가능성을 높일 수 있었다.'
          },
          {
            title: '02 / 잉여상품 인지 정도', subtitle: '인지 여부 · 구매 가능성 인지 · 발견 경로',
            description: '소비자가 주변에 판매 가치가 남아 있는 잉여상품이 존재한다는 사실을 얼마나 인지하고 있는지, 그리고 이러한 상품을 어디에서 발견하는지 조사했다.',
            data: [
              { label: '상품 자체 인지', value: '84%' },
              { label: '구매 가능성 인지', value: '68%' },
              { label: '상품 위치 인지', value: '29%' }
            ],
            insight: '상품 자체의 존재는 알고 있어도 실제로 ‘어디에서 구할 수 있는지’에 대한 정보는 부족했다.'
          },
          {
            title: '03 / 거리와 픽업 조건', subtitle: '허용 이동거리 · 허용 이동시간 · 픽업 가능 시간',
            description: '잉여상품을 직접 픽업한다는 상황을 가정하고 소비자가 감수할 수 있는 거리와 시간의 범위를 조사했다.',
            data: [
              { label: '1km 이내 이동 가능', value: '72%' },
              { label: '15분 이내 이동 선호', value: '81%' },
              { label: '당일 원하는 시간 픽업', value: '41%' }
            ],
            insight: '잉여상품은 넓은 범위에서 탐색하는 것보다 사용자의 생활권 안에서 빠르게 발견하고 픽업할 수 있도록 연결하는 것이 중요했다.'
          },
          {
            title: '04 / 판매자 등록 장벽', subtitle: '등록 과정 · 수량 예측 · 가격 설정 · 등록 시점',
            description: '판매자가 남은 상품을 직접 등록하고 판매할 때 어떤 과정에서 가장 큰 부담을 느끼는지 조사했다.',
            data: [
              { label: '반복적인 상품 등록', value: '68%' },
              { label: '등록·관리 시간 부담', value: '61%' },
              { label: '남은 상품 수량 사전 예측 어려움', value: '54%' },
              { label: '마감 1–2시간 전 등록', value: '37%' }
            ],
            insight: '소비자가 상품을 쉽게 발견하는 것뿐만 아니라, 판매자가 남은 상품을 빠르고 간단하게 등록할 수 있는 구조 역시 연결 과정에서 중요했다.'
          }
        ]
      },
      observation: {
        question: '잉여상품이 연결되지 않는 이유는 상품의 가치가 사라져서가 아니라, 남아 있는 가치를 발견하고 연결하는 과정에 여러 장벽이 존재하기 때문이었다.',
        description: '새로운 쓰임에 대한 정보는 구매 가능성을 높였으며, 실제 연결 과정에서는 상품의 발견 가능성, 생활권 내 거리와 픽업 시간, 판매자의 간편한 등록 과정이 중요한 조건으로 나타났다.'
      }
    }
  },
  {
    week: '05', title: '데이터 분석', tags: [],
    thumbnailPosition: '50% 45%',
    description: '수집한 데이터를 분류하고 꽃으로 분석 범위를 좁힌 뒤 추가 조사와 재분류를 진행했다.',
    get thumbnail() { return this.content.reclassification.image; },
    content: {
      layout: 'data-analysis',
      overview: '수집한 데이터를 5 Why의 질문과 원인에 따라 분류하고, 서로 연관된 자료를 묶어 데이터 간의 관계를 탐색했다. 분석 과정에서 잉여 상품이라는 범위가 지나치게 넓다는 점을 발견해 ‘꽃’으로 대상을 좁혔으며, 꽃의 잉여 발생과 폐기 과정에 대한 데이터를 추가 조사해 기존 자료와 다시 연결하고 재분류했다.',
      classification: {
        title: '수집 데이터 분류',
        description: '5 Why를 기준으로 수집한 자료를 배치하고, 폐기 발생 / 가치 변화 / 남은 시간 / 연결 가능성 등 서로 연관된 데이터를 묶어 관계를 살펴보았다.',
        image: 'assets/IMG_2194.jpg', caption: '5 Why를 기준으로 수집 데이터를 분류한 1차 분석'
      },
      scope: {
        title: '분석 범위 좁히기',
        description: '데이터를 분류하는 과정에서 음식, 의류, 문구, 꽃 등 잉여 상품의 종류에 따라 발생 원인과 가치가 변화하는 기준이 달라 분석 범위가 지나치게 넓다는 점을 발견했다.',
        transition: '잉여 상품 전체 → 꽃의 잉여와 폐기'
      },
      furtherResearch: {
        title: '꽃 잉여·폐기 데이터 추가 조사',
        description: '분석 대상을 꽃으로 좁힌 뒤, 꽃의 판매 가능 기간과 시간에 따른 상태 변화, 잉여 발생 원인, 폐기 시점과 폐기 기준 등을 중심으로 데이터를 추가 조사했다.',
        directions: ['01 / 판매 가능 기간', '02 / 시간에 따른 상태 변화', '03 / 잉여 발생 원인', '04 / 폐기 시점', '05 / 폐기 기준']
      },
      reclassification: {
        title: '데이터 재분류',
        description: '추가로 조사한 꽃 데이터를 기존 데이터 구조 위에 연결하고 다시 분류했다. 새로운 자료를 기존 관계 위에 덧붙이며 꽃이 판매 가능한 상품에서 잉여 상품, 그리고 폐기 대상으로 변화하는 과정을 구체화했다.',
        image: 'assets/IMG_2197.jpg', caption: '꽃 관련 데이터를 추가한 후 기존 구조를 확장한 2차 분석'
      },
      observation: {
        question: '‘무엇이 얼마나 버려지는가’보다, ‘언제부터 가치가 떨어지고 어떤 기준에서 폐기로 전환되는가’를 살펴볼 필요가 있었다.',
        description: '데이터를 분류하고 범위를 좁히는 과정을 통해 단순한 폐기량보다 상품의 시간에 따른 가치 변화와 폐기로 전환되는 기준이 중요한 분석 요소라는 점을 발견했다.'
      }
    }
  }
];
