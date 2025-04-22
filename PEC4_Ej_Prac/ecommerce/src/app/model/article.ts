export class Article {
    constructor(public name: string,
        public imageUrl: string,
        public price: number,
        public isOnSale: boolean,
        public quantityInCart: number) {

    }

    incrementUnits() {
        this.quantityInCart++;
    }

    decrementUnits() {
        if (this.quantityInCart !== 0) {
            this.quantityInCart--;
        }
    }
}
