const section = document.getElementById('messier-section');
const asides = document.getElementById('messier-asides');

const messierNames = [
    "게 성운", "구상 성단 M2", "구상 성단 M3", "구상 성단 M4", "구상 성단 M5",
    "나비 성단", "프톨레마이오스 성단", "석호 성운", "구상 성단 M9", "구상 성단 M10",
    "야생오리 성단", "구상 성단 M12", "헤르쿨레스 대(大)성단", "구상 성단 M14", "구상 성단 M15",
    "독수리 성운", "오메가 성운", "산개 성단 M18", "구상 성단 M19", "삼렬 성운",
    "산개 성단 M21", "구상 성단 M22", "산개 성단 M23", "구상 성단 M24(우리 은하 궁수자리 팔의 일부분)", "산개 성단 M25",
    "산개 성단 M26", "아령 성운", "구상 성단 M28", "산개 성단 M29", "구상 성단 M30"
  ];
const link = [
    "https://namu.wiki/w/%EA%B2%8C%20%EC%84%B1%EC%9A%B4",
];

for(let i=2; i<=30; i++) {
    url = "https://namu.wiki/w/%EB%A9%94%EC%8B%9C%EC%97%90%20" + i 
    link.push(url);
}

for (let i = 1; i <= 30; i++) {
    const num = i.toString().padStart(2, '0');

    
    const article = document.createElement('article');
    article.innerHTML = `
        <div class="inner">
            <div class="txt">
                <h2>${num}</h2>
                <p>메시에 목록 ${i}번입니다.</p><br>
                <p class="click">(클릭)</p>
            </div> 
            <figure>
                <img src="pic/M${i}.jpg" alt="M${i}사진 안보임">
            </figure>
        </div>
    `;
    section.appendChild(article);

    const aside = document.createElement('aside');
    aside.classList.add('messier-aside');

    aside.innerHTML = `
        <div class="txt">
            <h1>${num}</h1>
            <p>메시에 목록 ${i}번 설명입니다.</p>
            <a href="${link[i-1]}" target="_blank"> 설명 링크 </a>
            <p>${messierNames[i-1]}</p>
            <span class="close">CLOSE</span>  
        </div>
        <figure>
            <img src="pic/M${i}.jpg" alt="M${i}사진 안보임">
        </figure>
    `;
    asides.appendChild(aside);

    article.addEventListener('click', () => {
        aside.classList.add('on');
    });

    aside.querySelector('.close').addEventListener('click', () => {
        aside.classList.remove('on');
    });
}