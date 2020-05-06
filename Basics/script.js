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
//=====================================Conditionals=============================================

var firstname="John"
var civilStatus="single"
if (civilStatus==="married")
{
    console.log(firstname+" is married")
}
else{
    console.log(firstname+" is not married")
}
isMarried=true
if (isMarried)
{
    console.log(firstname+" is married")
}
else{
    console.log(firstname+" is not married")
}
var massMark=70
var heightMark=1.7
var massJohn=60
var heightJohn=1.3
var BMIMark = massMark/(heightMark*heightMark)
var BMIJohn = massJohn/(heightJohn*heightJohn)
if(BMIJohn>BMIMark)
{
    console.log("John > Mark BMI")
}
else{
    console.log("Mark > John BMI")
}
//Boolean logic
var age=30
if (age<13)
{
    console.log("Child")
}
else if(age>=13 && age <20)
{
    console.log("Teenager")

}
else if(age>=20 && age <30)
{
    console.log("Young man")

}
else if(age>=30 && age <40)
{
    console.log("Man")

}
else if(age>=40)
{
    console.log("Old Man")

}
//switch case
var job = "instructor"
switch(job)
{
    case 'teacher':
    case 'instructor':
        console.log(firstname+" teaches/instructs")
        break
    case 'driver':
        console.log(firstname+" drives")
        break

    case 'designs':
        console.log(firstname+" designs")
        break

    default:
        console.log(firstname+" does something else")

}
//=====================================Functions=============================================
 
function calculateAge(birthyear) {
    return 2019-birthyear
}
var ageJohn = calculateAge(1998)
var ageMark = calculateAge(1997)
console.log(ageJohn,ageMark)
