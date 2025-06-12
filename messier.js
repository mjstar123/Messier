const section1 = document.getElementById('num');
const section2 = document.getElementById('messier-section');
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

const information = [
    "황소자리 방향에 있는 초신성 잔해이자 중심부에 위치한 펄서의 영향을 받는 성운이다.",
    "물병자리에 있는 구상성단이다.",
    "사냥개자리에 위치한 구상성단이다.",
    "전갈자리에 있는 구상성단이다. ",
    "뱀자리의 구상성단이다.",
    "전갈자리에 위치한 산개성단이다.",
    "전갈자리에 있는 산개성단이다.",
    "궁수자리에 있는 발광 성운이자 H II영역이다.",
    "뱀주인자리에 있는 구상성단이다.",
    "뱀주인자리에 있는 구상성단이다.",
    "방패자리에 있는 산개성단이다",
    "뱀주인자리에 있는 구상성단이다.",
    "헤르쿨레스자리에 있는 구상성단이다.",
    "뱀주인자리에 있는 구상성단이다.",
    "페가수스자리에 있는 구상성단이다.",
    "뱀자리에 있는 산개성단을 품고 있는 발광 성운이자 전리수소영역이다.",
    "궁수자리에 위치한 산개성단을 품고 있는 발광성운이자 전리수소영역이다.",
    "궁수자리에 있는 산개성단이다.",
    "뱀주인자리에 있는 구상성단이다.",
    "궁수자리에 위치한 내부에 산개성단을 갖고 있는 발광 성운이자 전리수소영역이다.",
    "궁수자리에 있는 산개성단이다.",
    "궁수자리에 있는 구상성단이다.",
    "궁수자리에 있는 산개성단이다.",
    "우리 은하의 부수적인 나선팔인 궁수자리-용골자리 팔의 일부분으로, 말 그대로 그냥 은하수 일부이다.",
    "궁수자리에 있는 산개성단이다.",
    "방패자리에 있는 산개성단이다.",
    "여우자리에 있는 행성상성운이다.",
    "궁수자리에 있는 구상성단이다.",
    "백조자리에 있는 산개성단이다.",
    "염소자리에 있는 구상성단이다."
];

const menum = document.createElement("input");
menum.name="number";
menum.placeholder = "1에서 30까지 숫자를 입력하세요.";
section1.appendChild(menum);

menum.addEventListener("keyup",(event) => {
    if(event.key === 'Enter') {
        const keyValue = menum.value;
        const number = document.querySelectorAll('#messier-asides aside')[keyValue - 1];
        number.classList.add('on');
        menum.value = "";
    }
});

const btn = document.createElement("button");
btn.textContent = "입력";
section1.appendChild(btn);
btn.addEventListener('click', () => {
    const btnvalue = menum.value;
    const number = document.querySelectorAll('#messier-asides aside')[btnvalue - 1];
    number.classList.add('on');
    menum.value = "";
})

for (let i = 1; i <= 30; i++) {
    const num = i.toString().padStart(2, '0');

    
    const article = document.createElement('article');
    article.innerHTML = `
        <div class="inner">
            <div class="txt">
                <h2>${num}</h2>
                <p>메시에 목록 ${i}번입니다.</p><br>
                <span class="click">(클릭)</span>
            </div> 
            <figure>
                <img src="pic/M${i}.jpg" alt="M${i}사진 안보임">
            </figure>
        </div>
    `;
    section2.appendChild(article);

    let aside = document.createElement('aside');

    aside.innerHTML = `
        <div class="txt">
            <h1>${num}</h1>
            <p>메시에 목록 ${i}번 설명입니다.</p>
            <a href="${link[i-1]}" target="_blank"> 설명 링크 </a>
            <p>${messierNames[i-1]}</p>
            <p>${information[i-1]}</p>
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