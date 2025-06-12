const section = document.getElementById('messier-section');
const asides = document.getElementById('messier-asides');

const messierNames = [
    "게 성운", "구상성단 M2", "구상성단 M3", "구상성단 M4", "구상성단 M5",
    "나비 성단", "Ptolemy 성단", "라군 성운", "구상성단 M9", "구상성단 M10",
    "구상성단 M11", "구상성단 M12", "구상성단 M13", "구상성단 M14", "구상성단 M15",
    "구상성단 M16", "독수리 성운", "오메가 성운", "구상성단 M19", "구상성단 M20",
    "삼열 성운", "구상성단 M22", "구상성단 M23", "구상성단 M24", "구상성단 M25",
    "구상성단 M26", "구상성단 M27", "덤벨 성운", "구상성단 M29", "구상성단 M30"
  ];

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