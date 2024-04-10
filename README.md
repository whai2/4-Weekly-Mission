# 15 주차 
## 기본 구현 사항
- [ ] 로그인/회원가입시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장합니다.
- [ ] 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동합니다.
- [x] “회원 가입하기”를 클릭하면 ‘/signup’ 페이지로 이동합니다.
- [x] 이메일 input에 placeholder는 “이메일을 입력해 주세요.”비밀번호 input에 placeholder는 “비밀번호를 입력해 주세요.”로 설정해 주세요.
- [x] 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
- [x] 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
- [x] 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
- [x] 로그인 실패하는 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.
- [ ] 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
- [ ] https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 { “email”: “test@codeit.com”, “password”: “sprint101” } POST 요청해서 성공 응답을 받으면 “/folder”로 이동합니다.
- [ ] 소셜 로그인에 구글 아이콘 클릭시 ‘https://www.google.com’카카오 아이콘 클릭시 ‘https://www.kakaocorp.com/page’로 이동하게 해주세요.
- [x] 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
- [x] 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.

## 심화 구현 사항
- [x] 로그인, 회원가입 기능에 react-hook-form을 활용해 주세요.

# 16 주차
## 기본 구현 사항
- [ ] 링크 공유 페이지의 url path를 ‘/shared’에서 ‘/shared/{folderId}’로 변경해 주세요.
- [ ] 폴더의 정보는 ‘/api/folders/{folderId}’, 폴더 소유자의 정보는 ‘/api/users/{userId}’를 활용해 주세요.
- [ ] 링크 공유 페이지에서 폴더의 링크 데이터는 ‘/api/users/{userId}/links?folderId={folderId}’를 사용해 주세요.
- [ ] 폴더 페이지에서 유저가 access token이 없는 경우 ‘/signin’페이지로 이동하게 해주세요.
- [ ] 테스트 유저는 id: “codeit@codeit.com”, pw: “sprint101” 를 활용해 보세요.
- [ ] 폴더 페이지의 url path가 ‘/folder’일 경우 폴더 목록에서 “전체” 가 선택되어 있고, ‘/folder/{folderId}’일 경우 폴더 목록에서 {folderId} 에 해당하는 폴더가 선택되어 있고 폴더에 있는 링크들을 볼 수 있게 해주세요.
- [ ] 폴더 페이지에서 현재 유저의 폴더 목록 데이터를 받아올 때 ‘/api/folders’를 활용해 주세요.
- [ ] 폴더 페이지에서 전체 링크 데이터를 받아올 때 ‘/api/links’, 특정 폴더의 링크를 받아올 때 ‘/api/links?folderId={folderId}’를 활용해 주세요.
- [ ] 유효한 access token이 있는 경우 ‘/api/users’로 현재 로그인한 유저 정보를 받아 상단 네비게이션 유저 프로필을 보이게 해주세요.

## 심화 구현 사항
- [ ] 리퀘스트 헤더에 인증 토큰을 첨부할 때 axios interceptors 또는 이와 유사한 기능을 활용해 주세요.

## 추가 구현 사항
- [ ] search 부드럽게 적용하기. (spa로 이용)