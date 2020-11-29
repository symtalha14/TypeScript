// Singly Linked List

interface Part {
    data: number;
    next: Part;
}
class node implements Part {
    constructor(public data: number, public next: Part) { }
}
class LinkedList implements Part {
    public next: Part;
    public head: Part;
    static list_count: number = 0;
    constructor(public data: number) {
        LinkedList.list_count++;
        this.data = data;
        this.addAtEnd(this.data);
    }

    addAtEnd(value: number): void {
        if (this.head === undefined) {
            this.head = new node(value, null);
        } else {
            var temp: Part = this.head;
            while (this.head.next != null) {
                this.head = this.head.next;
            }
            this.head.next = new node(value, null);
            this.head = temp;

        }
    }
    addAtStart(value: number): void {
        if (this.head === undefined) {
            this.head = new node(value, null);
        } else {
            var startNode = new node(value, null);
            startNode.next = this.head;
            this.head = startNode;
        }
    }
    pop(): void {
        var temp: Part = this.head;
        while (this.head.next.next != null) {
            this.head = this.head.next;
        }
        this.head.next = null;
        this.head = temp;
    }
    length(): number {
        var temp: Part = this.head;
        var len: number = 0;
        while (this.head != null) {
            len++;
            this.head = this.head.next;
        }
        this.head = temp;
        return len;
    }
    printList(): void {
        var temp: Part = this.head;

        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

console.log("\nList 1:\n");

var list1 = new LinkedList(23);
list1.addAtStart(24);
list1.addAtStart(25);
list1.printList();
console.log("Length ", list1.length());

console.log("\nList 2:\n");
var list2 = new LinkedList(26);
list2.addAtStart(27);
list2.addAtStart(28);
list2.printList();

console.log("Length ", list2.length(), LinkedList.list_count);


