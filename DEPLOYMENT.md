# GitHub Pages 배포 확인

현재 이 작업 폴더에는 .git이 없습니다. 아래 명령은 실제 GitHub 저장소의 로컬 checkout에서 실행하세요.

사이트 루트(index.html과 app.js가 있는 폴더)에 assets/week07/slide-39.png부터 slide-49.png까지 11장을 모두 복사하세요. /docs를 Pages 원본으로 설정했다면 docs/assets/week07/에 복사해야 합니다. Actions를 사용한다면 upload-pages-artifact의 path에 포함되어야 합니다.

```sh
git status --short
git check-ignore assets/week07/*.png
git add app.js index.html assets/week07/
git ls-files assets/week07/
git diff --cached --stat
git commit -m "Include Week 07 slide assets and resolve URLs from app module"
git push
```

.gitignore에서 PNG 또는 assets/week07을 제외했다면 해당 제외 규칙을 수정한 뒤 다시 add하세요. git ls-files 결과에는 11장 모두가 있어야 합니다. docs 배포라면 위 경로 앞에 docs/를 붙이세요.

배포 후 <사이트 기본 URL>/assets/week07/slide-48.png 등을 직접 열어 200 응답과 이미지가 표시되는지 확인하세요. 파일을 저장소에 추가했더라도 Pages 원본 폴더 또는 Actions artifact에 없으면 배포에 포함되지 않습니다.

슬라이드 원본과 순서는 변경하지 않습니다. WEEK 07 렌더러는 app.js의 URL을 기준으로 이미지 URL을 계산하므로 GitHub Pages의 저장소 하위 경로를 보존합니다.

## 2026-10-14 실제 배포 진단

https://chooijian.github.io/Data_jianchoi/ 의 weeks.js는 11개 slide 경로를 참조하지만, 공개 저장소 assets/week07은 존재하지 않고 모든 slide-39.png~slide-49.png 요청이 HTTP 404입니다. 원인은 배포 asset 누락입니다. 경로/확장자/대소문자 문제는 로컬에서 발견되지 않았습니다.

week07-deployment-fix.zip을 풀어 저장소 루트에 덮어쓰면 assets/week07/ 및 최신 app.js, index.html, weeks.js가 포함됩니다. ZIP 자체만 업로드하면 안 됩니다. GitHub 저장소에는 압축을 푼 개별 파일을 추가해야 합니다. 코드 수정만으로 서버에 없는 이미지가 생성되지는 않습니다.
