// problem-5:

const getPropertyValue = < X, Y extends keyof X > (obj: X, key: Y) => {
    return obj[key];
}

const user = {
    name: "Alice",
    age: 30
}

const result = getPropertyValue(user, "name")
console.log(result)