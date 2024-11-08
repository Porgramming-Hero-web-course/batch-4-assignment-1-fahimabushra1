#The significance of union and intersection types in Typescript.

##Union Type:

-A union type is a type that allows a value to be one of several specified types, created by listing each type with the `|` (pipe) symbol between them. Union types are helpful when a variable or parameter could logically be more than one type, such as a string or a number, and they enable flexibility by permitting multiple possible types for a single value.

Example of Union Type

type NumberOrString = number | string;

let value: NumberOrString;
value = 42;           
value = "Hello";       
value = true;      

###Significance of Intersection Types:

- Union types allow variables or function parameters to accept multiple types when data can come in different forms.
  
- TypeScript ensures only common methods and properties of all union types are accessible. This prevents errors from trying to access incompatible properties.

- TypeScript helps to determine the specific type of a union value using `typeof` checks or custom logic. This allows to handle each type correctly. 

- Union types ensure addressing all possible types, making your code more robust and error-free.


##Intersection Type:

-An intersection type in TypeScript combines multiple types into a single type, meaning a value must satisfy all the types included. It is created using the `&` (ampersand) symbol. This allows you to create a new type that has all properties and methods of the intersected types, making it useful for combining traits or characteristics from multiple types into one.

Example of Intersection Type:

type Person = { name: string; age: number; };
type ContactInfo = { email: string; phone: string; };

type PersonWithContact = Person & ContactInfo;

let person: PersonWithContact = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    phone: "123-456-7890"
};

###Significance of Intersection Types

- Intersection types allow  composing complex types from smaller ones, making it easy to build up complex data structures with reusable components.
- By enforcing that all intersected types’ properties must exist, intersection types provide a way to ensure that an object meets multiple criteria.
- Intersection types can serve as an alternative to traditional inheritance, allowing to combine multiple types without creating a class hierarchy.
