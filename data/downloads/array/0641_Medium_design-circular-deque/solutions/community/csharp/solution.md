# understand once to beat 100%, simple approach added video link

**Author:** vinod_aka_veenu
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5841726/](https://leetcode.com/problems/design-circular-deque/solutions/5841726/)

---

# YouTube Explanation https://youtu.be/zSw_Q-r9qc4
# Intuition and Approach
lets keep it very simple, our Deuque would be a doubly linked list, having simple object of Node class 
**class Node { val, next, prev}**

we will always keep 2 nodes **head** and **tail** and all the insertion and deletion we will do between these two nodes of our queue.

we will keep a currSize variable to keep track of current size.

**how head and tail would look like when queueu is empty?**
well it would like below
{head<--->tail , currSize=0} 

all the insertion, deletion will happen between **head** and **tail.**

**but bro one question, why doubly linked list, why can't singly?**

well, just think about situation, lets say we have 900 nodes in our queue, and somebody just **deleted last node**, now lets say next request comes **getRear()**, so now with singly list you have to find it in O(n), whereas with doubly list you just need **tail.prev** O(1).

**ok, got it, so how about rest of the methods?**

i am writing two methods **deleteNode(Node nd)** and **addNode(Node temp, in val)**

first method is to delete a given node and 2nd one is add a node with value after a given node (temp);

**ok so you are using these two methods for rest of the operations?** 
very simple for addFront(), and addRear()===> i am calling them on **head** and **tail.prev**, if currSize is full i am returning false otherwise i would add it to list, increase **currSize++** and return true.

and for delete from **front** and **rear** first check is currSize=0 then return false otherwise i am deleting the node and decreasing **curSize--** 

for other methods we have to look at **currSize**, if = 0 , then empty , **currSize==k** then its full. my overall time complexity is O(1)

**why its time complexity is O(1)?**
because all operation we have done in constant time, to traversal at all.

**still doubt, no worries i would release youtube video soon**




# Complexity
- Time complexity:
O(1)


# Code
```java []
class Node
{
  public int val;
  public Node prev; 
  public Node next;
  public Node(int val)
  {
    this.val = val;
    prev = null;
    next = null;
  }   
}

class MyCircularDeque {
    Node head = new Node(-1);
    Node tail = new Node(-1); 
    int size; 
    int currSize;

    public MyCircularDeque(int k) {
    head.next = tail;
    tail.prev = head;
    size = k;
    currSize = 0;
    }
    
    public boolean insertFront(int value) {
    if(currSize==size)
    return false;
    addNode(head, value);
    currSize++;
    return true;
    }
    
    public boolean insertLast(int value) {
    if(currSize==size)
    return false;
    addNode(tail.prev, value);
    currSize++;
    return true;    
    }
    
    public boolean deleteFront() {
    if(currSize==0)
    return false;
    deleteNode(head.next);
    currSize--; 
    return true;   
    }
    
    public boolean deleteLast() {
     if(currSize==0)
     return false; 
     deleteNode(tail.prev);
     currSize--;
     return true;
    }
    
    public int getFront() {
    if(currSize==0)
    return -1;
    return head.next.val;    
    }
    
    public int getRear() {
    if(currSize==0)
    return -1; 
    return tail.prev.val;   
    }
    
    public boolean isEmpty() {
    return currSize==0;    
    }
    
    public boolean isFull() {
    return currSize==size;    
    }

    public void addNode(Node head, int value)
    {
    Node after = head.next;
    Node temp = new Node(value);
    head.next = temp;
    temp.prev = head;
    temp.next = after;
    after.prev = temp;
    }

    public void deleteNode(Node head)
    {
    Node after = head.next;
    Node before = head.prev;
    before.next = after;
    after.prev = before;
    }

}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++
# code
public class Node
{
    public int val;
    public Node prev;
    public Node next;
    
    public Node(int val)
    {
        this.val = val;
        prev = null;
        next = null;
    }
}

public class MyCircularDeque
{
    private Node head = new Node(-1);
    private Node tail = new Node(-1);
    private int size;
    private int currSize;

    public MyCircularDeque(int k)
    {
        head.next = tail;
        tail.prev = head;
        size = k;
        currSize = 0;
    }

    public bool InsertFront(int value)
    {
        if (currSize == size)
            return false;
        
        AddNode(head, value);
        currSize++;
        return true;
    }

    public bool InsertLast(int value)
    {
        if (currSize == size)
            return false;
        
        AddNode(tail.prev, value);
        currSize++;
        return true;
    }

    public bool DeleteFront()
    {
        if (currSize == 0)
            return false;
        
        DeleteNode(head.next);
        currSize--;
        return true;
    }

    public bool DeleteLast()
    {
        if (currSize == 0)
            return false;
        
        DeleteNode(tail.prev);
        currSize--;
        return true;
    }

    public int GetFront()
    {
        if (currSize == 0)
            return -1;
        
        return head.next.val;
    }

    public int GetRear()
    {
        if (currSize == 0)
            return -1;
        
        return tail.prev.val;
    }

    public bool IsEmpty()
    {
        return currSize == 0;
    }

    public bool IsFull()
    {
        return currSize == size;
    }

    private void AddNode(Node head, int value)
    {
        Node after = head.next;
        Node temp = new Node(value);
        head.next = temp;
        temp.prev = head;
        temp.next = after;
        after.prev = temp;
    }

    private void DeleteNode(Node head)
    {
        Node after = head.next;
        Node before = head.prev;
        before.next = after;
        after.prev = before;
    }
}


/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * MyCircularDeque obj = new MyCircularDeque(k);
 * boolean param_1 = obj.insertFront(value);
 * boolean param_2 = obj.insertLast(value);
 * boolean param_3 = obj.deleteFront();
 * boolean param_4 = obj.deleteLast();
 * int param_5 = obj.getFront();
 * int param_6 = obj.getRear();
 * boolean param_7 = obj.isEmpty();
 * boolean param_8 = obj.isFull();
 */
```