# JIAN ARCHIVE

흰색 배경, 큰 제목, 작은 정보와 이미지로 구성한 개인 디자인 아카이브. 설치 및 빌드 없이 실행하는 HTML/CSS/JavaScript 사이트입니다.

## 실행

```sh
python3 -m http.server 8000
```

http://localhost:8000 에 접속하세요. ES module을 사용하므로 파일을 직접 열지 말고 HTTP 서버로 실행하세요.

## 화면

- `#`: JIAN / ARCHIVE와 하단 ABOUT · CONTACT
- `#archive`: 수업 Week 목록
- `#week/02`: Week 상세 페이지
- `#work`: 완성된 개인 프로젝트 목록
- `#project/project-name`: 프로젝트 상세 페이지
- `#about`: 개인 정보

페이지 제목을 클릭하면 홈으로 돌아갑니다. 브라우저 뒤로/앞으로 가기, 상세 링크 새로고침을 지원합니다. 상단 텍스트 메뉴는 모든 화면에서 같은 위치에 있습니다.

## 콘텐츠 수정

`profile.js`에서 이름, 전공, 학교, 위치, 학번, 이메일, Instagram과 Portfolio를 변경합니다. 미입력 연락처는 placeholder만 표시하고 빈 링크를 만들지 않습니다.

`weeks.js`의 기존 `weeks` 배열에 기록을 추가하면 목록과 상세 페이지에 반영됩니다. 현재 기록과 로컬 SVG 이미지는 예시입니다.

```js
{
  week: '06', title: 'A New Question',
  description: '활동에 대한 짧은 설명',
  tags: ['Research', 'Design'],
  thumbnail: 'assets/week06-cover.jpg',
  year: '2026', // 선택, 기본 2026
  content: {
    overview: '활동 개요',
    process: [{ image: 'assets/week06-process.jpg', caption: '과정 설명' }],
    topics: ['주제 1', '주제 2'],
    insight: '발견한 점', reflection: '회고'
  }
}
```

`projects.js`는 Week와 분리된 완성 프로젝트 데이터입니다. 아직 실제 개인 프로젝트가 제공되지 않아 비어 있습니다. 파일의 주석 예시를 참고해 추가하면 목록과 상세 페이지가 생성됩니다.

이미지 파일은 `assets/`에 넣고 경로를 지정합니다. 기존 SVG는 무채색 예시이며 새 사진에는 색상 필터를 적용하지 않습니다.

디자인은 `styles.css`, 렌더링과 페이지 이동은 `app.js`, 문서와 메뉴는 `index.html`에서 관리합니다. 외부 패키지, 폰트, 이미지 서비스 의존성은 없습니다.

## Week 선택

`week-navigation.js`의 `weekNavigation(weeks, selectedWeek)` 컴포넌트를 Archive와 Week 상세 페이지에서 공통 사용합니다. 02–15를 표시하며 등록된 기록으로 이동합니다. 미등록 Week는 숫자만 표시합니다. weeks.js에 데이터를 추가하면 자동으로 링크가 활성화되며, 15 이후의 Week도 자동으로 표시됩니다.

WEEK 02는 weeks.js의 title을 목록·상세에서 공통 사용합니다. category는 content.topic.title에서, thumbnail은 content.process 첫 이미지에서 자동으로 가져옵니다. 사진이나 주제를 수정하면 목록도 함께 바뀝니다. thumbnailPosition은 목록의 cover 크롭 위치만 조절하며 원본 파일을 변경하지 않습니다. 분류와 연도는 데이터에 보관하며 목록에는 Week와 제목만 표시합니다.
