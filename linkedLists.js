'use strict';

class _Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
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
    insertBefore(item, key){
        if(this.head === null){
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            let previousNode = this.head
            while(currNode.value !== key){
                
                previousNode = currNode;
                currNode=currNode.next;
            }
            let newItem = new _Node(item);
            previousNode.next = newItem;
            newItem.next = currNode;
        }
    }
    insertAfter(item, key){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let currNode = this.head;
            let nextNode = this.head;
            while(currNode.value !== key){
                currNode = nextNode;
                nextNode = nextNode.next;
            }
            let newItem = new _Node(item);
            currNode.next = newItem;
            newItem.next = nextNode;
        }
    }
    insertAt(item, position){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let currNode = this.head;
            let previousNode = this.head;
            let counter = 0;
            while(counter !== position){
                previousNode = currNode;
                currNode = currNode.next;
                counter++;
            }
            let newItem = new _Node(item);
            previousNode.next = newItem;
            newItem.next = currNode;
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
        if(!this.head){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null, tempNode);
            this.tail = tempNode.next
        }

    }
    insertBefore(item, key){
        if(!this.head){
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            let previousNode = this.head;
           
            while(currNode.value !== key){
                
                previousNode = currNode;
                currNode=currNode.next;
            }
            let newItem = new _Node(item, currNode, previousNode);
            previousNode.next = newItem;
            
        }
    }
    insertAfter(item, key){
    }
    insertAt(item, position){
    }
    find(item){
    }
    remove(item){
    }

}

function display(list){
    let currNode = list.head;
    while(currNode !== null){
        console.log(currNode.value);
        currNode = currNode.next;
    }
}
function size(list){
    let currNode = list.head;
    let listSize = 0;

    while(currNode !== null){
        currNode = currNode.next;
        listSize++;
    }
    console.log(listSize);
}
function isEmpty(list){
    if(!list.head){
        console.log('List is empty');
    }
    else{
        console.log('List is not empty');
    }
}
function findPrevious(list, key){
    let currNode = list.head;
    let previousNode = list.head;
    if(currNode == null){
        console.log('item not found');
    }
    else {
        
        while(currNode.value !== key){
            previousNode = currNode;
            currNode=currNode.next;
        }
    }
    console.log(previousNode.value);
}
function findLast(list){
    let currNode = list.head;
    if(list.head === null){
        console.log('This list is empty');
    }
    else{
        while(currNode.next !== null){
            currNode = currNode.next
        }
        console.log(currNode.value);
    }
}
function reverseList(list){
    if (list.head === null){
        return null;
    }
    let currNode = list.head;
    let nextNode = null;
    let prevNode = null;
    while (currNode !== null){
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    list.head = prevNode;
    console.log(list);
}
function thirdFromTheEnd(list){
    if(list.head === null){
        return null
    }
    else{
        let current = list.head; 
        while (current.next.next.next !== null) {
            //while the node is NOT at the end of the list
            current = current.next;
        }
        console.log(current.value);
    }
}
function middleOfTheList(list){
    let slowNode = list.head;
    let fastNode = list.head;
    if(list.head === null){
        return null
    }
    while(fastNode !== null && fastNode.next !== null){
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    console.log(slowNode.value);
}
function cycleInAList(list){
    let slowNode = list.head
    let fastNode = list.head;
    if(list.head === null){
        return null
    }
    while(fastNode !== null && fastNode.next !== null){
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
        if(slowNode === fastNode){
            console.log(true);
        }
    }
    console.log(false);
}

function main(){
    const SLL = new LinkedList();
    const mySLL = new LinkedList();
    const cycleList = new LinkedList();
    const DLL = new DoublyLinkedList();
    // SLL.insertFirst('Apollo');
    // SLL.insertLast('Boomer');
    // SLL.insertLast('Helo');
    // SLL.insertLast('Husker');
    // SLL.insertLast('Starbuck');
    // SLL.insertLast('Tauhida');
    // SLL.remove('squirrel');
    // SLL.insertBefore('Athena', 'Boomer');
    // SLL.insertAfter('Hotdog', 'Helo');
    // SLL.insertAt('Kat', 2);
    // SLL.remove('Tauhida');
    // mySLL.insertFirst('hello');
    // mySLL.insertLast('hola');
    // mySLL.insertLast('ciao');
    // mySLL.insertLast('bonjour');
    // mySLL.insertLast('hallo');
    // mySLL.remove('hello');
    // mySLL.remove('hola');
    // mySLL.remove('ciao');
    // display(mySLL);
    // size(mySLL);
    // isEmpty(mySLL);
    // findPrevious(mySLL, 'hola');
    // findLast(mySLL);
    // reverseList(mySLL);
    // thirdFromTheEnd(mySLL);
    // middleOfTheList(mySLL);
    // cycleInAList(mySLL);
    //console.log(JSON.stringify(SLL, null, 2))
    // cycleList.insertFirst(2);
    // cycleList.insertLast(0);
    // cycleList.insertLast(5);
    // cycleList.insertLast(1);
    // cycleList.insertLast(2);
    // cycleList.insertLast(3);
    // cycleList.insertLast(1);
    // cycleList.insertLast(2);
    // cycleList.insertLast(3);
    // cycleList.insertLast(5);
    // cycleList.insertLast(6);
    // cycleInAList(cycleList);
    DLL.insertFirst('Aquaria');
    DLL.insertLast('Caprica');
    DLL.insertLast('Gemenon');
    DLL.insertLast('Pico');
    DLL.insertLast('Sagittarion');
    DLL.insertBefore('Athena', 'Sagittarion');
    DLL.remove('Pico')
    console.log(DLL);

   
}
main();

function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        //while current node has a value
        let newNode = current;
        while (newNode.next !== null) {
            //while the node is NOT at the end of the list
            if (newNode.next.value === current.value) {
               // |0|0|C|N|X|
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
//keeps sending newNote second to last in the linked list
//Polynomial time O(n^2)

