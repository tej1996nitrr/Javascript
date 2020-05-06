//====================================Variables and datatypes==============================================
var firstname='John'
console.log(firstname)

var lastname = 'Smith'
console.log(lastname)

var age =30
console.log(age)

var qualified=true
console.log(qualified)

var job
console.log(job)

job="teacher"
console.log(job)
//====================================Variables Mutation and type coercion==============================================

console.log(firstname+" "+age)
job="finance"
var isMarried =  false
console.log(firstname+' is in '+ job+'. Is (s)he married?'+isMarried)
age="twenty eight"
job="driver"
console.log(firstname+' is a '+ age+' year old '+job+'. Is (s)he married?'+isMarried)
// var lastname=prompt("What is the last name?")
// console.log(firstname+" "+lastname)
//=====================================Basic Operators=============================================

var year,yearJohn,yearMark
now=2019
ageJohn=29
ageMark=20
yearJohn=now-ageJohn
yearMark=now-ageMark
console.log(yearJohn,yearMark)
//math op
console.log(now/2019)
console.log(now+9)
console.log(now-4)
console.log(now*3)
//logical op
var johnOlder = ageJohn<ageMark 
console.log(johnOlder)
//typeof op
console.log(typeof(johnOlder))
console.log(typeof(age))
var x
console.log(typeof(x))