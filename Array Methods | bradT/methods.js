const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// filter ========================================================================

const canDrink = ages.filter((age) => age >= 21)
//console.log(canDrink)

// -------------------------------------------

const retail = companies.filter((company) => company.category === "Retail")
//console.log(retail)

// -------------------------------------------

const oldCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
)
//console.log(oldCompanies)

// -------------------------------------------

const decadeCompanies = companies.filter(
  (company) => company.end - company.start >= 10
)
//console.log(decadeCompanies)

// map ========================================================================

const compNames = companies.map((company) => company.name)
//console.table(compNames)

// -------------------------------------------

const stringify = companies.map((company) => {
  return `Start:${company.start}, End:${company.end}`
})
//console.table(stringify)

// -------------------------------------------

const agesSquared = ages.map((age) => Math.sqrt(age))
//console.table(agesSquared)

// -------------------------------------------

const agesTimesTwo = ages.map((age) => age * 2)
//console.log(agesTimesTwo)

// sort ======================================

const newToOld = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//console.table(newToOld)

// if true | ?
// return  | 1  (up)
// else    | :
// return  | -1 (down)
// -------------------------------------------

const sortages = ages.sort((a, b) => (a > b ? 1 : -1))
//console.table(sortages)

// reduce ========================================================================

const totalAges = ages.reduce((total, a) => total + a, 0)
//console.log(totalAges)

// -------------------------------------------

const CompaniesSum = companies.reduce((total, a) => {
  return total + (a.end - a.start)
}, 0)
//console.log(CompaniesSum)

//
//
// combination examples

// const combined = ages
//   .map((age) => age * 2)
//   .filter((age) => age > 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0)

// console.log(combined)

// // challenges

// // print all even numbers from 0-10

// const ten = [1, 2, 35, 4, 5, 6, 7, 8, 9, 10]
// const even = ten.filter((number) => number % 2 === 0)
// console.log(even)

// // lowest to highest
// const reverse = ten.sort((a, b) => a - b)
// console.log(reverse)
