class Person {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age =  age
    }
}

////////////////

class Dog {
    private name: string
    private breed: string

    constructor(name: string, breed: string) {
        this.name = name
        this.breed = breed
    }

    set _breed(theBreed: string) {
        
        this.breed = theBreed
    }
    set _name(theName: string) {
        this.name = theName
    }
}


////////////////////

class Rectangle {
    private _width: number
    private _length: number

    constructor(width: number, length: number) {
        if (width < 0 || length < 0) {
            throw new Error("Width and length must be positive values")
        }
        if (width == length) {
            throw new Error("Rectangle can't have equally width and length values")
        }
        this._width =  width
        this._length = length
    }

    get width(): number {
        return this.width
    }

    get length(): number {
        return this.length  
    }

    calculateArea(): number {
        return this._width * this._length
    }

    calculatePerimeter(): number {
        return 2 * (this._width + this._length)
    }
}

//////////////////////////

class Circle {
    private _radius: number
    readonly pi: number = 3.14

    constructor(radius: number) {
        if (radius <= 0) {
            throw new Error("Radius must be positive value")
        }
        this._radius = radius
    }

    get radius(): number {
        return this._radius
    }

    set radius(circleRadius) {
        this._radius = circleRadius
    
    }
    calculateArea(): number {
        return this.pi * this._radius * this.radius
    }

    calculateCircumference(): number {
        return 2 * this.pi * this._radius
    }
}

///////////////////////////////////////


class Boook {
    readonly title: string
    readonly author: string
    readonly ISBN: string

    constructor(title: string, author: string, ISBN: string) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
    }
    
    toString(): string {
        return `Title:${this.title}, Author:${this.author}, ISBN:${this.ISBN}`
    }
}

class BookCollection {
    private books: Boook[] = []

    addBook(book:Boook): void {
        this.books.push(book)
    }

    removeBook(ISBN: string): Boook | undefined {
        const index = this.books.findIndex((book) => book.ISBN === ISBN)
        if (index !== -1) {
            const removedBook = this.books[index]
            this.books.splice(index, 1)
            return removedBook
        }
    }

    getBooks(): Boook[] {
        return [...this.books]
    }
}

/////////////////////////

class Employee1 {
    private name: string
    private jobtitle :string
    private salary : number

    constructor(name: string, jobtitle: string, salary: number) {
        this.name = name
        this.jobtitle = jobtitle
        this.salary = salary
    }

    updateSalary(PercentageIncrease: number) {
        this.salary += (PercentageIncrease * this.salary) / 100
    }

    getName(): string {
        return this.name
    } 

    getJobTitle(): string {
        return this.jobtitle
    }

    getSalary(): number {
        return this.salary
    }

    toString(): string {
        return `Name:${this.name} 
                Job:${this.jobtitle}
                Salary:${this.salary}$`
    }
}

//////////////////////////



class Account {
    private owner: string
    private balance: number

    constructor(owner: string, balance: number) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount: number) : void {
        if(amount > 0) {
            this.balance += amount
        }
        else {
            console.error("Deposit amount must be more than 0")
        }
    }

    withdraw(amount: number): boolean {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount
            return true
        }
        else {
            console.error("Withdraw amount must be possitive or can not exceed balance amount")
            return false
        }
    }

    getOwner(): string {
        return this.owner
    }

    getBalance(): number {
        return this.balance
    }

    toString(): string {
        return `Owner: ${this.owner}, Balance:${this.balance}`
    }
    
}

class Bank {
    private accounts: Account[] = []

    addAccount(account: Account): void {
        this.accounts.push(account)
    }

    removeAccount(owner: string): Account | undefined {
        const index = this.accounts.findIndex((account) => account.getOwner() === owner)
        
        const removedaccounts = this.accounts[index]
        this.accounts.splice(index, 1)
        return removedaccounts
    }

    deposit(owner: string, amount: number): boolean {
        const account = this.accounts.find((account) => account.getOwner() === owner)
        if (account) {
            account.deposit(amount)
            return true
        }
        else {
            console.error("Account does not exist")
            return false
        }
    }

    withdraw(owner: string, amount: number): boolean {
        const account = this.accounts.find((account) => account.getOwner() === owner)
        if (account) {
            account.withdraw(amount)
            return true
        }
        else {
            console.error("Account does not exist")
            return false
        }
    }

    Accountslist(): void {
        if (this.accounts.length === 0) {
            console.log("No accounts found in the bank")
        }
        else {
            console.log("Bank accounts:")
            this.accounts.forEach((account) => console.log(account.toString()))
        }
    }
}


////////////////////////////////


enum TrafficLightColor {
    RED = "Red",
    GREEN = "Green"
}

class TrafficLight {
    private color: TrafficLightColor 
    private duration: number
    private intervalID: number | null = null


    constructor(color: TrafficLightColor, duration: number) {
        this.color = color
        this.duration = duration
    }

