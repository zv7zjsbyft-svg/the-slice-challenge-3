// EDIT ALL LIVE CAMPAIGN FIGURES AND LINKS HERE.
export const campaign = {
  targetAmount: 100000,
  pizzaPrice: 12,
  charityPerPizza: 7,
  costPerPizza: 5,
  pizzasSold: 26,
  raisedAmount: 182,
  email: "theslicechallenge@outlook.com",
  instagramUrl: "#", // Replace with the real Instagram profile URL.
  donateUrl: "#charities",
  charityTarget: 10000,
  charities: [
    { name:"Cancer Research UK", description:"Funding research into the prevention, diagnosis and treatment of cancer.", url:"https://www.cancerresearchuk.org/get-involved/donate" },
    { name:"Macmillan Cancer Support", description:"Providing practical, medical, emotional and financial support for people living with cancer.", url:"https://www.macmillan.org.uk/donate" },
    { name:"British Heart Foundation", description:"Funding research into heart and circulatory diseases.", url:"https://www.bhf.org.uk/how-you-can-help/donate" },
    { name:"RSPCA", description:"Rescuing animals and working to prevent cruelty and neglect.", url:"https://www.rspca.org.uk/getinvolved/donate/online" },
    { name:"Guide Dogs", description:"Helping people with sight loss live actively and independently.", url:"https://www.guidedogs.org.uk/how-you-can-help/donating/" },
    { name:"Marie Curie", description:"Providing care and support for people with terminal illnesses and their families.", url:"https://www.mariecurie.org.uk/donate" },
    { name:"Alzheimer’s Research UK", description:"Funding research into the causes, diagnosis, prevention and treatment of dementia.", url:"https://www.alzheimersresearchuk.org/how-you-can-help/donate/" },
    { name:"RNLI", description:"Saving lives at sea through lifeboat crews, lifeguards and water-safety work.", url:"https://rnli.org/support-us/give-money/donate" },
    { name:"Alzheimer’s Society", description:"Supporting people affected by dementia and funding dementia research.", url:"https://www.alzheimers.org.uk/get-involved/donate" },
    { name:"Great Ormond Street Hospital Charity", description:"Supporting seriously ill children through research, equipment and family services.", url:"https://www.gosh.org/donate/" },
  ],
  events: [
    { name:"Helen & John’s Wedding", pizzas:26, raised:182, note:"26 pizzas sold × £7 to charity" },
  ],
} as const;
