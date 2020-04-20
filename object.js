let city1 = {
    name : 'Amsterdam',
    population : 10**7,

    getName() {
        console.log(`City ${this.name}`);
    },
    exportStr() {
        console.log(`
            ${this.name} population: ${this.population}
            `);
    },
};


city2 = {
    name : 'Vienna',
    population : 10**7,

    getName : function () {
        console.log(`City ${this.name}`);
    },
    exportStr : function () {
        console.log(`
            ${this.name} population: ${this.population}
            `);
    }
};


city1.exportStr();
city2.exportStr();