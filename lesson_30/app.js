function sum(a, b) {
    return a + b;
  }

  let user = {
    name:'User',
    surname:'Surname',
    isUserStudent: false,
    token: '34265465',
    cart: [],
    getFullName: function() {
        return `${this.name} ${this.surname}`;
    },
    checkUserIsLogged: function() {
        return !!this.token;
    },
    addToCart: function() {
        if(this.checkUserIsLogged()) {
            this.cart.push('iphone');
        } else {
            return 'you have to be logged';
        }
    }
}


let user2 = {
    name:'User2',
    surname:'Surname2',
    isUserStudent: true,
    universityName: 'Lviv Polytechnic',
    getFullName: function() {
        return `${this.name} ${this.surname}`;
    },
    checkUserIsLogged: () => {
        return !!this.token;
    },
    addToCart: () => {
        
    }
}

module.exports = {
    sum: sum,
    userFirst: user,
    userSecond: user2,
    // addSomeClassToElement: addSomeClassToElement
};