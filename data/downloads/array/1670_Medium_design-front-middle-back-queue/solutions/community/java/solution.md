# 🍵 Simple Approach || 🏃‍♂️ O(n) complexity || 🧑‍💻 4 Different Approach

**Author:** IamHazra
**Votes:** 11
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/5033124/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/5033124/)

---

# Intuition
The problem seems to require maintaining a queue where elements can be inserted and removed from the front, middle, and back efficiently.

# Approach
I've implemented a custom queue using a linked list. The `pushFront`, `pushMiddle`, and `pushBack` methods insert elements at the front, middle, and back respectively. Similarly, the `popFront`, `popMiddle`, and `popBack` methods remove elements from the front, middle, and back respectively.

# Complexity
##### This time is only for first Approach
- Time complexity:
  - `pushFront`: $$O(1)$$
  - `pushMiddle`: $$O(n)$$
  - `pushBack`: $$O(n)$$
  - `popFront`: $$O(1)$$
  - `popMiddle`: $$O(n)$$
  - `popBack`: $$O(n)$$
- Space complexity:
  - $$O(n)$$

# Code
```java []
// Solve using Singly LinkedList
// The approach is intricate yet beneficial, especially for those with a curious disposition.
class Node {
    public int val;
    public Node next;
    public Node(int val){
        this.val=val;
        this.next=null;
    }
}
class FrontMiddleBackQueue {
    Node head;
    int size;
    public FrontMiddleBackQueue() {
        head = null;
        size = 0;
    }
    
    public void pushFront(int val) {
        //System.out.println("Push Front");
        Node newNode = new Node(val);
        if(head == null){
            head = newNode;
        }
        else{
            newNode.next = head;
            head = newNode;
        }
        size++;
        //System.out.println(size);
        //show();
    }
    
    public void pushMiddle(int val) {
        //System.out.println("Push Middle");
        Node newNode = new Node(val);
        if(head == null){
            head = newNode;
        }
        else if(head.next == null){
            newNode.next = head;
            head = newNode;
        }
        else{
            int count = 0;
            Node temp = head;
            while(temp != null){
                count++;
                if(count == size/2){
                    Node nextNode = temp.next;
                    temp.next = newNode;
                    newNode.next = nextNode;
                    break;
                }
                temp = temp.next;
            }
        }
        size++;
        //System.out.println(size);
        //show();
    }
    
    public void pushBack(int val) {
        //System.out.println("Push Back");
        Node newNode = new Node(val);
        if(head == null){
            head = newNode;
        }
        else{
            Node temp = head;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        size++;
        //System.out.println(size);
        //show();
    }
    
    public int popFront() {
        //System.out.println("Pop Front");

        if(head == null){
            return -1;
        }
        if(head.next == null){
            int val = head.val;
            head = null;
            size--;
            //System.out.println(size);
            //show();
            return val;
        }
        int val = head.val;
        head = head.next;
        //show();
        size--;
        //System.out.println(size);
        return val;
    }
    
    public int popMiddle() {
        //System.out.println("Pop Middle");
        if(head == null){
            return -1;
        }
        if(head.next == null){
            int val = head.val;
            head = null;
            size--;
            //System.out.println(size);
            //show();
            return val; 
        }
        if(size == 2){
            int val = head.val;
            head = head.next;
            size--;
            //System.out.println(size);
            //show();
            return val;
        }
        int count = 0;
        Node temp = head;
        Node prev = null;
        while(temp != null){
            if(count == (size - 1)/2){
                int val = temp.val;
                prev.next = temp.next;
                temp = null;
                size--;
                //System.out.println(size);
                //show();
                return val;
            }
            count++;
            prev = temp;
            //prev = 4 ,
            temp = temp.next;
            // temp = 3
        }
        size--;
        //System.out.println(size);
        //show();
        return -1;
    }
    
    public int popBack() {
        //System.out.println("Pop Back");

        if(head == null){
            return -1;
        }
        if(head.next == null){
            int val = head.val;
            head = null;
            size--;
            //System.out.println(size);
            //show();
            return val;
        }
        Node prev = null;
        Node temp = head;
        while(temp.next != null){
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        size--;
        //System.out.println(size);
        //show();
        return temp.val;
    }
    // void show(){
    //     Node temp = head;
    //     while(temp != null){
    //         System.out.print(temp.val + "->");
    //         temp = temp.next;
    //     }
    //     //System.out.println("null");
    // }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * FrontMiddleBackQueue obj = new FrontMiddleBackQueue();
 * obj.pushFront(val);
 * obj.pushMiddle(val);
 * obj.pushBack(val);
 * int param_4 = obj.popFront();
 * int param_5 = obj.popMiddle();
 * int param_6 = obj.popBack();
 */
```

