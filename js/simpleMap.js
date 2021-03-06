//지도 그리기 (위도, 경도, 지도레벨)
function showMap(getLatitude, getLongitude, getLevel, getUse, getInfoUse, getInfoTxt) {
    var container = document.getElementById('map'); // 지도를 표시할 div 의 id
    var latitudeNum; //위도
    var longitudeNum; //경도
    var levelNum; //지도레벨

    var positionNum = savePosition(getLatitude, getLongitude); //위치 정보 저장
    latitudeNum = positionNum.latitudeNum;
    longitudeNum = positionNum.longitudeNum;

    levelNum = saveLavel(getLevel); //지도크기 저장


    //levelNum = 3;
    var options = {
        center: new kakao.maps.LatLng(latitudeNum, longitudeNum),
        level: levelNum
    };

    var map = new kakao.maps.Map(container, options);

    // 인포윈도우 ///////////////////////////////////////////////////////////////////////////////
    
    //마커 체크
    if(typeof getUse != 'boolean') {
        console.log("마커 사용여부를 잘못 입력하였습니다. 마커가 표시되지 않습니다.");
        return;
    }

    // 마커 사용 안함
    if(getUse == false) {
        return;
    }   

    var position = new kakao.maps.LatLng(latitudeNum, longitudeNum); // 마커위치

    // 마커생성
    var marker = new kakao.maps.Marker({
        position: position,
        clickable: true //마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    // 마커를 지도에 표시
    marker.setMap(map);

    // 표시할 인포윈도우
    var iwContent = '<div style="padding:5px;">' + getInfoTxt + '</div>',
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
    });

    if(getInfoUse == true) {
        infowindow.open(map, marker);
    }    

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
    });
}

//위치 저장 (위도, 경도)
function savePosition(getLatitude, getLongitude){
    
    //위도, 경도 체크
    if(isNaN(getLatitude) == false && isNaN(getLongitude) == false){ //숫자 확인 

        if(isExist(getLatitude) && isExist(getLongitude)){ //빈값 확인
            return {
                latitudeNum: getLatitude,
                longitudeNum: getLongitude
            };
        }else{
            console.log("위도/경도의 값을 입력하지 않아 지도 중심좌표 값이 출력됩니다.");

            return {
                latitudeNum: 33.450701,
                longitudeNum: 126.570667
            };
        }
    
    }else {
        console.log("위도/경도의 값이 잘못되어 지도 중심좌표 값이 출력됩니다.");

        return {
                latitudeNum: 33.450701,
                longitudeNum: 126.570667
        };
    }
}

//지도레벨 저장 (지도레벨)
function saveLavel(getLevel){
    var setLevel = getLevel;
    
    //지도레벨 체크
    if(isNaN(setLevel) == false){ //숫자 확인
        
        if(isExist(setLevel)){ //빈값 확인        
            
            return setLevel;
        }else{
            console.log("지도의 레벨값을 입력하지 않아 지도 기본레벨 값이 출력됩니다.")

            return 3;                   
        }
        
    }else {
        console.log("지도레벨의 값을 잘못 입력하여 지도 기본레벨 값이 출력됩니다.");

        return 3;               
    }
}

//빈값 체크
function isExist(val) { 

    if (val == "" || val == null || val == undefined || val == "undefined" || (val != null && typeof val == "object" && !Object.keys(val).length)) { 
        return false; 
    } 
    else {
         return true;
    } 
}
