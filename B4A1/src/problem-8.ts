// problem-8:

const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean[] => {
    return keys.map(key => key in obj);
}

// Sample Input
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
