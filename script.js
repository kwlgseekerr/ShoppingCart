document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.getElementById('total-price');
    
    function updateTotalPrice() {
        let total = 0;
        items.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            total += price * quantity;
        });
        totalPriceElement.innerText = total;
    }

    items.forEach(item => {
        const plusBtn = item.querySelector('.plus-btn');
        const minusBtn = item.querySelector('.minus-btn');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');
        const quantityElement = item.querySelector('.quantity');

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity + 1;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 1) {
                quantityElement.innerText = quantity - 1;
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});
