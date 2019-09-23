// 1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
// 2. Добавьте значения по умолчанию для аргументов функции. 
// Как можно упростить или сократить запись функций?

document.addEventListener('DOMContentLoaded', e => {
    
    class Product {
        constructor({ ...params }) {
            this.name = params.name,
            this.price = params.price,
            this.urls = params.urls,
            this.description = params.description
        }

        getCard(){
            const $card = document.createElement('div');
        $card.className = 'card';
        document.body.appendChild($card);
        
        const $pic = document.createElement('img');
        let $picSrc = document.createAttribute('src');
        $picSrc.value = this.urls[0];
        $pic.setAttributeNode($picSrc)
        
        const $name = document.createElement('h4');
        $name.className = 'text';
        $name.innerText = this.name;

        const $price = document.createElement('span');
        $price.className = 'text'
        $price.innerText = this.price + ' $';

        const $buttonAdd = document.createElement('button')
        $buttonAdd.className = 'button add';
        $buttonAdd.innerText = "Buy"
        $buttonAdd.addEventListener('click', (e) => {
            e.preventDefault();
            
            bascket.push(this)
            alert(`${this.name} added to your shopping bascket`)
        });
        
        const $buttonShow = document.createElement('button')
        $buttonShow.className = 'button show';
        $buttonShow.innerText = "Show";
        $buttonShow.addEventListener('click', (e) => {
            e.preventDefault();
            
            modalWindow(this)
        });
        
        
        $card.appendChild($pic)
        $card.appendChild($name)
        $card.appendChild($price)
        $card.appendChild($buttonAdd)
        $card.appendChild($buttonShow)   
    }
};

    function modalWindow(item) {

    const $modal = document.createElement('div');
    $modal.className = 'modal'
    document.body.appendChild($modal)

    const $desciption = document.createElement('p')
    $desciption.innerText = `${item.name}\n
    Desciption : ${item.description}\n
    Best price : ${item.price} $\n\n\n`

    const $pic = document.createElement('img');
    let $picSrc = document.createAttribute('src');
    $pic.setAttributeNode($picSrc)
    $pic.className = 'modal-pic'
    $picSrc.value = item.urls[0];

    let i = 0
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 39) {
            ++i
            i >= item.urls.length ? $picSrc.value = './sorry.png' : $picSrc.value = item.urls[i];
        } else if (event.keyCode === 37) {
            --i
            i <= 0 ? $picSrc.value = './sorry.png' : $picSrc.value = item.urls[i];
        }
    });

    const $footer = document.createElement('span');
    $footer.innerText = 'Tips: press arrow left/right to switch';


    const $closeButton = document.createElement('button');
    $closeButton.className = 'button'
    $closeButton.innerText = '↪️'
    $closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        $modal.remove()
    })

    $modal.appendChild($pic);
    $modal.appendChild($desciption);
    $desciption.appendChild($footer);
    $modal.appendChild($closeButton)
};
// товары
    let iphone11 = new Product({
    name: 'iphone11',
    price: 500,
        urls: [
            './H4lo4nC1gVPUM3IhtmPj8bDpXvO9cMcsWwtid8h77IOHV1546923229822.jpg',
            './download.jpeg',
            './download (1).jpeg'
        ],
        description: 'the latest version of apple phones'
    });

    let iphoneXR = new Product({
        name: 'iphoneXR',
        price: 5000,
        urls: [
            './xrx.jpg',
            './xrxr.jpeg',
            './xrxrxr.jpeg'
        ],
        description: 'best version of apple phones'
    });

    let catalog = [iphone11, iphoneXR];
    let bascket = [];

//отрисовка
    catalog.forEach(item => {
    item.getCard()
    })

    $bascket = document.createElement('div');
    $bascket.className = 'bascket';
    document.body.appendChild($bascket);

    window.setInterval(checkBascket, 2000);
    function checkBascket() {
        $bascket.innerText = `You have ${bascket.length} items`
    };

})