// console.log(nameC.name);
var UserC = /** @class */ (function () {
    function UserC(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    UserC.prototype.getDetails = function () {
        return "".concat(this.name, " ").concat(this.email, " ").concat(this.city);
    };
    return UserC;
}());
var details = new UserC('Adnan@gmail.com', 'Adnan Farooq');
// TypeModifier readonly
var TypeModifier = /** @class */ (function () {
    function TypeModifier(name) {
        this.name = name;
    }
    TypeModifier.prototype.getName = function () {
        return "".concat(this.name);
    };
    return TypeModifier;
}());
var nameR = new TypeModifier("Rahul");
// TypeModifier optional
var TypeModifierOptional = /** @class */ (function () {
    function TypeModifierOptional(name) {
        this.name = name;
    }
    return TypeModifierOptional;
}());
var nameCO = new TypeModifierOptional();
// TypeModifier Intersection
var DetailsandName = Object.assign({}, nameR, details);
console.log(DetailsandName.getDetails());
