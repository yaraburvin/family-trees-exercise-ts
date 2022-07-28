import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): string[] {
    const familyMembers : Person[] = [];
    const outputFamilyMembers : string[] = []
    familyMembers.push(topPerson)

    while (familyMembers.length > 0) {
        let lastPerson : Person = familyMembers.pop()!
        outputFamilyMembers.push(lastPerson.name)
        for (const child of lastPerson.children) {
            familyMembers.push(child)
            
        } 
          
    }

    return outputFamilyMembers
}




export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
    const familyMembers : Person[] = [];
    familyMembers.push(topPerson)
    const outputFamilyMembers : string[] =[];

    while (familyMembers.length > 0) {
        let lastPerson : Person = familyMembers.pop()!
        outputFamilyMembers.push(lastPerson.name)
        for (const child of lastPerson.children) {
            familyMembers.unshift(child)
            
        } 
          
    }
    
    return outputFamilyMembers
    
}

export const  countPeople = (arrayOfNames : string[]) : number => {
    return arrayOfNames.length
}

export const findPerson = (arrayOfNames: string[], name : string) : string => {

    const findName = arrayOfNames.find(item => item === name)
   if (findName) {
        return `FOUND ${findName}`
   }

   else {
    return `There is no such name: ${name}`
   }
}  

console.log(findPerson(["Yara", "Sevgi", "Robert"], "Rob"))


