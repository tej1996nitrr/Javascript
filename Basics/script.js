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
//=====================================Arrays=============================================
var names = ['John','Mark','Jane']
var years = new Array(1999,2000,2001)
console.log(names[2])
console.log(names[2]);
console.log(names.length);
// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator
 (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when
  the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

*/
function tipCalculator(bill) {
 var tip=0
 if(bill<50)
 {
     tip=bill*0.2
 }
 else if(bill>=50 && bill<=200)
 {
     tip=bill*0.15
 }
 else{
     tip=bill*0.1
 }
  return tip
}

var bills = [124, 48, 268];
var tips=[]
var paid=[]
for(j in bills)
{
console.log(bills[j])
tips.push(tipCalculator(bills[j]))
paid.push(bills[j]+tips[j])
}
console.log(tips)
console.log(paid)
//=====================================Objects and Properties=============================================
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
//=====================================Objects and methods=============================================

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
}; 

john.calcAge();
console.log(john);
    
var jen = {
    fullName: 'Jen Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mac = {
    fullName: 'Mac Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
if (jen.calcBMI() > mac.calcBMI()) {
    console.log(jen.fullName + ' has a higher BMI of ' + jen.bmi);
} else if (mac.bmi > jen.bmi) {
    console.log(mac.fullName + ' has a higher BMI of ' + mac.bmi);
} else {
    console.log('They have the same BMI');
}
//=====================================Loops and Iteration=============================================

// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log("continue",john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log('break',john[i]);
}
// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log('backwards',john[i]);
}

/*
John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50
 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid 
amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between 
$100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var Jbill={

    values:[],
    tip:function(amount)
    {
        tipArr=[]
        for(i in amount)
        {
            if(amount[i]<50)
            {
                tipArr.push(amount[i]*0.2)
            }
            else if(amount>=50 && amount<=200)
            {
                tipArr.push(amount[i]*0.15)             
            }
            else{

                tipArr.push(amount[i]*0.1)
            }
        }
        
  return tipArr
    },
    totalPayment:function(billAmount)
    {   
        tipPayment = this.tip(billAmount)
        netPayment=[]
        for( i in billAmount)
        {
            netPayment.push(tipPayment[i]+billAmount[i])
        }
        return netPayment
    }

}
var Mbill={

    values:[],
    tip:function(amount)
    {
        tipArr=[]
        for(i in amount)
        {
            if(amount[i]<100)
            {
                tipArr.push(amount[i]*0.2)
            }
            else if(amount>=100 && amount<=300)
            {
                tipArr.push(amount[i]*0.10)             
            }
            else{

                tipArr.push(amount[i]*0.25)
            }
        }
        
  return tipArr
    },
    totalPayment:function(billAmount)
    {   
        tipPayment = this.tip(billAmount)
        netPayment=[]
        for( i in billAmount)
        {
            netPayment.push(tipPayment[i]+billAmount[i])
        }
        return netPayment
    }

}


console.log(Jbill.tip([124, 48, 268, 180,42]))
console.log(Mbill.tip([77, 375, 110, 45]))
console.log(Jbill.totalPayment([124, 48, 268, 180,42]))
console.log(Mbill.totalPayment([77, 375, 110, 45]))

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

Jtips = calcAverage(Jbill.tip([124, 48, 268, 180,42]));
Mtips = calcAverage(Mbill.tip([77, 375, 110, 45]))

console.log(Jtips,Mtips)

