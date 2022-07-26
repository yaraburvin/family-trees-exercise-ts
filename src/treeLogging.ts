import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const familyMembers : Person[] = [];
    familyMembers.push(topPerson)

    while (familyMembers.length > 0) {
        let lastPerson : Person = familyMembers.pop()!
        console.log(lastPerson.name)
        for (const child of lastPerson.children) {
            familyMembers.push(child)
            
        } 
          
    }

    return
}




export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}

