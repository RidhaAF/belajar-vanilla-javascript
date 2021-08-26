const Person = {
    firstName: 'Ridha',
    lastName: 'Ahmad',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    weight: 68,
    height: 1.7,
    isWeightIdeal: function () {
        return this.weight / (this.height * this.height);
    },
};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());

const countries = {
    ID: {
        province: ['Bali', 'Jawa Barat', 'DKI Jakarta', 'Kalimantan Tengah', 'Sumatera Selatan'],
        city: ['Denpasar', 'Jakarta', 'Bandung', 'Medan', 'Palembang'],
    },
    MY: {},
};

console.log(countries.ID.city[2]);