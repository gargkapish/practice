
const products = [
    {
        title: "Bag",
        price: "$131",
        rating: "4.2"
    },
    {
        title: "Mat",
        price: "$242",
        rating: "3.5"
    },
    {
        title: "Laptop",
        price: "$3524",
        rating: "3.6"
    }
]

function main(arr){
for (let i=0; i<arr.length; i++){
const newCard = document.createElement("div");
newCard.className = 'card';
newCard.innerHTML= `
            <img
               src="https://cloud-computing-lectures-likhilesh-abcdxyz.s3.ap-south-1.amazonaws.com/likhi-laptop.jpg" />
           <div class="product-info">
               <h4> ${arr[i].title}</h4>
               <p> Price: ${arr[i].price} </p>
               <p> Raing: ${arr[i].rating}⭐️</p>
           </div>
`;

    const root = document.getElementById("root");
    root.appendChild(newCard);
    }
}

main(products);

