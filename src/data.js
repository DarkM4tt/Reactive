const listings = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomDate() {
  const minDate = new Date("2023-02-01");
  const maxDate = new Date("2023-02-28");
  const randomTimestamp =
    minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
  const randomDate = new Date(randomTimestamp);
  const formattedDate = `${randomDate.getFullYear()}-${(
    randomDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${randomDate.getDate().toString().padStart(2, "0")}`;
  return formattedDate;
}

function getRandomPropertyType() {
  const propertyTypes = [
    "Apartments",
    "Houses",
    "Townhouse",
    "Duplex",
    "Studio",
    "Loft",
    "Condominium",
  ];
  return propertyTypes[getRandomInt(propertyTypes.length)];
}

function getRandomImageURL() {
  const random = getRandomInt(100);
  return `https://source.unsplash.com/1600x900/?house=${random}`;
}

for (let i = 0; i < 500; i++) {
  const id = i + 1;
  const imgURL = getRandomImageURL();
  const price = getRandomInt(12001) + 8000; // Random price between 8000 and 20000
  const name = `Listing ${id}`;
  const location = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ][getRandomInt(28)];
  const bedrooms = getRandomInt(5) + 1;
  const bathrooms = getRandomInt(7) + 1;
  const area = `${getRandomInt(10)}x${getRandomInt(10)} m²`;
  const when = getRandomDate();
  const propertyType = getRandomPropertyType();
  listings.push({
    id,
    imgURL,
    price,
    name,
    location,
    bedrooms,
    bathrooms,
    area,
    when,
    propertyType,
  });
}

export default listings;
