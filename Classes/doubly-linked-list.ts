

interface DoublePart<T>{
    data:T;
    prev:DoublePart<T>;
    next:DoublePart<T>;
}

class DoubleNode<T> implements DoublePart<T>{
    constructor(public data:T, public prev:DoublePart<T>, public next:DoublePart<T>){};
}

class DoubleLinkedList<T> implements DoublePart<T>{
    public head:DoublePart<T>;
    public prev:DoublePart<T>;
    public next:DoublePart<T>;
    constructor(public data:T ){
        this.addAtEnd(this.data);
    };

    addAtEnd(value:T){
        if(this.head===undefined){
            this.head = new DoubleNode(value,null,null);
        }else{
            var temp:DoublePart<T>;
            temp = this.head;
            while(this.head.next!=null){
                this.head=this.head.next;
            }
            var end:DoublePart<T>=this.head;
            this.head.next = new DoubleNode(value,end,null);
            this.head = temp;
        }
    }
    length():number{
        var temp:DoublePart<T>=this.head;
        var len:number=0;
        while(this.head!=null){
            len++;
            this.head=this.head.next;
        }
        this.head=temp;
        return len;
    }
    addOrder(value:T){
        var temp:DoublePart<T>;
        temp=this.head;
        var newNode:DoublePart<T>;
        newNode = new DoubleNode(value,null,null);
        if(this.length()==1){
            if(this.head.data < value){
                this.head.next = newNode;
                newNode.prev = this.head;
            }else{
                newNode.next=this.head;
                this.head.prev = newNode;
                this.head=newNode;
            }
            return;
        }
     
        while(this.head.data<value){
            this.head=this.head.next;
        }

        // if reached the end
        if(this.head===null){return this.addAtEnd(value)};
        
        // Assign values to previous and next nodes
        newNode.next=this.head;
        newNode.prev=this.head.prev;
        this.head.prev.next=newNode;
        this.head.prev=newNode;
        this.head=temp;
        // change head
        if(this.head.data>value){
            this.head=newNode;
        }
        
    }
    printList(){
        var temp:DoublePart<T>;
        temp = this.head;
        console.log("List:\n");
        while(temp!=null){
            console.log(temp);
            temp=temp.next;
        }
       
    }

}

var dl = new DoubleLinkedList<number>(10);
dl.addOrder(9);
dl.addAtEnd(100);
dl.addOrder(16);
dl.addOrder(2);

dl.printList();