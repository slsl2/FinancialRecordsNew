# FinancialRecordsNew

## 배포 웹 주소
https://financial-records-new-wyws.vercel.app/
![image](https://github.com/slsl2/FinancialRecordsNew/assets/97243275/5c92aa02-ca93-4c52-8fdf-656b5f9103fd)

## 필수 구현 사항 모두 완료
- 회원가입 / 로그인 기능
- 프로필 수정
- json-server 이용하여 지출 데이터에 대한 CRUD 구현
- axios 사용
- 지출 데이터 관련 API 통신 시 Tanstack Query 사용
- 유저 본인의 record만 클릭 시 수정/삭제 창으로 넘어갈 수 있도록 구현

## 기타 사항
- sweetalert 사용하여 alert, confirm 창 대체
- accessToken 60분 유효기간 부여, 만료된 경우 로그아웃 처리
- Context 사용해 유저 정보 관리

## 미해결 이슈
- 프로필 수정 시, 업로드를 새로 하지 않으면 프로필 사진이 null로 저장되는 이슈:
  새로 업로드 하지 않고 저장하면 기존의 프로필 사진이 지워짐
