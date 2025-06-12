const section = document.getElementById('messier-section');
const asides = document.getElementById('messier-asides');

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