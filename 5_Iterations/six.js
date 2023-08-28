const myCoding =[
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "C#",
        langFileName : "cs"
    },
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "python",
        langFileName : "py"
    }
]

// const values = myCoding.forEach( (item) =>{
//    return item
//     //console.log(item.langFileName);
// })

// console.log(values);


//+++++++++Filter++++++++
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.filter( (num) => num >4 )
// console.log(newNums);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.filter( (num) => {
//     return num > 4 //we are using return because we are inside {}scope
//     //and when inside the scope we must use return keyword
// } )


//+++++++++Filter by foreach+++++++++++
// const newNums = []
// myNums.forEach((num)=> {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    {
        title:'Book One',
        genre:'fiction',
        publish:"1980",
        edition:1990
    },
    {
        title:'Book two',
        genre:'Horror',
        publish:"1990",
        edition:1995
    },
    {
        title:'Book three',
        genre:'game',
        publish:"1991",
        edition:1995
    },
    {
        title:'Book four',
        genre:'horror',
        publish:"1950",
        edition:1998
    },
    {
        title:'Book five',
        genre:'game',
        publish:"1988",
        edition:1999
    },
    {
        title:'Book six',
        genre:'fiction',
        publish:"1989",
        edition:1995
    },
    {
        title:'Book seven',
        genre:'fiction',
        publish:"1950",
        edition:1999
    },
    {
        title:'Book eight',
        genre:'Skyfi',
        publish:"1987",
        edition:1995
    },
    {
        title:'Book nine',
        genre:'Tech',
        publish:"1990",
        edition:2010
    },
    {
        title:'Book ten',
        genre:'fiction',
        publish:"1966",
        edition:2016
    }
]

// const newBooks =  books.filter((bk) => bk.genre==='fiction')
// console.log(newBooks);

let newBooks =  books.filter((bk) => bk.genre==='fiction')
newBooks =  books.filter((bk) => bk.edition>=2000)
// console.log(newBooks);


//++++++++Map+++++++++
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => num + 10)
console.log(newNums);