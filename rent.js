let flats = [
    {
        flatNumber: 1,
        tenantName: "Ravish",
        totalRent: 20000,
        rentPaid: 18000,
    },
    {
        flatNumber: 2,
        tenantName: "Sooraj",
        totalRent: 15000,
        rentPaid: 15000,
    },
    {
        flatNumber: 3,
        tenantName: "Akash",
        totalRent: 25000,
        rentPaid: 25000,
    },
    {
        flatNumber: 4,
        tenantName: "Sanjay",
        totalRent: 18000,
        rentPaid: 15000,
    },
    {
        flatNumber: 5,
        tenantName: "Akshay",
        totalRent: 24000,
        rentPaid: 24000,
    },
];

totalEarning = 0;
rentPending = 0;

const rentDueFlats = flats.filter((flat) => flat.totalRent - flat.rentPaid > 0);
rentDueFlats.forEach((flat) =>
    console.log(
        `Flat Number:${flat.flatNumber}, Tenant Name:${
            flat.tenantName
        }, Rent Due:${flat.totalRent - flat.rentPaid}`
    )
);

const totalRent = flats.reduce(
    (totalRent, flat) => totalRent + flat.rentPaid,
    0
);

console.log(`Total Rent Earned: ${totalRent}`);

flats = flats.map((flat) => {
    return { ...flat, rentLeft: flat.totalRent - flat.rentPaid };
});

console.log(flats);

const pendingRent = flats.reduce(
    (totalRentLeft, flat) => totalRentLeft + flat.rentLeft,
    0
);

console.log(`Total Rent Left: ${pendingRent}`);
