/*  Author: C. Tejeda
    Date: 10.19.2023
    Purpose: Week 3, day 3 homework: Create some characters that would live in a city */

class Person{
    constructor(_eyeColor, _ears, _mouth){
        this.eyeColor = _eyeColor
        this.ears = _ears
        this.mouth = _mouth
    }

    walk(){
        console.log('I am walking right now')
    }
    
    breath(){
        console.log('breath')
    }

    blink(){
        console.log('blink, blink, blink')
    }

}    


class Governor extends Person{
    constructor(_eyeColor, _ears, _mouth){
        super(_eyeColor, _ears, _mouth)
    }
}

class PostalWorker extends Person{
    constructor(_eyeColor, _ears, _mouth, _carrier){
        super(_eyeColor, _ears, _mouth)
    }

    deliver(){
        console.log('I am delivering the mail')
    }

    sort(){
        console.log('I am sorting through the mail')
    }
}

class Chef extends Person{
    constructor(_eyeColor, _ears, _mouth){
        super(_eyeColor, _ears, _mouth)
    }

    saute(){
        console.log('I am frying something')
    }

    chop(){
        console.log('I am chopping something')
    }
}

class Siren extends Person{
    constructor(_eyeColor, _ears, _mouth, _swim){
        super(_eyeColor, _ears, _mouth)
    }

    move(){
        console.log('splash, splash, splash')
    }
}


const Jeremy = new Chef('brown', 'brown', 'nice smile')
console.log(Jeremy)
Jeremy.saute()

const Lucy = new Chef('brown', 'brown', 'nice smile')
Lucy.chop()



const Luis = new PostalWorker('blue', 'yellow', 'no teeth')
console.log(Luis)
Luis.sort()

const Pam = new PostalWorker('orange', 'blue', 'lots of teeth')
console.log(Pam)
Pam.deliver()








