let user = {
    name: "Amal",
    surName: "truev",
    age: 29,
    wifes: ['Nargiza', 'Amina', 'Amalya', 'Shoxruxa'],
    wisas: ['USA', 'Ukrain', 'Russia', 'Mexico'],
    polniImya: function() {
        return this.name + ' ' + this.surName
    }
}

let passport = {
    serries: "AC",
    number: 213123123,
    date: "2019-06-06",
    exp: "2029-06-06",
}

let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
    function: []
}

// TZ
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов



let assign = Object.assign({}, user, {passport} )
let keys = Object.keys(assign)
let values = Object.values(assign)
let concat = keys.concat(values)


console.log('assign', assign);
console.log('keys', keys);
console.log('values', values);
console.log('concat', concat);


concat.forEach(el => {
    if (typeof el === "string") {
        types.string.push(el)
    } else if (typeof el === 'number') {
        types.number.push(el)
    } else if (typeof el === "boolean") {
        types.boolean.push(el)
    } else if (typeof el === 'object') {
        types.object.push(el)
    } else if (typeof el === 'function') {
        types.function.push(el)
    }
});
console.log(types);