    changecolor(): void {
        this.color = this.color ===  TrafficLightColor.RED ? TrafficLightColor.GREEN : TrafficLightColor.RED
        console.log(`Traffic light changed to: ${this.color}`)
    }

    startLoop(): void {
        let remainingTime = this.duration
        this.changecolor();
    this.intervalID = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
        }
        else {
            this.stopLoop();
            this.startLoop(); 
        }
        console.log(`Countdown:${remainingTime}`)}, 1000);
    }

    stopLoop(): void {
        if (this.intervalID !== null)
        clearInterval(this.intervalID)
    }
}


///////////////////////////////


class Employee2 {
     name: string
     private salary: number
     private hireDate: Date

    constructor(name: string, salary: number, hireDate: Date) {
        this.name = name
        this.salary = salary
        this.hireDate = hireDate
    }
    public getYearOfService(): number {
        const today = new Date();
        const years = today.getFullYear() - this.hireDate.getFullYear();
        return years;
    }
}

///////////////////////////////

class Student {
    name: string;
    grade: number;
    courses: string[];

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
        this.courses = [];
    }

    addCourse(courseName: string): void {
        if(!this.courses.includes(courseName)) {
            this.courses.push(courseName);
            console.log(`${courseName} added for ${this.name}`);
        } else {
            console.log(`${courseName} already enrolled for ${this.name}`)
        }
    }

    removeCourse(courseName: string): void {
         const courseIndex = this.courses.indexOf(courseName);
         if (courseIndex !== -1) {
            this.courses.splice(courseIndex, 1)
            console.log(`${courseName} removed for ${this.name}`)
         } else {
            console.log(`${courseName} not found for ${this.name}`);
         }
    }
}

////////////////////////////////

class Book {
    readonly name: string
    readonly author: string;

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author
    }
}

class Library {
    private books: Book[] = []

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`${book.name} by ${book.author} added to the library`)
    }

    removeBook(name: string): void {
        const libraryIndex = this.books.findIndex((book) => book.name === name)
        if (libraryIndex !== -1) {
            this.books.splice(libraryIndex, 1)
            console.log(`${name} removed from library }`)
        }
        else {
            console.log(`${name} not found in library `)
        }
    }
}

////////////////////////////

class Airplane {
    private FlightNumber: string;
    private destination: string;
    private departureTime: Date; 
    DelayFlight: boolean = false;

    constructor(FlightNumber: string ,destination: string, departureTime: Date) {
        this.FlightNumber = FlightNumber;
        this.destination = destination;
        this.departureTime = departureTime;
    }

    setDelay(DelayFlight: boolean): void {
        this.DelayFlight = DelayFlight
    }

    checkFlightStatus(): void {
        if(this.DelayFlight) {
         console.log(`Flight number ${this.FlightNumber} flying to ${this.destination} has been delayed`);
        } else {
         console.log(`Flight number ${this.FlightNumber} flying to ${this.destination} is on time`)
        }
    }
}

//////////////////////

class Product {
    private name: string;
    private quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity
    }

    get Name(): string{
        return this.name
    }

    get Quantity(): number {
        return this.quantity
    }

    set Quantity(Quantity: number) {
        this.quantity = Quantity;
    }
}

class Inventory {
    private products: Product[] = [];
    readonly InvCapacity: number;
    readonly lowInventoryThreshold : number; 

    constructor(InvCapacity: number, lowInventoryThreshold: number) {
        this.InvCapacity = InvCapacity;
        this.lowInventoryThreshold = lowInventoryThreshold;
    }

    getTotalInventory(): number {
        let totalQuantity = 0;
        for (const product of this.products) {
            totalQuantity += product.Quantity
        }
        return totalQuantity;
    }

    addProduct(product: Product): void {
        if (this.getTotalInventory() + product.Quantity <= this.InvCapacity) {
        this.products.push(product);
        console.log(`${product.Name} x ${product.Quantity} added to Inventory`)
        } else {
            console.log("Insufficient capacity")
        }
    }

    removeProduct(productName: string, Quantity: number): void {
        const productIndex = this.products.findIndex((product) => product.Name === productName)
        if (productIndex !== -1) {
            const product = this.products[productIndex];
            if (product.Quantity >= Quantity) {
                product.Quantity -= Quantity;
                console.log(`${productName} x ${Quantity} removed from Inventory `)
            }
        }
    }

    LowInventory(): boolean {
        const remainingCapacity = this.InvCapacity - this.getTotalInventory();
        return remainingCapacity <= this.lowInventoryThreshold;
    }
}

const Backpack = new Inventory(100,10);

const product1 = new Product("Water bottle",90)

Backpack.addProduct(product1);

if (Backpack.LowInventory()) {
    console.log("Inventory is low")
} else {
    console.log("Inventory is at sufficient levels")
}
