// 1. Продолжаем реализовывать модуль корзины:

// a. Добавлять в объект корзины выбранные товары 
// по клику на кнопке «Купить» без перезагрузки страницы;

// b. Привязать к событию покупки товара пересчет корзины
//  и обновление ее внешнего вида.

// 2. * У товара может быть несколько изображений. 
// Нужно:

// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
// b. Реализовать функционал перехода между картинками внутри модального окна.
document.addEventListener('DOMContentLoaded', e => {

    class Product {
        constructor({ ...params }) {
            this.name = params.name,
                this.price = params.price,
                this.urls = params.urls,
                this.description = params.description
        }
    };

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
// functions creators
    function cardCreator(item) {
        const $card = document.createElement('div');
        $card.className = 'card';
        document.body.appendChild($card);

        const $pic = document.createElement('img');
        let $picSrc = document.createAttribute('src');
        $picSrc.value = item.urls[0];
        $pic.setAttributeNode($picSrc)

        const $name = document.createElement('h4');
        $name.className = 'text';
        $name.innerText = item.name;

        const $price = document.createElement('span');
        $price.className = 'text'
        $price.innerText = item.price + ' $';

        const $buttonAdd = document.createElement('button')
        $buttonAdd.className = 'button add';
        $buttonAdd.innerText = "Buy"
        $buttonAdd.addEventListener('click', (e) => {
            e.preventDefault();

            bascket.push(item)
            alert(`${item.name} added to your shopping bascket`)
        });

        const $buttonShow = document.createElement('button')
        $buttonShow.className = 'button show';
        $buttonShow.innerText = "Show";
        $buttonShow.addEventListener('click', (e) => {
            e.preventDefault();

            modalWindow(item)
        });
        $card.appendChild($pic)
        $card.appendChild($name)
        $card.appendChild($price)
        $card.appendChild($buttonAdd)
        $card.appendChild($buttonShow)
    }

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
// -----------------
    catalog.forEach(item => {
        cardCreator(item);
    })

    $bascket = document.createElement('div');
    $bascket.className = 'bascket';
    document.body.appendChild($bascket);

    window.setInterval(checkBascket, 2000);
    function checkBascket() {
        $bascket.innerText = `You have ${bascket.length} items`
    };

    
})