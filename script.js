const newCard = document.createElement("div");
newCard.className = 'card';
newCard.innerHTML= `
            <img
               src="https://cloud-computing-lectures-likhilesh-abcdxyz.s3.ap-south-1.amazonaws.com/likhi-laptop.jpg" />
           <div class="product-info">
               <h4>Macbook Pro M1 - 2022</h4>
               <p>Price: $1100</p>
               <p>Rating: 4.9⭐️</p>
           </div>
`;

const root = document.getElementById('root');
root.appendChild(newCard);
