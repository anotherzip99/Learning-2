class Person {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age =  age
    }
}

const hieu =  new Person("Hieu", 21)
const Manh = new Person("Manh", 27)

console.log(Manh)
console.log(hieu)



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

let fuzzy = new Dog("a","b")

fuzzy._breed = "chihuahua"
fuzzy._name = "fuzzy"

console.log(fuzzy)


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

const TheRectangle = new Rectangle(3,6)

console.log(`Area:${ TheRectangle.calculateArea()}`)
console.log(`Perimeter:${TheRectangle.calculatePerimeter()}`)


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

const AnotherCircle = new Circle(1)

console.log(`Initial radius: ${AnotherCircle.radius}`)
AnotherCircle.radius = 3

console.log(`Area is:${AnotherCircle.calculateArea()}`)
console.log(`Circumference is:${AnotherCircle.calculateCircumference()}`)



///////////////////////////////////////


class Book {
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
    private books: Book[] = []

    addBooks(book:Book): void {
        this.books.push(book)
    }

    removeBook(ISBN: string): Book | undefined {
        const index = this.books.findIndex((book) => book.ISBN === ISBN)
        if (index !== -1) {
            const removedBook = this.books[index]
            this.books.splice(index, 1)
            return removedBook
        }
    }

    getBooks(): Book[] {
        return [...this.books]
    }
}

const book1 = new Book("Sinh hoc 9", "Mot nhom nguoi nao do biet sinh hoc", "1093920907")
const book2 = new Book("Giao duc cong dan", "Mot nhom nguoi nao do co dao duc va phap luat", "93485289743")

const library = new BookCollection()
library.addBooks(book1)
library.addBooks(book2)

console.log("Available books:")
library.getBooks().forEach((book) => console.log(book.toString()))

const removedBook = library.removeBook("")
if (removedBook) {
    console.log(`Removed book: ${removedBook.toString()}`)
}


/////////////////////////

class Employee {
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

const Dave = new Employee("Dave","Mechanical Engineer", 20000)

console.log(`New employee details:${Dave.toString()}`)

Dave.updateSalary(20)

console.log(`Employee Salary Updated:${Dave.toString()}`)

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

const VPBank = new Bank()

const account1 = new Account("Dave", 3000)
const account2 = new Account("Liam", 5000)

VPBank.addAccount(account1)
VPBank.addAccount(account2)

VPBank.Accountslist()

VPBank.deposit("Dave",2000)
VPBank.withdraw("Liam",1000)

VPBank.Accountslist()

const removedAccount = VPBank.removeAccount("Dave")

if(removedAccount) {
    console.log("Removed account:", removedAccount.toString())
}
    else {
        console.log("Account not found for removal")
    }

    VPBank.Accountslist()


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


const Pillar1 =  new TrafficLight(TrafficLightColor.RED, 30)
Pillar1.startLoop();