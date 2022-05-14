import { Person } from "../personTypes";
import { Row } from "../rowTypes";

export function generateNodeList(root: Person): Row[] {
    const rows: Row[] = [];
    interface StackEntry { person: Person, parentId: null | number, id: number }
    const entry1: StackEntry = {
        person: root,
        parentId: null,
        id: 0
    };
    const stack: StackEntry[] = [entry1];
    let idGlobal = 1;

    while (stack.length > 0) {
        const { person, parentId, id } = stack.pop()!;
        rows.push({ name: person.name, id, parentId });
        const kidsMapped = person.children.map((kid, ix) => ({ person: kid, parentId: id, id: idGlobal + ix }))
        idGlobal += kidsMapped.length + 1;

        stack.push(...kidsMapped);
        idGlobal++;
    }
    return rows;
}