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
  },

  {
    course: '울산과학대학교 교직원 AI 활용 워크샵',
    title:  '교수님용 Claude AI 프롬프트 모음집',
    desc:   '복사–붙여넣기 실전 프롬프트 모음 (논문리뷰·강의계획서·Projects 등, 12쪽)',
    type:   'PDF',
    url:    'files/usc_prompts_2026.pdf',
    date:   '2026.06',
  },

  {
    course: '한국중부발전 (보령) AI 활용교육',
    title:  'AI로 일하는 방법',
    desc:   '한국중부발전 임직원 대상 AI 업무활용 강의자료 전체 (40쪽)',
    type:   'PDF',
    url:    'files/joongbu_ai_work_2026.pdf',
    date:   '2026.06',
  },

];
