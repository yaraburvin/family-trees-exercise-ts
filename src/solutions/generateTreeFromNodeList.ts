import { Person } from "../personTypes";
import { Row } from "../rowTypes";

export function generateTreeFromNodeList(rows: Row[]): Person {
    type Temp = { id: number, parentId: number | null, person: Person };
    const peopleTable: Record<number, Temp> = {};

    //one pass - just store each node in a table by id for quick reference.
    for (let row of rows) {
        peopleTable[row.id] = { id: row.id, parentId: row.parentId, person: { name: row.name, children: [] } }
    }

    //second pass - store each node in its parent's children array.
    for (let temp of Object.values(peopleTable)) {
        const { id, parentId, person } = temp;
        if (parentId !== null) {
            peopleTable[parentId].person.children.push(person);
        }
    }

    return Object.values(peopleTable).find(entry => entry.parentId === null)!.person;
}