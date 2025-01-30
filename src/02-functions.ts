import { colleagues, friends } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

function allOlder(friends: Friend[]): string[] {
  return friends.map((f) => older(f));
}

console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  const extension = cs.reduce(
    (acc, c) => Math.max(acc, c.contact.extension),
    0
  );
  cs.push({ name, department, contact: { email, extension: extension + 1 } });
}

console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
