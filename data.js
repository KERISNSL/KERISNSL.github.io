/* ============================================================
   KERI SNSL 홈페이지 내용 파일
   ------------------------------------------------------------
   홈페이지에 보이는 글·사진·실적은 이 파일에서 고칩니다.
   (논문 목록만 publications.js 에 따로 있습니다.)
   - [대괄호]로 된 부분은 아직 비어 있는 자리입니다. 실제 내용으로 바꿔 주세요.
   - 사진은 images 폴더에 넣고  image: "images/파일이름.jpg"  로 적습니다.
     "" 로 비워 두면 "사진 자리" 상자가 대신 보입니다.
   - 항목을 늘리려면 { ... }, 한 덩어리를 복사해서 붙여 넣으면 됩니다.
   ============================================================ */

const SITE = {

  /* ---------- 기본 정보 ---------- */
  lab: {
    nameKo: "한국전기연구원 SNSL 연구실",
    nameEn: "Sulfur and Solid Lab",
    intro:
      "KERI SNSL(Sulfur and Solid Lab)은 한국전기연구원 이차전지연구단 차세대전지연구센터에서 박준우 박사가 이끄는 연구실입니다. " +
      "황화물계 고체전해질과 전고체전지, 고에너지밀도 리튬황전지를 소재 합성부터 셀 제작·평가까지 연구합니다. " +
      "UST KERI 스쿨 학생과 연구원, 박사후·석사후연구원, 인턴이 함께하고 있습니다.",
  },

  /* ---------- 첫 화면 배너 (자동으로 넘어가는 슬라이드) ---------- */
  hero: [
    {
      tag: "KERI 한국전기연구원",
      title: "Sulfur and\nSolid Laboratory",          // \n 은 줄바꿈
      text: "한국전기연구원 전고체 · 리튬황전지 연구실",
      image: "",                       // 예: "images/banner-lab.jpg"
      link: "research.html", linkText: "연구 분야 보기",
    },
    {
      tag: "Advanced Science · 2025",
      title: "1,000 mAh급\n유연 리튬황전지 구현",
      text: "산소 작용기를 결합한 단일벽 탄소나노튜브로 리튬폴리설파이드 용출을 억제했습니다.",
      image: "",
      link: "news.html", linkText: "소식 보기",
    },
    {
      tag: "Energy Storage Materials · 2024",
      title: "고체전해질 습식 합성,\n이온 전도도 2배",
      text: "분쇄 공정 없이 입도를 제어해 4.98 mS/cm의 황화물계 고체전해질을 합성했습니다.",
      image: "",
      link: "publications.html", linkText: "실적 보기",
    },
    {
      tag: "학회",
      title: "[학회 이름] 참가",
      text: "[날짜 · 장소 / 발표 또는 수상 내용]",
      image: "",                       // 학회 단체 사진
      link: "gallery.html", linkText: "사진 더 보기",
    },
  ],

  /* ---------- 숫자로 보는 연구실 ---------- */
  stats: [
    { number: "88", label: "SCI(E) 논문" },
    { number: "36", label: "등록 특허" },
    { number: "4,229", label: "논문 인용" },
    { number: "30", label: "H-index" },
  ],
  statsNote: "박준우 박사 학술지표 · 2026년 11월 기준",

  /* ---------- 연구 분야 ----------
     icon 은 "solid"(적층), "sulfur"(황 고리), "hybrid"(황+적층), "flask"(소재), "chart"(분석) 중에서 고릅니다. */
  research: [
    {
      icon: "solid",
      title: "전고체전지",
      en: "All-Solid-State Batteries",
      text: "전해질을 불에 타지 않는 고체로 바꿔 화재·폭발 위험을 낮춘 황화물계 전고체전지를 연구합니다. 저압에서 구동하는 셀 설계부터 복합 양극, 전극과 전해질 사이의 계면 제어, 건식 전극 공정까지 다룹니다.",
      topics: ["저압 구동 전고체전지 설계", "복합 양극 설계 및 계면 코팅", "실리콘계·리튬 금속 음극", "건식 전극 공정"],
      image: "",
    },
    {
      icon: "sulfur",
      title: "리튬황전지",
      en: "Lithium–Sulfur Batteries",
      text: "값싸고 풍부한 황을 양극으로 쓰는 리튬황전지는 이론 에너지 밀도가 리튬이온전지의 8배 이상입니다. 수명을 떨어뜨리는 리튬폴리설파이드 용출을 억제하고, 가볍고 유연한 고에너지밀도 파우치 셀을 만듭니다. 400 Wh/kg급 유연 전지(2022)와 1,000 mAh급 파우치형 시제품(2025)을 발표했습니다.",
      topics: ["고용량 황 양극 및 탄소 호스트", "리튬폴리설파이드 용출 억제", "전해질 설계", "유연 · 대면적 파우치 셀"],
      image: "",
    },
    {
      icon: "flask",
      title: "고체전해질 합성",
      en: "Sulfide Solid Electrolytes",
      text: "황화물계 고체전해질을 싸게, 많이 만드는 습식 합성 공정을 개발합니다. 핵 생성 속도를 제어해 분쇄 공정 없이 미세한 입자를 얻었고, 이온 전도도를 기존 건식 공정의 약 2배인 4.98 mS/cm까지 높였습니다. 저가 대량 합성 기술은 기업에 이전되었습니다.",
      topics: ["습식(용액) 합성 및 입도 제어", "저가 원료 기반 대량 합성", "아지로다이트계 전해질", "산화물계 고체전해질 저온 소결"],
      image: "",
    },
    {
      icon: "hybrid",
      title: "리튬황 전고체전지",
      en: "All-Solid-State Li–S Batteries",
      text: "리튬황전지의 높은 에너지 밀도와 전고체전지의 안전성을 하나로 합친 차세대 전지입니다. 액체 전해질 대신 황화물계 고체전해질을 써서 리튬폴리설파이드 용출 문제를 근본적으로 줄이고, 황 양극과 고체전해질이 잘 맞닿는 복합 양극과 건식 전극 공정을 개발합니다.",
      topics: ["리튬황 전고체전지용 복합 양극 제작", "건식 양극 제조 기술", "황 · SPAN · Li2S 양극 설계", "황 양극과 고체전해질 계면 제어"],
      image: "",
    },
  ],

  /* ---------- 교수 (Professor 페이지) ---------- */
  pi: {
    name: "박준우",
    nameEn: "Jun-Woo Park, Ph.D.",
    role: "한국전기연구원 이차전지연구단 차세대전지연구센터 책임연구원",
    role2: "UST KERI 스쿨 교수 (전기기능소재공학)",
    photo: "images/people/pi.jpg",
    email: "parkjw@keri.re.kr",
    phone: "055-280-1684",
    interests: ["리튬황전지 양극 및 고에너지밀도화 기술", "고체전해질 소재 및 저압 구동 전고체전지 설계", "리튬전지 모듈 시험 · 평가"],
    bio: [
      "요코하마국립대학교 화학공학 석사 (2008~2010)",
      "요코하마국립대학교 화학공학 박사 (2010~2013)",
      "한국전기연구원 책임연구원 (2013~현재)",
      "한국전기연구원 차세대전지개발팀 팀장 (2020~현재)",
      "과학기술연합대학원대학교(UST) 교수 (2020~현재)",
    ],
    activities: [
      "산업통상자원부 평가위원 (2016~현재)",
      "중소벤처기업부 평가위원 (2019~현재)",
      "한국전지학회 편집위원 (2019~현재)",
      "한국화학공학회 배터리산업위원회 총무간사 (2024~현재)",
      "한국전기화학회 부산·울산·경남 지부 부회장 (2024~현재)",
      "한국전지학회 전무이사 (2026~현재)",
    ],

    /* 프로필 링크. url 을 "" 로 두면 그 버튼은 보이지 않습니다. */
    links: [
      { label: "Google Scholar", url: "https://scholar.google.co.kr/citations?user=IpjyvmQAAAAJ&hl=ko&oi=ao" },
      { label: "UST 교수 프로필", url: "https://www.ust.ac.kr/prog/campus/campus/sub49_04/49/majorView.do?majorNo=108&kind=professor&empNo=lK+wX4SmIjsCO5m9FupRHw==" },
      { label: "KERI", url: "https://www.keri.re.kr" },
    ],

    achievements: [
      { title: "고체전해질 대량 저가 합성기술 개발", note: "기술료 7.7억원 · 2021.01" },
      { title: "리튬황전지 기술 개발", note: "기술료 2.5억원 · 2021.02" },
      { title: "잠수함용 리튬이차전지 안전성 평가 기술 개발", note: "기술료 3억원 · 2022.09" },
    ],

    projects: [
      { title: "수출형 장보고3 잠수함용 리튬전지체계 개조개발 리튬전지모듈 시험 용역", org: "대기업 수탁 / 한화에어로스페이스(주), 한국전기연구원(위탁)", role: "연구책임자" },
      { title: "전극 침투형 3mS/cm급 나노 고체전해질 소재 기반 고안전성 이차전지 기술개발", org: "산업통상자원부 / 롯데에너지머티리얼즈(주관), 한국전기연구원(공동), 코스모신소재(공동), 삼성SDI(수요) 등", role: "연구책임자" },
      { title: "황화물 고체전해질 습식합성 양산기술개발", org: "정부출연금사업 / 한국전기연구원(주관), 일진머티리얼즈(수요)", role: "연구책임자" },
      { title: "고에너지밀도 리튬황전지 소재 및 셀 기술 개발", org: "정부출연금사업 / 한국전기연구원(주관)", role: "핵심연구자" },
      { title: "MLCB용 저온소결형 산화물계 고체전해질 대량(5kg/batch) 합성 기술 개발", org: "산업통상자원부 / 주식회사 포스코제이케이솔리드솔루션(주관), 한국전기연구원(공동), 부산대학교(공동), 포항산업과학연구원(공동)", role: "연구책임자" },
      { title: "50kg/batch급 무기계 고체전해질용 리튬계 핵심원료 제조공정기술개발", org: "산업통상자원부 / 이수스페셜티케미컬(주관), 한국전기연구원(공동)", role: "핵심연구자" },
      { title: "450 Wh/kg급 초경량 리튬황전지 개발", org: "글로벌 TOP 전략연구단 지원사업 / 한국전기연구원(주관)", role: "핵심연구자" },
      { title: "장수명 고에너지밀도 리튬-황 전지 개발", org: "산업통상자원부 글로벌산업기술협력센터 / 롯데에너지머티리얼즈(주관), Fraunhofer IWS(국제공동), 한국전기연구원(공동), 고려대학교(공동), 이화여자대학교(공동), 광주과학기술원(공동), 한양대학교(공동)", role: "연구책임자" },
    ],

    awards: [
      { year: "2025", title: "대통령 표창", text: "대한민국 대통령 · 「과학기술·ICT 발전 및 국가연구개발사업 성과평가」 공로, 2025년 과학·ICT의 날 기념 수여" },
      { year: "2025", title: "에코프로 젊은 과학자상", text: "에코프로 · 제3회 에코프로 젊은 과학자상 에너지 분야 수상" },
      { year: "2024", title: "KERI 대상", text: "한국전기연구원 원장 · 전고체전지 분야 논문 5편 성과(상위 3% JCR 논문 포함)" },
      { year: "2023", title: "산업통상자원부 장관상", text: "산업통상자원부 · 「친환경 모빌리티용 고성능 차세대 이차전지 사업」 리튬-황 전지 분야 기획 및 예비타당성 조사 승인" },
      { year: "2023", title: "과학기술정보통신부 장관상", text: "과학기술정보통신부 · 「국가연구개발 우수성과 100선」 선정 및 비가연성 전고체전지용 황화물계 고체전해질 저비용·대량생산 기술 개발 공로로 대상 수상" },
      { year: "2023", title: "산업통상자원부 장관 표창", text: "산업통상자원부 · 제3회 배터리산업인의 날 기념, 국내 배터리 산업 발전 기여" },
      { year: "2023", title: "KERI 대상", text: "한국전기연구원 원장 · 황화물계 전고체전지 개발 성과" },
      { year: "2022", title: "KERI 연구 우수상(2021)", text: "한국전기연구원 원장 · 고에너지밀도 유연전지 원천기술 개발" },
      { year: "2022", title: "과학기술정보통신부 장관상", text: "과학기술정보통신부 · 소재·부품·장비 분야 국가연구인프라(3N) 기관 중 우수 국가연구실(N-Lab) 선정" },
      { year: "2021", title: "KERI 이달의 직원상(2021)", text: "한국전기연구원 원장 · 황화물계 고체전해질 습식합성 관련 로열티 성과" },
      { year: "2021", title: "산업통상자원부 장관상", text: "산업통상자원부 · 이차전지 에너지 효율 개선 기여" },
    ],

    media: [
      { title: "[사이언스포럼] 2차 전지, 난제를 풀다", source: "YTN 사이언스", url: "https://youtu.be/aOWG5cGUzkI?si=9MGn3rAtMAMhopKo" },
      { title: "전고체배터리 소개", source: "KBS 뉴스", url: "https://news.kbs.co.kr/news/view.do?ncd=7678144&ref=A" },
      { title: "[지식웨비나] 전고체 배터리, 상용화 앞당길 대량 생산 기술 혁신!", source: "알파캠퍼스", url: "https://www.youtube.com/watch?v=7R1Oyamxtls" },
    ],

    press: [
      { title: "과학기술정보통신부 장관상", source: "뉴시스", url: "https://www.newsis.com/view/NISX20250424_0003152083" },
      { title: "리튬황전지 개발 소개", source: "인더스트리뉴스", url: "https://www.industrynews.co.kr/news/articleView.html?idxno=59360" },
      { title: "리튬황전지 개발 소개", source: "한국일보", url: "https://www.hankookilbo.com/News/Read/A2022041113510001766?did=NA" },
      { title: "전고체전지 개발 소개", source: "연합뉴스", url: "https://www.yna.co.kr/view/AKR20200908049600052?input=1195m" },
      { title: "박준우 박사 소개", source: "KCC 그룹지", url: "https://webzine.kccworld.co.kr/kcc/cn.do?rid=217" },
      { title: "리튬황전지 개발 소개 (미국과학진흥협회)", source: "EurekAlert!", url: "https://www.eurekalert.org/news-releases/952325" },
      { title: "레독스흐름전지 개발 소개", source: "중앙일보", url: "https://www.joongang.co.kr/article/25132240" },
      { title: "특수 습식합성 및 입도 제어", source: "SBS 뉴스", url: "https://news.sbs.co.kr/news/endPage.do?news_id=N1007575769&plink=ORI&cooper=NAVER" },
    ],
  },

  /* ---------- 현재 구성원 (Members 페이지) ---------- */
  /* skills: 주요 연구 역량 / metrics: 학술지표 한 줄 / edu: 학력·경력 / awards: 수상
     비워 둔 항목( "" 또는 [] )은 화면에 나오지 않습니다.
     연구원·인턴 같은 묶음을 추가하려면 { group: "...", people: [ ... ] }, 덩어리를 복사해 붙이세요. */
  members: [
    {
      group: "박사과정",
      people: [
        {
          name: "허준영", role: "UST 박사과정 (3년차)", email: "", photo: "images/people/heo-junyeong.jpg",
          skills: ["리튬-황 전지용 LiPS 용출 억제기술 개발", "고에너지밀도 리튬-황 전지 프로토타입 파우치 제작 기술", "리튬-황 전지용 고로딩 Freestanding 전극 제작 기술", "리튬-황 전고체 전지용 복합 양극 제작 기술"],
          metrics: "SCI(E) 논문 20편 · 특허 10건 · 논문 인용 329 · H-index 7",
          edu: ["영남대학교 전기공학과 학사 (2016~2023)", "UST 전기기능소재공학 석사 (2023~2024)", "UST 전기기능소재공학 박사 (2024~현재)"],
          awards: ["한국전지학회 우수 논문 발표상 (2024)", "한국전기연구원 교내 문화제 원장상 (2024)", "한국태양에너지학회 우수 논문 발표상 (2025)", "UST 우수 RA 선정 (2025)", "UST Proposal Challenge 우수상 (2026)", "UST 해외연수지원사업 선정 (2026)"],
        },
        {
          name: "김동희", role: "UST 박사과정 (1년차)", email: "", photo: "images/people/kim-donghee.jpg",
          skills: ["전고체전지 계면 설계", "습식합성 기반 황화물계 고체전해질 입도 제어 기술", "산화물계 고체전해질 저온 소결 기술", "저온·저압용 황화물계 고체전해질 기반 멤브레인", "인필트레이션 기반 전고체전지용 전극 제작 기술"],
          metrics: "SCI(E) 논문 12편 · 특허 출원 10건 · 논문 인용 328 · H-index 6",
          edu: ["부경대학교 금속공학과 학사 (2018~2024)", "UST 전기기능소재공학 석박통합과정 (2024~현재)"],
          awards: ["한국전지학회 우수 논문 발표상 (2024)", "에코프로 산학장학생 선정 (2025)", "나노코리아 우수 논문 발표상 (2025)", "한국전기화학회 우수 논문 발표상 (2025)", "UST 우수 RA 선정 (2025)", "박사우수장학금(이공계) 장학생 선정 (2026)"],
        },
      ],
    },
    {
      group: "석사후연구원",
      people: [
        {
          name: "임수현", role: "석사후연구원", email: "", photo: "images/people/lim-suhyeon.jpg",
          skills: ["리튬메탈 배터리용 유무기 복합 분리막 개발", "저압·저온 구동형 황화물계 복합 멤브레인 개발"],
          metrics: "SCI(E) 논문 3편 (주저자 1편, 공동저자 2편) · 특허 등록 1건, 출원 6건",
          edu: ["단국대학교 화학과 학사 (2018~2022)", "한양대학교 화학공학과 석사 (2022~2024)", "한국전기연구원 차세대전지연구센터 (2025~현재)"],
          awards: ["MDB 국제학회 우수 포스터상 (2026)", "한국화학공학회 우수 포스터상 (2026)"],
        },
        {
          name: "구하원", role: "석사후연구원", email: "", photo: "images/people/koo-hawon.jpg",
          skills: ["황 양극 소재 분석 · 고로딩 전극 제작 기술", "고에너지밀도 전지 프로토타입 파우치 제작 기술"],
          metrics: "SCI(E) 논문 7편 · 특허 7건",
          edu: ["가천대학교 신소재공학과 학사 (2020~2024)", "UST 전기기능소재공학 석사 (2024~2026)", "한국전기연구원 차세대전지연구센터 (2026~현재)"],
          awards: ["석사우수장학생(이공계) 선정 (2025)", "한국산업기술진흥협회 회장상 (2026)", "경상남도지사상 (2026)"],
        },
        {
          name: "김주현", role: "석사후연구원", email: "", photo: "images/people/kim-juhyeon.jpg",
          skills: ["리튬-황 전고체전지용 건식 양극 제조 기술", "리튬-황 전지용 황 · SPAN · Li2S 양극 설계"],
          metrics: "SCI(E) 논문 1편 (공동 1저자 1편) · 특허 출원 6건",
          edu: ["경상대학교 나노·신소재공학부 학사 (2019~2023)", "경상대학교 나노신소재융합공학과 석사 (2023~2025)", "한국전기연구원 차세대전지연구센터 (2026~현재)"],
          awards: ["BK21 GNU 사업단 펠로우십 장학금 우수자 (2024)", "한국전기화학회 부울경 지부 우수논문상 (2025)", "한국전기화학회 우수 논문 발표상 (2025)"],
        },
      ],
    },
    {
      group: "석사과정",
      people: [
        {
          name: "허진혁", role: "UST 석사과정 (2년차)", email: "", photo: "images/people/heo-jinhyeok.jpg",
          skills: ["리튬-황 전지용 LiPS 용출 억제기술 개발", "리튬-황 전지 양극용 촉매 합성 기술"],
          metrics: "특허 출원 3건",
          edu: ["창원대학교 신소재공학부 학사 (2018~2024)", "한국전기연구원 연구 인턴십 (2024~2025)", "UST 전기기능소재공학 석박통합과정 (2025~현재)"],
          awards: ["KERI-KIMS 공동 학술제 최우수 포스터 발표상 (2026)"],
        },
        {
          name: "김근미", role: "UST 석사과정 (2년차)", email: "", photo: "images/people/kim-geunmi.jpg",
          skills: ["습식합성 기반 고체전해질 대기안정성 향상 기술", "고체전해질 미립화 및 Catholyte 도입 기술"],
          metrics: "SCI(E) 논문 1편 (공저자 1편) · 특허 출원 5건",
          edu: ["충남대학교 응용화학공학과 학사 (2023~2025)", "한국전자통신연구원(ETRI) 연구연수생 (2025)", "UST 한국전기연구원 하계 연구인턴십 (2025)", "UST 전기기능소재공학 석사 (2025~현재)"],
          awards: ["KERI·KIMS 공동 학술제 우수 포스터상 (2026)"],
        },
      ],
    },
  ],

  /* ---------- 졸업생 (Alumni 페이지) ----------
     degree: 학위 (예: "석사 졸업") / period: 재학 기간 (예: "2022.03~2024.02") / topic: 연구실에서 한 연구 분야
     학위가 둘 이상이면 degree, period 대신 degrees: [{ degree: "...", period: "..." }, { ... }] 로 적습니다 (성정환 참고)
     company: 현재 소속(취업한 곳) / job: 현재 하는 일
     logo: 회사 이름이 들어간 로고 그림. 있으면 회사 이름 글자 대신 로고가 나옵니다. 없으면 "" (글자로 표시) */
  alumniNote: "졸업생들은 배터리 소재 · 셀 · 완성차 등 이차전지 분야 주요 기업으로 진출했습니다.",
  alumni: [
    { name: "박재영", degree: "석사 졸업", period: "2016.03~2018.02", topic: "", company: "엘앤에프", logo: "images/logos/lnf-ci.png", job: "", photo: "images/people/park-jaeyoung.jpg" },
    { name: "김민주", degree: "석사 졸업", period: "2018.09~2020.09", topic: "", company: "롯데에너지머티리얼즈", logo: "images/logos/lotte-em.png", job: "", photo: "images/people/kim-minju.jpg" },
    { name: "조성찬", degree: "석사 졸업", period: "2019.09~2021.06", topic: "", company: "LG에너지솔루션", logo: "images/logos/lg-es.svg", job: "", photo: "images/people/cho-seongchan.jpg" },
    { name: "최익현", degree: "석사 졸업", period: "2020.03~2022.02", topic: "", company: "현대자동차", logo: "images/logos/hyundai-motor.svg", job: "", photo: "images/people/choi-ikhyeon.jpg" },
    { name: "홍정원", degree: "석사 졸업", period: "2021.09~2023.06", topic: "", company: "LG화학", logo: "images/logos/lg-chem.svg", job: "", photo: "images/people/hong-jeongwon.jpg" },
    { name: "조영수", degree: "석사 졸업", period: "2022.03~2024.02", topic: "", company: "LG에너지솔루션", logo: "images/logos/lg-es.svg", job: "", photo: "images/people/cho-youngsu.jpg" },
    { name: "성정환", degrees: [{ degree: "석사 졸업", period: "2018.03~2020.02" }, { degree: "박사 졸업", period: "2021.03~2025.02" }], topic: "", company: "SK On", logo: "images/logos/sk-on.png", job: "", photo: "images/people/seong-jeonghwan.jpg" },
  ],

  /* ---------- 특허 · 학회발표 ----------
     논문은 publications.js 에 있습니다.
     type 은 "patent"(특허), "conference"(학회발표), "paper"(논문) 중 하나. */
  publications: [
    { type: "patent", year: 2023, title: "배터리의 냉각을 통한 엔트로피 측정 방법 및 이를 이용한 배터리 온도 변화 계산 방법", authors: "", venue: "국내 특허 · 2023-07-17", link: "" },
    { type: "patent", year: 2023, title: "고체전해질의 제조방법, 이로부터 제조되는 고체전해질 및 이를 포함하는 전고체 전지", authors: "", venue: "국내 특허 · 2023-06-07", link: "" },
    { type: "patent", year: 2023, title: "이중층 고체전해질을 포함하는 전고체전지 및 그 제조방법", authors: "", venue: "국내 특허 · 2023-03-31", link: "" },
    { type: "patent", year: 2022, title: "리튬을 함유하는 중간막이 코팅된 고체 전해질 분리막 및 이를 이용한 전고체 이차 전지", authors: "", venue: "국내 특허 · 2022-08-05", link: "" },
    { type: "patent", year: 2022, title: "황화물계 고체전해질 분말을 포함하는 복합체 제조방법, 이를 이용한 고체전해질층, 전극복합체층 제조방법 및 이를 포함하는 전고체전지", authors: "", venue: "국내 특허 · 2022-05-11", link: "" },
    { type: "patent", year: 2022, title: "황 담지 탄소나노튜브 전극의 제조 방법, 이로부터 제조되는 황 담지 탄소나노튜브 전극 및 이를 포함하는 리튬-황 전지", authors: "", venue: "국내 특허 · 2022-05-06", link: "" },
    { type: "patent", year: 2022, title: "고체 리튬 전지용 황계 고체전해질 및 고체전해질의 상압 합성법", authors: "", venue: "국내 특허 · 2022-04-28", link: "" },
    { type: "patent", year: 2022, title: "고체 고분자 전해질 및 이를 포함하는 리튬 이차전지", authors: "", venue: "국내 특허 · 2022-02-15", link: "" },
    { type: "patent", year: 2024, title: "Method for preparing solid electrolyte, solid electrolyte prepared thereby, and all-solid-state battery comprising same", authors: "", venue: "US Patent Application 18/272,597", link: "" },
    { type: "patent", year: 2016, title: "Alkali metal-sulfur-based secondary battery", authors: "", venue: "US Patent 9,406,975", link: "" },

    { type: "conference", year: 2019, title: "The Effects of Vaporized Solid Electrolyte Solution for All-Solid-State Batteries", authors: "J.-W. Park, M.-J. Kim, B. G. Kim, Y.-C. Ha, Y.-J. Lee, S.-M. Lee", venue: "ECS Meeting Abstracts (ECEE 2019)", link: "" },
    { type: "conference", year: 2018, title: "The Effect of Solvated Ionic Liquids for All-Solid-State Lithium Batteries", authors: "J.-W. Park, M.-J. Kim, B. G. Kim, Y.-C. Ha, S.-M. Lee", venue: "ECS Meeting Abstracts (AiMES 2018)", link: "" },
    { type: "conference", year: 2016, title: "Enhancement of Ionic Conductivity of Composite Membranes for All-Solid-State Lithium Secondary Batteries", authors: "J.-W. Park, J.-Y. Park, J.-H. Choi, S.-M. Lee, C.-H. Doh", venue: "ECS Meeting Abstracts (IMLB 2016)", link: "" },
    { type: "conference", year: 2012, title: "Compatibility of Room Temperature Ionic Liquid Electrolytes with Sulfur Cathode for Lithium Secondary Batteries", authors: "J.-W. Park, N. Tachikawa, K. Ueno, K. Dokko, M. Watanabe", venue: "ECS Meeting Abstracts (222nd ECS Meeting)", link: "" },
    { type: "conference", year: 2010, title: "Mass Transport Property and Limiting Current Density in Ionic Liquid Electrolyte for Lithium Ion Battery", authors: "J.-W. Park, K. Yoshida, N. Tachikawa, K. Dokko, M. Watanabe", venue: "ECS Meeting Abstracts", link: "" },
  ],

  /* ---------- 소식 ----------
     date 는 "연도.월.일" 형식. link 를 넣으면 제목을 눌러 기사로 이동합니다. image 는 오른쪽 작은 사진. */
  news: [
    { date: "2026.04.20", title: "[언론] 충청투데이 「세계 상위 0.1% 석학이 가르친다, UST가 키운 국가대표 과학자」", text: "UST를 대표하는 우수 연구진으로 연구실의 차세대전지 연구성과가 소개되었습니다.", link: "", image: "images/news/2026-ust-press-b.jpg" },
    { date: "2025.04.21", title: "[수상] 박준우 박사, 과학·ICT의 날 대통령 표창", text: "과학기술·ICT 발전과 국가연구개발사업 성과에 기여한 공로로 대통령 표창을 받았습니다.", link: "https://www.keri.re.kr/kor/contents/open-02-02.do?schM=view&page=1&viewCount=10&id=10197", image: "images/news/2025-award.jpg" },
    { date: "2025.01.20", title: "[연구성과] UAM 핵심 ‘리튬황전지’ 최대 난제 극복", text: "산소 작용기를 결합한 단일벽 탄소나노튜브로 리튬폴리설파이드 용출을 억제하고 1,000 mAh급 파우치형 유연 전지를 만들었습니다. Advanced Science 게재.", link: "https://www.keri.re.kr/kor/contents/open-02-02.do?schM=view&page=1&viewCount=10&id=10070", image: "images/news/2025-lis-pouch.jpg" },
    { date: "2024.03.18", title: "[연구성과] 전고체전지용 고체전해질, 공정은 줄이고 품질은 2배로", text: "분쇄 과정이 필요 없는 황화물계 고체전해질 습식 합성 공정을 개발했습니다. 이온 전도도 4.98 mS/cm. Energy Storage Materials 게재.", link: "https://www.keri.re.kr/kor/contents/open-02-02.do?schM=view&page=1&viewCount=10&id=9606", image: "images/news/2024-solid-electrolyte.jpg" },
    { date: "2023.01.09", title: "[연구성과] 전기연구원-부산대, 하이브리드형 아연-망간 레독스흐름전지 개발", text: "부산대학교와 함께 고전압 수계 아연-망간 레독스흐름전지를 개발했습니다.", link: "https://www.joongang.co.kr/article/25132240", image: "images/news/2023-redox-flow.jpg" },
    { date: "2022.04.11", title: "[연구성과] 차세대 리튬황배터리 난제 풀고 상용화 앞당겨", text: "활성탄과 인(P)으로 리튬폴리설파이드를 이중으로 잡아내 400 Wh/kg급 유연 리튬황배터리를 구현했습니다. Small 표지논문 선정.", link: "https://www.keri.re.kr/kor/contents/open-02-02.do?schM=view&page=1&viewCount=10&id=8644", image: "images/news/2022-lis-flexible.jpg" },
  ],

  /* ---------- 사진첩 ---------- */
  gallery: [
    { image: "", caption: "[학회 이름, 연도]" },
    { image: "", caption: "[연구실 단체 사진]" },
    { image: "", caption: "[실험실 · 장비]" },
    { image: "", caption: "[수상 · 행사]" },
    { image: "", caption: "[워크숍 · MT]" },
    { image: "", caption: "[학회 이름, 연도]" },
  ],

  /* ---------- 신입생 모집 (Contact Us 페이지) ---------- */
  recruit: {
    headline: "차세대 이차전지를 함께 연구할 신입생을 모집합니다",
    course: "석사 / 박사 / 석·박사 통합과정 (통합과정 우대)",
    sections: [
      { title: "연구개요", items: [
        "리튬-황 전지(Li-S) 고에너지밀도 시스템 연구",
        "전고체전지(ASSBs) 핵심 소재 및 공정 기술 연구",
        "리튬-황 전고체전지(Li-S ASSBs) 복합 양극 및 셀 기술 연구",
      ] },
      { title: "연구목표", items: [
        "차세대 이차전지 소재 및 작동 메커니즘에 대한 심층 이해 확보",
        "리튬황전지 및 전고체전지의 기술적 한계 분석 및 해결 전략 도출",
        "국내·외 이차전지 산업 및 기술 트렌드 파악을 통한 연구 방향성 확립",
        "중장기적 관점에서 차세대 배터리 기술 개발 역량 확보",
      ] },
      { title: "연구방법", items: [
        "리튬황전지 및 전고체전지 관련 소재 합성 & 전기화학 특성 평가",
        "대기업 및 주요 대학(서울대, 고려대, 한양대 등)과의 공동연구 수행을 통한 실질적 연구 협력 및 기술 교류",
        "국내 학회 및 학술대회 참여를 통한 최신 연구 동향 습득",
        "국내·외 논문 및 특허 분석 기반 기술 동향 조사",
        "정기 세미나 및 그룹 미팅을 통한 연구 결과 공유 및 피드백",
        "지도교수 및 연구진과의 정기/비정기 미팅을 통한 연구 방향성 확립",
      ] },
      { title: "기대결과", items: [
        "차세대 이차전지 분야의 전문 연구역량 확보",
        "글로벌 수준의 연구 수행 능력 및 기술 경쟁력 확보",
        "핵심 소재 및 공정 기술 개발을 통한 학술·산업적 기여",
        "산학 협력 기반 기업 연계 및 취업 경쟁력 강화",
      ] },
    ],
  },

  /* ---------- 연락처 ---------- */
  contact: {
    address: "(51543) 경상남도 창원시 성산구 전기의길 12 (성주동) 한국전기연구원 차세대전지연구센터 3연구동 3409호",
    /* 지도: mapEmbed 는 페이지에 보이는 지도(오픈스트리트맵), naverMap 은 "네이버 지도에서 보기" 버튼 주소 */
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=128.7170%2C35.1883%2C128.7213%2C35.1906&layer=mapnik&marker=35.18931%2C128.71940",
    naverMap: "https://map.naver.com/p/entry/place/11642655",
    email: "parkjw@keri.re.kr",
    phone: "055-280-1684",
    links: [
      { label: "한국전기연구원", url: "https://www.keri.re.kr" },
      { label: "UST", url: "https://www.ust.ac.kr" },
    ],
  },
};
