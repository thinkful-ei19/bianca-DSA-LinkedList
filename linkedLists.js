'use strict';

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    //insertion at the beginning -create a new node- point the head to that new note
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }
    //insertion at the end - 
    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
            //check if list is empty
            //create new node
        }
        else {
            let tempNode = this.head;
            //create new node
            while(tempNode.next !== null){
                //traverse through list until you reach the end
                tempNode = tempNode.next;
                //set the last node to point to the new node
            }
            tempNode.next = new _Node(item, null);
            //set the new nodes pointer to null
        }
    }
    //retrieval
    find(item){
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if(!this.head){
            return null
        }
        //check for the item w/ while loop
        while(currNode.value !== item){
            //return null if you are at the end of the list and item is not on the list
            if(currNode.next === null){
                return null;
            }
            else {
                //keep looking
                currNode = currNode.next;
            }
        }
        //found it
        return currNode;
    }
    //removal
    remove(item){
        //if the list is empty
        if(!this.head){
            return null;
        }
        //if the node to be removed is the head, make the next node in line the head
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}
