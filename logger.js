document.addEventListener("DOMContentLoaded", function() {
  // URL 파라미터 추출 함수
  // function getParameterByName(name, url) {
  //     if (!url) url = window.location.href;
  //     name = name.replace(/[\[\]]/g, "\\$&");
  //     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  //         results = regex.exec(url);
  //     if (!results) return null;
  //     if (!results[2]) return '';
  //     return decodeURIComponent(results[2].replace(/\+/g, " "));
  // }

  // 클라이언트의 User Agent 정보 가져오기
  var userAgent = navigator.userAgent;

  // 현재 URL의 파라미터를 가져오기
  var parameters = new URLSearchParams(window.location.search);
  var parameter = parameters.get('key');

  // Referrer 가져오기
  var referrer = document.referrer;
  
  var jsonData = {
    UserAgent: userAgent, 
    Key: parameter,
    Referrer: referrer
  };

  // POST 요청 생성
  var request = new XMLHttpRequest();
  var endpointUrl = 'https://enhp8mapuw8gp.x.pipedream.net';
  request.open('POST', endpointUrl, true);
  request.setRequestHeader('Content-Type', 'application/json');
  
  // User Agent 정보와 URL 파라미터를 전송
  request.send(JSON.stringify(jsonData));
});