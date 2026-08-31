# [JAVA] Clean and Detailed Solution using Singly Linked List

**Author:** Dyanjno123
**Votes:** 34
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/1762118/](https://leetcode.com/problems/design-linked-list/solutions/1762118/)

---

```
class MyLinkedList {
	Node head;
	int length;
    public class Node{
        int val;
        Node next;
        
        Node(int val){
            this.val = val;
        }
    }

    public MyLinkedList() {
        this.head = null;
        this.length = 0;
    }
    
    public int get(int index) {
        if(index >= length)
        	return -1;
        int counter = 0;
        Node temp = head;
        while(counter < index) {
        	counter++;
        	temp = temp.next;
        }
        return temp.val;
    }
    
    public void addAtHead(int val) {
        Node newnew = new Node(val);
        newnew.next = head;
        head = newnew;
        length++;
    }
    
    public void addAtTail(int val) {
        if(head == null) {
        	addAtHead(val);
        }else {
        	Node temp = head;
        	while(temp.next != null)
        		temp = temp.next;
        	Node newnew = new Node(val);
        	temp.next = newnew;
        	length++;
        }
    }
    
    public void addAtIndex(int index, int val) {
    	if(index > length)
    		return;
        if(index == 0)
        	addAtHead(val);
        else {
        	int counter = 1;
        	Node temp = head;
        	while(counter < index) {
        		temp = temp.next;
        		counter++;
        	}
        	Node newnew = new Node(val);
        	Node next = temp.next;
        	temp.next = newnew;
        	newnew.next = next;
        	length++;
        }
    }
    
    public void deleteAtIndex(int index) {
        if(index >= length)
        	return;
        if(index == 0) {
        	head = head.next;
        	length--;
        }else {
        	int counter = 1;
        	Node temp = head;
        	while(counter < index) {
        		counter++;
        		temp = temp.next;
        	}
        	temp.next = temp.next.next;
        	length--;
        }
    }
}
```