```Java []
//Solved using Deque
class FrontMiddleBackQueue {
    Deque<Integer> dq1, dq2;
    public FrontMiddleBackQueue() {        
        dq1 = new ArrayDeque<Integer>();
        dq2 = new ArrayDeque<Integer>();
    }
    
    public void pushFront(int val) {
        dq1.addFirst(val);
    }    
    
    public void pushBack(int val) {
        dq2.addLast(val);
    }   
    
    public void pushMiddle(int val) {
        while(dq1.size() + 1 < dq2.size())
            dq1.addLast(dq2.removeFirst());       
        while(dq1.size() > dq2.size())
            dq2.addFirst(dq1.removeLast());        
        dq1.addLast(val);        
    }     
    
    public int popFront() {
        if(!dq1.isEmpty())
            return dq1.removeFirst();
        if(!dq2.isEmpty())
            return dq2.removeFirst();
        return -1;    
    }  
    
    public int popMiddle() {
        if(dq1.isEmpty() && dq2.isEmpty())
            return -1;        
        while(dq1.size() < dq2.size())
            dq1.addLast(dq2.removeFirst());     
        while(dq1.size() > dq2.size() + 1)
            dq2.addFirst(dq1.removeLast());
        return !dq1.isEmpty() ? dq1.removeLast() : dq2.removeFirst();
    }    
    
    public int popBack() {
        if(!dq2.isEmpty())
            return dq2.removeLast();
        if(!dq1.isEmpty())
            return dq1.removeLast();
        return -1;            
    }    
}
```
```Java []
// Solved using DoublyLinkedList
class FrontMiddleBackQueue {
    class ListNode{
        int val;
        ListNode next;
        ListNode prev;
        ListNode(int val){
            this.val = val;
        }
    }
    
    int count;
    ListNode start;
    ListNode middle;
    ListNode last;
    
    public FrontMiddleBackQueue() {
        count = 0;
        //place holders for start, middle, last
        start = new ListNode(-1);
        middle = new ListNode(-1);
        last = new ListNode(-1);
        
        start.next = last;
        last.prev = start;
    }
    
    public void pushFront(int val) {
        ListNode newNode = new ListNode(val);
        
        //insert new node in between start and start.next
        newNode.next = start.next;
        newNode.prev = start;
        
        //fix start and start.next to connect the new node
        start.next.prev = newNode;
        start.next = newNode;
        
        //increment count
        count++;
        if (count == 1)
            middle = newNode;   // for first time the newNode will be the middle node
        else if(count % 2 == 0) // if even store to the left side of existing middle node
            middle = middle.prev;
    }
    
    public void pushMiddle(int val) {
        ListNode newNode = new ListNode(val);
        
        //if there is not extra node other than start and last then add the node to the middle
        if (count == 0){
            newNode.prev = start;
            newNode.next = last;
            
            last.prev = newNode;
            start.next = newNode;
        }
        else if(count % 2 == 0){   // if count is even then newNode will be pushed after middle
            newNode.next = middle.next;
            newNode.prev = middle;
            
            middle.next.prev = newNode;
            middle.next = newNode;
        }
        else{
            newNode.prev = middle.prev; // if count is odd then newNode will be pushed before middle
            newNode.next = middle;
            
            middle.prev.next = newNode;
            middle.prev = newNode;
        }
        middle = newNode;
        count++;
        return;
    }
    
    public void pushBack(int val) {
        ListNode newNode = new ListNode(val);
        
        // newNode will be inserted before the last
        newNode.prev = last.prev;
        newNode.next = last;
        
        last.prev.next = newNode;
        last.prev = newNode;
        
        count++;
        if (count == 1)
            middle = newNode;
        else if(count % 2 != 0) // if count is odd then middle will be set to the right side of new node
            middle = middle.next;
    }
    
    public int popFront() {
        // no element to pop
        if (count == 0)
            return -1;
        
        int result = start.next.val;
        //remove the start.next for pop operation
        removeNode(start.next);
        count--;
        if (count % 2 != 0)
            middle = middle.next;
        
        return result;
    }
    
    public int popMiddle() {
        // do only if there are elements
        if (count == 0)
            return -1;
        
        int result = middle.val;
        removeNode(middle);
        if (count % 2 != 0) // if count is odd then set middl to the left node
            middle = middle.prev;
        else
            middle = middle.next; // if count is even then set middle to the right node
        count--;
        return result;
    }
    
    public int popBack() {
        // do only if there are elements
        if (count == 0)
            return -1;
        
        int result = last.prev.val;
        //remove the last.prev node
        removeNode(last.prev);
        count--;
        if (count % 2 == 0) // if count is even then set middle to the left node
            middle = middle.prev;
        return result;
    }
    
    private void removeNode(ListNode node){
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
}
```
``` Java  []
// Solved using LinkedList Collection Frameword
// * Not fit for Interviews)
class FrontMiddleBackQueue {
    LinkedList<Integer> list;
    
    public FrontMiddleBackQueue() {
        list = new LinkedList();
    }
    
    public void pushFront(int val) {
        list.add(0, val);
    }
    
    public void pushMiddle(int val) {
        list.add(list.size() / 2, val);
    }
    
    public void pushBack(int val) {
        list.add(val);
    }
    
    public int popFront() {
        if(isEmpty()) return -1;
       
        return list.remove(0);
    }
    
    public int popMiddle() {
        if(isEmpty()) return -1;
        
        return list.remove(findMiddleIndex());
    }
    
    public int popBack() {
        if(isEmpty()) return -1;
        
        return list.remove(list.size() - 1);
    }
    
    private boolean isEmpty(){
        return list.isEmpty();
    }
    
    private int findMiddleIndex(){
        return (list.size() - 1) / 2;
    }
    

}
```


`Please Upvote \uD83D\uDC4D`

