const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];

const getCarName = (cars, position) => {
    const gettingCar = cars.splice(position, position)
    return gettingCar.join(' - ')

}

console.log(getCarName(nomes, 3))