const images = [
    {
        preview: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDB8fG1vdW50YWluc3xlbnwwfHx8fDE2NTM1NjM5NzY&ixlib=rb-1.2.1&q=80',
        original: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1200&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDB8fG1vdW50YWluc3xlbnwwfHx8fDE2NTM1NjM5NzY&ixlib=rb-1.2.1&q=80',
        description: 'Італія, Доломіти'
    },
    {
        preview: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxnb2xkZW4lMjBob3Vyc2V8ZW58MHx8fHwxNjUzNTYzOTgw&ixlib=rb-1.2.1&q=80',
        original: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1200&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxnb2xkZW4lMjBob3Vyc2V8ZW58MHx8fHwxNjUzNTYzOTgw&ixlib=rb-1.2.1&q=80',
        description: 'Швейцарія, Альпи'
    },
    {
        preview: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG1vdW50YWluc3xlbnwwfHx8fDE2NTM1NjM5NzY&ixlib=rb-1.2.1&q=80',
        original: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1200&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG1vdW50YWluc3xlbnwwfHx8fDE2NTM1NjM5NzY&ixlib=rb-1.2.1&q=80',
        description: 'Норвегія, Лофотенські острови'
    },
    {
        preview: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluc3xlbnwwfHx8fDE2NTM1NjM5NzY&ixlib=rb-1.2.1&q=80',
        original: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1200&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluc3xlbnwwfHx8fDE2NTM1NjM5NzY&ixlib=rb-1.2.1&q=80',
        description: 'США, Колорадо'
    },
    {
        preview: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluc3xlbnwwfHx8fDE2MjI1OTg1ODU&ixlib=rb-1.2.1&q=80',
        original: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=960&w=1280&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluc3xlbnwwfHx8fDE2MjI1OTg1ODU&ixlib=rb-1.2.1&q=80',
        description: 'Італія, Доломіти'
    },
    {
        preview: 'https://wallpapers.com/images/featured/beautiful-mountain-ws98i8hty7cg93pw.jpg',
        original: 'https://wallpapers.com/images/featured/beautiful-mountain-ws98i8hty7cg93pw.jpg',
        description: 'Швейцарія, Альпи'
    },
    {
        preview: 'https://st5.depositphotos.com/47958670/65260/i/450/depositphotos_652608860-stock-photo-beautiful-sunset-mountains.jpg',
        original: 'https://st5.depositphotos.com/47958670/65260/i/450/depositphotos_652608860-stock-photo-beautiful-sunset-mountains.jpg',
        description: 'Норвегія, Лофотенські острови'
    },
    {
        preview: 'https://hips.hearstapps.com/hmg-prod/images/mt-assiniboine-provincial-park-at-sunrise-royalty-free-image-1623253564.jpg',
        original: 'https://hips.hearstapps.com/hmg-prod/images/mt-assiniboine-provincial-park-at-sunrise-royalty-free-image-1623253564.jpg',
        description: 'США, Колорадо'
    },
    {
        preview: 'https://hips.hearstapps.com/hmg-prod/images/mount-kirkjufell-iceland-iceland-landscape-cold-royalty-free-image-1623253139.jpg',
        original: 'https://hips.hearstapps.com/hmg-prod/images/mount-kirkjufell-iceland-iceland-landscape-cold-royalty-free-image-1623253139.jpg',
        description: 'Італія, Доломіти'
    },
    {
        preview: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70',
        original: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70',
        description: 'Швейцарія, Альпи'
    },
    {
        preview: 'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
        original: 'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
        description: 'Норвегія, Лофотенські острови'
    },
    {
        preview: 'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
        original: 'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
        description: 'Італія, Доломіти'
    },
];

const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            <div class="gallery__description">${description}</div>
        </a>
    </li>
`;

const galleryMarkup = images.map(createGalleryItem).join('');

galleryContainer.innerHTML = galleryMarkup;

let currentIndex = 0;

const showModal = (url) => {
    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${url}" width="800" height="600">
            <button class="prev">←</button>
            <button class="next">→</button>
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('.prev').onclick = () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateModalImage(instance, images[currentIndex].original);
            };
            instance.element().querySelector('.next').onclick = () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateModalImage(instance, images[currentIndex].original);
            };
        }
    });

    instance.show();
};

const updateModalImage = (instance, url) => {
    const img = instance.element().querySelector('img');
    img.src = url;
};

galleryContainer.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

    currentIndex = images.findIndex(image => image.original === event.target.dataset.source);
    showModal(event.target.dataset.source);
});