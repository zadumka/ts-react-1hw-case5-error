function printUserInfo(name: string, age: number, email?: string): string {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
  return name;

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
