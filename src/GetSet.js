var Getter = /** @class */ (function () {
    function Getter(name) {
        this.name = name;
    }
    Object.defineProperty(Getter.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Getter;
}());
var nameG = new Getter("Adnan");
console.log(nameG.getName);
