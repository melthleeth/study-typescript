// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person =
  // : {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // }
  {
    name: "Meredith",
    age: 27,
    hobbies: ["Climbing", "Cooking"],
    // role: [2, "author"],
    role: Role.ADMIN,
  };

// person.role.push("admin");
// person.role = [0, "admin"];

let favoriteActivities: string[];
favoriteActivities = ["Climbing"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // 이미 hobby는 string으로 인식되기 때문
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
