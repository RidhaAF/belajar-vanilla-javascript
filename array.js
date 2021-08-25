const namaBuah = ['Apel', 'Jeruk', 'Mangga', 'Pisang', 'Pepaya'];

namaBuah.forEach(function (item, index, array) {
    console.log(item, index);
});

namaBuah.push('Kiwi');

console.log(namaBuah);

namaBuah.pop();

console.log(namaBuah);

namaBuah.shift();

console.log(namaBuah);