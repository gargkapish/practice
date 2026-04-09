const title = "Macbook Pro M2 - 2022";
const price = "$31414";
const rating = "Rating: 5⭐️"



const newCard = document.createElement("div");
newCard.className = 'card';
newCard.innerHTML= `
            <img
               src="https://cloud-computing-lectures-likhilesh-abcdxyz.s3.ap-south-1.amazonaws.com/likhi-laptop.jpg" />
           <div class="product-info">
               <h4> ${title}</h4>
               <p> ${price} </p>
               <p> ${rating}</p>
           </div>
`;

const root = document.getElementById('root');
root.appendChild(newCard);
