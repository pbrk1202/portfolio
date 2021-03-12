## 포트폴리오 및 개인 프로젝트에서만 사용하는 소스 입니다.  
#### 사이트 제작 시 발생한 문제점들과 개선해야되는 방향성 위주로 작성되었습니다.
#### 해당 사이트는 반응형으로 제작되었고, 현재 서브페이지 업데이트 중입니다.
#### 사이트 : http://pbrk.dothome.co.kr/
--------------------
* 사이트에서 제공하는 미디어 쿼리 영역입니다.
  - max-width: 1200px
  - max-width: 768px
--------------------
#### jQuery를 이용하여 include 하는 방식을 선택하였습니다.  

```
    function includeLayout(){
        var includeArea = $('[data-include]');
        var self, url;
        $.each(includeArea, function() {
            self = $(this);
            url = self.data("include");
            self.load(url, function() {
                self.removeAttr("data-include");
            });
        });
    }  
```


#### 출처 : https://webclub.tistory.com/548   
--------------------
#### 웹표준,각각의 웹브라우저 테스트는 추후 진행 예정입니다.
* 각 페이지별 작업 내역 확인 방법 입니다.
  - 완료
    + 모바일 화면 / 반응형 화면 테스트 이상 없음
  - Mobile 완료
    + 반응형 화면 테스트 이상 없음
  - 1차 완료
    + PC 화면 테스트 이상 없음
  - PC 작업 / Mobile 작업
    + PC 화면 / Mobile 화면 제작 중
--------------------
* reset
  - 초기화 코드 출처 입니다.
    + http://html5doctor.com
    + http://richclarkdesign.com
--------------------
* header (Mobile 완료)
  - PC <-> Mobile 화면간에 메뉴창을 분리하였습니다.

* header_subpage (1차 완료)
  - 진행 예정
    + select option을 ul li로 변경할 예정 입니다.
      + 지정할 수 있는 스타일의 한계
    + 모바일 메뉴 제작
--------------------
* footer (Mobile 완료)
  - max-width: 1200px
    + 서비스 부분 제거
    + nav부분을 중앙으로 정렬
  - max-width: 768px
    + nav부분을 수직구조로 변경 (모바일화면에서 줄바꿈 현상이 발생)
--------------------
#### 메인화면
* index
  - includeLayout() 함수
    + https://webclub.tistory.com/548   

* banner01 (Mobile 완료)
  - swiper를 이용하여 배너 부분을 제작하였습니다.
    + http://swiperjs.com
  - max-width: 1200px
    + 구조상 전체 크기로 설정했을 시, 오른쪽 여백의 크기를 가지고 갈 수 밖에 없는데 사이즈가 변경됨에 따라 이미지를 전체 사이즈로 해도 빈공간이 있기 때문에, 구조가 틀어지지 않아 가로 크기를 100%로 설정하였습니다.
  - max-width: 768px
    + %로 설정된 이미지로 인하여 해당 사이즈가 되면 이미지의 크기가 작아져 이미지 식별에 불편함이 생겨, 고정적인 세로값을 추가하였습니다.

* popup01 (완료)
  - 1200px 이하에서는 제공되지 않습니다.

* magazine01 (보류)
  - 진행 예정
    + 1개의 슬라이더는 문제 없음
    + 2개의 슬라이더 이상 사용 시, paging 부분에서 구조적인 문제가 생겨 더 이상의 진행을 보류 합니다.
    + 화면 전환하는 스크립트 부분을 제작하여 추가 예정입니다.

* media01 (Mobile 완료)
* card01 (Mobile 완료)
--------------------
* product 폴더
  - prd01_introduce (Mobile 완료)
    + 사이즈 고정 변경
  - pro01_feature (Mobile 완료)
--------------------
* gallery 폴더
  - gallery_top (Mobile 완료)
  - gallery_model (Mobile 완료)
  - pager_model (Mobile 완료)
--------------------
* customer 폴더
  - customer_model (Mobile 완료)
  - customer_postlist (Mobile 완료)
  - agency_top (Mobile 완료)
  - customer/agency_model (Mobile 완료)
    - simpleMap.js (Kakao 지도 API를 사용하였습니다.)
-------------------
### simpleMap.js
#### 함수를 제작하여 지도, 마커, 인포윈도우까지 표시되도록 제작하였습니다.
#### 위도, 경도, 지도크기, 마커사용여부(true/false), 인포윈도우 표시여부(true/false), 인포윈도우 내용
```  
showMap(37.39887429439286, 126.9210849346501, 3, true, true, "그린컴퓨터학원");  
```
--------------------
* company 폴더
  - comp01_banner (1차 완료)
  - comp01_introduce (1차 완료)
--------------------
* enviroment 폴더
  - env01_banner (1차 완료)
  - env01_introduce (1차 완료)
--------------------
* business 폴더
  - busi01_banner (1차 완료)
  - busi01_introduce (1차 완료)
--------------------
