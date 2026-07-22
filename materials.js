/* ══════════════════════════════════════════════════════════════
   강의실 자료 목록  —  이 파일만 고치면 강의실 내용이 바뀝니다.
   (관리자 페이지 admin.html 에서 편집 후 내려받아 덮어써도 됩니다)
   ══════════════════════════════════════════════════════════════

   [1] 암호 바꾸기
       아래 CLASSROOM_PASSWORD 의 따옴표 안 글자만 바꾸면 됩니다.

   [2] 자료 추가하기
       MATERIALS 안에 { } 한 덩어리를 복사해 붙여넣고 내용만 고치세요.

       course : 강의명 (같은 이름끼리 자동으로 묶여서 표시됩니다)
       title  : 자료 제목
       desc   : 한 줄 설명
       type   : 'PDF' | 'PPT' | 'HWP' | 'XLSX' | '링크' | '영상'
       url    : 파일 경로(files/파일이름) 또는 웹주소
       date   : 표시용 날짜

   [3] 파일 올리는 법
       ① files 폴더에 파일을 넣는다
       ② 아래 목록에 항목을 추가한다
       ③ GitHub에 올리면 자동 배포된다
   ══════════════════════════════════════════════════════════════ */

const CLASSROOM_PASSWORD = 'eduhee2026';

const MATERIALS = [

  {
    course: '청소년 진로특강 (꿈파쇼)',
    title:  '공무원 진짜 이야기 — 중학생 진로특강',
    desc:   '현직 공무원이 들려주는 진짜 직업 이야기. 강의 발표자료 전체 (32쪽)',
    type:   'PDF',
    url:    'files/youth_career_2026.pdf',
    date:   '2026.07',
  },

  {
    course: '울산과학대학교 교직원 AI 활용 워크샵',
    title:  '교직원 AI 활용교육 — 발표자료',
    desc:   '울산과학대학교 교직원 대상 AI 업무활용 워크샵 발표자료 전체 (44쪽)',
    type:   'PDF',
    url:    'files/usc_ai_workshop_2026.pdf',
    date:   '2026.06',
  },

  {
    course: '울산과학대학교 교직원 AI 활용 워크샵',
    title:  '클로드 AI 실습 자료',
    desc:   'Claude AI 실습 단계별 따라하기 자료 (47쪽)',
    type:   'PDF',
    url:    'files/usc_claude_practice_2026.pdf',
    date:   '2026.06',
    hidden: true,
  },

  {
    course: '울산과학대학교 교직원 AI 활용 워크샵',
    title:  '교수 AI 활용 — 젠스파크 제작 자료',
    desc:   '젠스파크(Genspark)로 만든 교수 대상 AI 활용 발표자료 (25쪽)',
    type:   'PDF',
    url:    'files/usc_genspark_2026.pdf',
    date:   '2026.07',
  },

  {
    course: '한국중부발전 (보령) AI 활용교육',
    title:  'AI로 일하는 방법',
    desc:   '한국중부발전 임직원 대상 AI 업무활용 강의자료 전체 (40쪽)',
    type:   'PDF',
    url:    'files/joongbu_ai_work_2026.pdf',
    date:   '2026.06',
    hidden: true,
  },

  /* ── 프롬프트 모음집 (강의안과 구분해 맨 아래 별도 섹션) ── */
  {
    course: '📋 프롬프트 모음집 (복사–붙여넣기용)',
    title:  '교수님용 Claude AI 프롬프트 모음집',
    desc:   '복사–붙여넣기 실전 프롬프트 모음 (논문리뷰·강의계획서·Projects 등, 12쪽)',
    type:   'PDF',
    url:    'files/usc_prompts_2026.pdf',
    date:   '2026.06',
    hidden: true,
  },

  {
    course: '📋 프롬프트 모음집 (복사–붙여넣기용)',
    title:  '프롬프트 탭형 메모장 (바로 열기)',
    desc:   '울산과학대 교직원 AI 활용 프롬프트를 탭으로 모아둔 웹 메모장. 클릭하면 브라우저에서 바로 열립니다.',
    type:   '웹',
    url:    'files/usc_prompt_memo.html',
    date:   '2026.07',
    hidden: true,
  },

  {
    course: '📋 프롬프트 모음집 (복사–붙여넣기용)',
    title:  '대화형 프롬프트 실습장 (바로 열기)',
    desc:   'Claude로 만든 실습형 프롬프트 페이지. 실습용 영수증 3종·인구동태 데이터가 안에 들어있어 바로 따라 해볼 수 있습니다. 클릭하면 새 창에서 열립니다.',
    type:   '웹',
    url:    'files/usc_prompt_practice.html',
    date:   '2026.07',
  },

  /* ── 바이브코딩으로 직접 만든 실습 도구 ── */
  {
    course: '🛠 직접 만든 AI 도구 (바이브코딩)',
    title:  'EduHee Cut — 웹 영상 편집기',
    desc:   '설치 없이 브라우저에서 바로 쓰는 영상 편집기. 자막·BGM·전환효과·필터 지원. 클릭하면 새 창에서 열립니다. (Chrome/Edge 권장)',
    type:   '웹',
    url:    'https://97494ac5-d81a-4f8a-a93c-628994b156cd.vip.gensparksite.com/',
    date:   '2026.07',
  },

  {
    course: '🛠 직접 만든 AI 도구 (바이브코딩)',
    title:  '울산과학대학교 2027 입학설명회 (다국어)',
    desc:   'ChatGPT로 만든 울산과학대 2027 입학홍보 웹페이지. 한국어 + 영어·중국어·베트남어 등 7개 언어 지원. 클릭하면 새 창에서 열립니다.',
    type:   '웹',
    url:    'https://ulsan-college-2027.heeya3843.chatgpt.site/',
    date:   '2026.07',
  },

];
