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

function addRandomFreelancer(){
    const freelancers = people[Math.floor(math.random() * people.length)];
    freelancers.push(freelancers);
}

function averagePriceUpdate(){
    const total = initialFreelancers.reduce((sum, freelancers) => sum+freelancers.price, 0);
    return (total/freelancers.length).toFixed(2);
}

function render(){
    const freelancerList = document.querySelector(`#freelancerList`);
    const averagePriceList = document.querySelector(`#averagePrice`);
    const listings = freelancers.map((freelancers) =>{
        const listings = document.createElement("div");
        listings.classList.add("freelancerListing");
        listings.innerHTML = `<p>Name: ${freelancers.name}<p>
                              <p>Occupation: ${freelancers.occupation}
                              <p>Starting Price: $${freelancers.price}`;
        return listings;
    });

    freelancerList.replaceChildren(...listings);

    averagePriceList.textContent = `The average starting price is: $${averagePriceUpdate()}`;
}

setInterval(() =>{
    addRandomFreelancer();
    render();
},1800);

render();