const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const initialFreelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "teacher"},
]

function addRandomFreelancer() {
    if(initialFreelancers.length >= 7){
        console.log("Maximum number of freelancers reached!");
        return;
    }
    const randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    initialFreelancers.push(randomFreelancer);
}

function averagePriceUpdate() {
    const total = initialFreelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return (total / initialFreelancers.length).toFixed(2);
}

function render(){
    const freelancerList = document.querySelector(`#freelancerList`);
    const averagePriceList = document.querySelector(`#averagePrice`);
    const listings = initialFreelancers.map((freelancer) => {
        const listing = document.createElement("div");
        listing.classList.add("freelancerListing");
        listing.innerHTML = `
            <p>Name: ${freelancer.name}</p>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.price}</p>
        `;
        return listing;
    });

    freelancerList.replaceChildren(...listings);

    averagePriceList.textContent = `The average starting price is: $${averagePriceUpdate()}`;
}

setInterval(() =>{
    addRandomFreelancer();
    render();
},1800);

render();