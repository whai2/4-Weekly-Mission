# 기본 요청 사항
- [x] 상단 네비게이션 바, 푸터는 랜딩페이지와 동일한 스타일, 규칙으로 만들어 주세요.
- [x] 카드 컴포넌트를 클릭하면 해당하는 링크로 새로운 창을 띄워서 이동하게 해주세요.
- [x] 카드 컴포넌트에서 createdAt 데이터 기준으로 현재 Date와 차이에 따라 아래와 같은 규칙으로 설정해 주세요.
  - [x]  2분 미만은 “1 minute ago”
  - [x]  59분 이하는 “OO minutes ago”
  - [x]  60분 이상은 “1 hour ago”
  - [x]  23시간 이하는 “OO hours ago”
  - [x]  24시간 이상은 “1 day ago”
  - [x]  30일 이하는 “OO days ago”
  - [x]  31일 이상은 “1 month ago”
  - [x]  11달 이하는 “OO months ago”
  - [x]  12달 이상은 “1 year ago”
  - [x]  OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”
- [x] 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sample/user”를 활용해 주세요.
- [x] 프로필 데이터가 없는 경우 “로그인” 버튼이 보이게 해주세요.
- [x] 폴더 소유자, 폴더 이름 영역, 링크들에 대한 데이터는 “/api/sample/folder”를 활용해 주세요.(여기서 폴더란 링크들의 정보가 저장되어 있는 객체를 의미합니다. shared 페이지는 외부 유저에게 자신의 폴더 데이터 하나를 공유할 때 유저가 보게되는 화면 입니다.@디자인 시안에서 “프로필 이미지”는 폴더 소유자의 프로필, “@코드잇”은 폴더 소유자 이름, “⭐️ 즐겨찾기”는 폴더 이름이에요.)
- [x] Tablet에서 카드 리스트가 화면의 너비 1124px를 기준으로 이상일 때는 3열로 작을 때는 2열로 배치해 주세요.
- [x] 767 이하일 때는 1열로 보이게 한다.
- [x] 검색바의 검색 기능은 추후 만듭니다.
- [x] Tablet, Mobile에서 검색바, 카드 리스트의 좌우 최소 여백은 32px로 설정해 주세요.

## 컴포넌트
- [x] Static, no image, Hover 상태만 고려해 카드 컴포넌트를 만들어 주세요. (다른 상태의 디자인, 기능은 추후 만들어요.)
- [x] Hover 상태에서 이미지가 기존 크기의 130%로 커지게 해주세요. -> 카드 전체가 커지도록 변경했습니다.

# 심화 요구 사항
- [ ] 커스텀 훅을 만들어 관리한다.

# 추가 사항
## 지난주 피드백
- [x] let과 const 사용 기준을 명확히 한다.
- [x] 파일 구조에 대해 고민해본다. (https://usage.tistory.com/146)
- [x] 이름에 그 의도를 드러낸다. 네이밍에 대해 고민해본다.
- [x] 이벤트 타입에 대해 고민해본다.
- [x] 이벤트 종류에 따라 주석을 달아 명시화한다.
- [x] js를 통해 css 스타일링 적용 시, 불필요하게 명시도가 높아지는 것을 유의한다.
- [x] 객체를 구성하는 기준을 더 고민해본다.
- [x] 함수의 역할에 일관성을 부여한다.

## 컴포넌트 관련
- [x] 컴포넌트 내부에서 관리하는 자원과 외부(부모 요소)에서 관리하는 자원을 구별한다.
  - [x] 레이아웃과 관련된 것은 컴포넌트 외부에서 관리한다.
- [x] className을 props로 넘겨줄 지, 해당 컴포넌트를 호출하는 부모 요소에서 div로 처리할 지 분명히 구별한다.

## 함수, 메서드 관련
- [x] 한 함수가 한 가지 기능만 담당하게 한다.
  - [x] 함수가 한 가지 기능을 하는지 확인하는 기준을 세운다. 특히, 함수 역할의 일관성을 고민한다.
- [x] 함수형 프로그래밍을 고민해본다. 함수가 외부 변수에 의해 동작하지 않는지 점검한다.
  - [x] 특히, 전역 변수에 의존하는 이벤트를 점검한다. 이를 지역 변수와 인자로 처리한다.
  - [ ] 함수의 인자를 최소화한다.
- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다. 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다. 
  - [x] 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- [ ] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [x] else를 지양한다.
    - [x] 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
    - [x] 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- [x] 값을 하드 코딩하지 않는다.

## 코드 컨벤션 관련
- [x] 이름을 통해, 의도를 드러낸다. (https://jacking75.github.io/ETC_good_function_name/ 참고)
- [x] 축약하지 않는다.
- [x] 공백도 코딩 컨벤션이다.
- [x] 공백 라인 의미있게 사용한다.
- [x] 스페이스와 탭을 혼용하지 않는다.
- [x] 의미 없는 주석을 달지 않는다.
- [x] 불필요한 console.log를 남기지 않는다.

# 멘토님 피드백
## .html 관련 
- [x] <noscript>You need~ 해당 코드는 남기는 것이 좋다.
- [x] lang="ko" : html 표준 언어 선택에 유의한다.
- [x] css 파일 컨벤션을 통일한다. React는 최상위 요소에 접근하더라도, .html 파일보다는 리액트 앱의 진입점인 index.js 쪽에서 불러온다.

## css 관련
- [ ] css 네이밍에 대해 다시 고민해본다.
- [x] 현재 필요한 기능인지를 다시 고민해 본다. (YAGNI 원칙)
- [x] 디자인 사항을 번경하지 않는다. (이미지만 커지도록 한다.)
- [ ] css 미디어 쿼리도 컨벤션을 적용힌다.
- [x] 전역에 선언할 Css 속성을 고민한다.
- [ ] reset.css를 활용한다. (사용자 에이전트 스타일시트의 사이드 이펙트를 차단한다.)
- [ ] footer 디자인 이슈를 보완한다.

## React 관련
- [ ] state 훅 사용을 최소화한다. (관리하는 상태가 많아지는 것은 좋지 않다.)
- [ ] useEffect 훅은 하나의 동작만을 이행하는 것이 좋다.
- [ ] 컴포넌트의 지나친 재사용성, 추상화를 경계한다. (css 선택자 관련)
- [ ] key 값은 배열 내에서 유일해야 한다.

## 코드 컨벤션 관련
- [ ] 컴포넌트 네이밍을 선언적으로 한다.
- [ ] Prettier를 활용한다. 
  - [x] (코드 포멧팅에 유의한다.)
- [ ] Frame의 카드 컴포넌트 props를 구조 분해 할당한다.
- [x] import React from 'react';는 17 버전 이후로 사용하지 않는다.
- [ ] import 코드 컨벤션도 적용한다.