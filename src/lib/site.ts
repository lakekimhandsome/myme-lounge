export const site = {
  name: "MY · ME LOUNGE",
  nameKo: "마이미라운지",
  fullName: "마이미라운지 MY · ME LOUNGE",
  tagline: "마이미 호텔 감성의 상수 라운지",
  since: 2025,
  description:
    "마이미라운지. 마이미 호텔 감성의 따뜻한 원목 공간에서 시그니처 커피와 디저트를 즐기는 홍대·상수 라운지 카페입니다.",
  intro: `따뜻한 원목과 부드러운 조명이 감싸는 라운지.
작업도, 대화도, 여유도 어울리는 상수동의 조용한 카페입니다.`,
  heroImpression: "호텔처럼 고급스럽고, 포근하게 머무는 라운지",
  phone: "0507-1393-9050",
  phoneTel: "tel:0507-1393-9050",
  address: "서울 마포구 독막로 97 1층",
  addressJibun: "서울 마포구 상수동 143-21",
  roadGuide:
    "상수역 2번출구로 나와서 101m 직진하면 마이미 호텔·마이미라운지가 있습니다",
  hours: "매일 08:00 – 22:00",
  closed: "연중무휴",
  parking: "건물 지하주차장 · 2시간 무료 주차 등록",
  conveniences: ["예약", "포장", "무선 인터넷", "주차", "단체 이용 가능", "대관 가능"],
  keywords: ["상수카페", "홍대카페", "디저트카페", "조용한카페", "라운지카페"],
  placeId: "2037073925",
  naverPlaceUrl: "https://naver.me/5JqrQdk1",
  naverMapUrl: "https://map.naver.com/p/entry/place/2037073925",
  directionsUrl:
    "https://map.naver.com/p/directions/-/-/126.9243092,37.5479349,%EB%A7%88%EC%9D%B4%EB%AF%B8%EB%9D%BC%EC%9A%B4%EC%A7%80,place,2037073925/-/transit",
  mapEmbedUrl:
    "https://pcmap.place.naver.com/restaurant/2037073925/location?subtab=location&fromPanelId=place-location",
  instagramUrl: "https://www.instagram.com/myme_hongdae",
  instagramHandle: "@myme_hongdae",
  lat: 37.5479349,
  lng: 126.9243092,
  ogImage: "/images/place/hero.jpg",
  microReview: "",
  venueRental:
    "대관 문의는 전화 및 마이미라운지 인스타그램(myme_hongdae)으로 연락 부탁드립니다",
} as const;

export const aboutCards = [
  {
    title: "원목이 감싸는 라운지",
    description:
      "마이미 호텔 감성을 닮은 원목 테이블과 부드러운 간접 조명. 차분한 온기가 공간을 채웁니다.",
    image: "/images/place/hero.jpg",
    alt: "마이미라운지 내부 전경",
  },
  {
    title: "집중하기 좋은 분위기",
    description:
      "홍대 인근이지만 조용합니다. 작업, 미팅, 여유로운 티타임까지—오래 머물러도 편한 라운지 카페입니다.",
    image: "/images/place/interior-01.jpg",
    alt: "마이미라운지 커뮤니티 테이블",
  },
  {
    title: "시그니처의 결",
    description:
      "씨솔트 크림 커피와 쏠티 초코 라떼, 계절 빙수까지. 직접 만든 레시피로 달콤하고 정갈한 한 잔을 건넵니다.",
    image: "/images/menu/salty-choco-latte.jpg",
    alt: "마이미라운지 쏠티 초코 라떼",
  },
] as const;

export const menus = [
  {
    category: "시그니처",
    title: "씨솔트크림 커피",
    description:
      "직접 만든 씨솔트 크림과 커피가 어우러진 마이미의 시그니처 음료. Ice only.",
    price: "6,800원",
    image: "/images/menu/seasalt-cream-coffee.jpg",
    alt: "씨솔트크림 커피",
  },
  {
    category: "추천",
    title: "쏠티 초코 라떼",
    description:
      "직접 만든 씨쏠트 크림과 진한 초코의 만남. 방문자들이 먼저 꼽는 특별한 레시피.",
    price: "7,800원",
    image: "/images/menu/salty-choco-latte.jpg",
    alt: "쏠티 초코 라떼",
  },
  {
    category: "디저트",
    title: "복숭아 · 망고 빙수",
    description:
      "포근한 우유 눈꽃 얼음 위에 과일을 듬뿍. 시즌 복숭아 빙수와 대표 망고 빙수.",
    price: "38,000원",
    image: "/images/menu/peach-bingsu.jpg",
    alt: "복숭아 빙수",
  },
  {
    category: "브런치",
    title: "햄치즈 · 잠봉 크루아상",
    description:
      "유기농 채소 햄치즈 샌드위치부터 직접 구운 크루아상 잠봉 샌드위치까지.",
    price: "7,500원~",
    image: "/images/menu/jambon-croissant.jpg",
    alt: "잠봉 크루아상 샌드위치",
  },
  {
    category: "커피",
    title: "MY · ME 시그니처 블렌드",
    description:
      "라즈베리의 상큼함, 밀크 초콜릿의 부드러움, 로스티드 아몬드의 고소함으로 완성한 블렌드.",
    price: "5,500원~",
    image: "/images/menu/americano.jpg",
    alt: "마이미 아메리카노",
  },
  {
    category: "베이커리",
    title: "매일 굽는 크루아상",
    description:
      "버터 크루아상과 소금 크루아상. 아침부터 나른한 오후까지 곁들이기 좋은 베이커리.",
    price: "5,000원~",
    image: "/images/menu/butter-croissant.jpg",
    alt: "버터 크루아상",
  },
] as const;

export const galleryImages = [
  {
    src: "/images/place/hero.jpg",
    alt: "마이미라운지 내부 전경",
    span: "wide" as const,
  },
  {
    src: "/images/place/interior-01.jpg",
    alt: "원목 커뮤니티 테이블",
    span: "tall" as const,
  },
  {
    src: "/images/menu/salty-choco-latte.jpg",
    alt: "쏠티 초코 라떼",
    span: "normal" as const,
  },
  {
    src: "/images/menu/peach-bingsu.jpg",
    alt: "복숭아 빙수",
    span: "tall" as const,
  },
  {
    src: "/images/place/interior-02.jpg",
    alt: "라운지 좌석과 조명",
    span: "normal" as const,
  },
  {
    src: "/images/menu/seasalt-cream-coffee.jpg",
    alt: "씨솔트크림 커피",
    span: "tall" as const,
  },
  {
    src: "/images/menu/mango-bingsu.jpg",
    alt: "망고 빙수",
    span: "normal" as const,
  },
  {
    src: "/images/menu/ham-cheese-sandwich.jpg",
    alt: "햄치즈 샌드위치",
    span: "normal" as const,
  },
  {
    src: "/images/menu/hangari-coffee.jpg",
    alt: "1L 항커피",
    span: "wide" as const,
  },
  {
    src: "/images/menu/fruit-juice.jpg",
    alt: "오늘의 과일 주스",
    span: "tall" as const,
  },
  {
    src: "/images/menu/galbae-smoothie.jpg",
    alt: "갈배 스무디",
    span: "normal" as const,
  },
  {
    src: "/images/place/interior-04.jpg",
    alt: "MY · ME Signature Blend",
    span: "tall" as const,
  },
] as const;
