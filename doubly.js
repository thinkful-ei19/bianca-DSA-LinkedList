class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
        this.tail = this.head;
    }
    insertLast(item){
        
        if(this.head === null){
            this.insertFirst(item);
        }

    }






}