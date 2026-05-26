// 웹페이지가 켜지면 data.json의 정보를 가져와서 화면에 카드를 만듭니다.
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        
        data.forEach(item => {
            // 가져온 데이터로 HTML 블록을 조립합니다.
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <h3>${item.type} (${item.artno})</h3>
                <p><strong>규격:</strong> ${item.specs}</p>
                <p><strong>차지하는 공간:</strong> ${item.size}</p>
            `;
            productList.appendChild(card);
        });
    })
    .catch(error => console.error('데이터를 불러오는데 실패했습니다:', error));
