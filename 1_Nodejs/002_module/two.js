let name = "래규";
let age = 25;

function plusAge() {
    age += 1;
}

function getAge() {
    return age;
}

// module 생략 가능
// exports.name = name;
module.exports.name = name;
module.exports.age = age;
module.exports.plusAge = plusAge;
module.exports.getAge = getAge;