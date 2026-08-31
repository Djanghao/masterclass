# C# Doubly Linked List with dummy head and tail

**Author:** mokadino
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/4322403/](https://leetcode.com/problems/design-linked-list/solutions/4322403/)

---

# Intuition
Doubly Linked list approach with dummy head and tail to avoid edge cases.

# Approach
Using doubly linked list helps with some of the operations such as AddAtIndex and DeleteAtIndex.

Then using dummy Head and Tail helps with not needing to validate so many edge cases. Just have to compensate for that. The intuition is:

- Start current node with Head.Next (ignoring dummy head)
- If current node equals Tail, the end was reached (instead of null). 

# Code
```
public class ListNode {
    public int Val;
    public ListNode Prev;
    public ListNode Next;

    public ListNode(int val) {
        this.Val = val;
    }
}

public class MyLinkedList {
    ListNode Head;
    ListNode Tail; 

    public MyLinkedList() {
        Head = new ListNode(0);
        Tail = new ListNode(0);
        Head.Next = Tail;
        Tail.Prev = Head;
    }
    
    public int Get(int index) {
        var curr = Head.Next;
        while(curr != Tail && index > 0) {
            curr = curr.Next;
            index--;
        }

        if(curr != Tail && index == 0)
            return curr.Val;

        return -1;
    }
    
    public void AddAtHead(int val) {
        var node = new ListNode(val);
        Head.Next.Prev = node;
        node.Next = Head.Next;
        node.Prev = Head;
        Head.Next = node;
    }
    
    public void AddAtTail(int val) {
        var node = new ListNode(val);
        Tail.Prev.Next = node;
        node.Next = Tail;
        node.Prev = Tail.Prev;
        Tail.Prev = node;
    }
    
    public void AddAtIndex(int index, int val) {
        var curr = Head.Next;
        while(curr != Tail && index > 0) {
            curr = curr.Next;
            index--;
        }

        if(index == 0) {
            var node = new ListNode(val);
            node.Next = curr;
            node.Prev = curr.Prev;
            curr.Prev.Next = node;
            curr.Prev = node;
        }
    }
    
    public void DeleteAtIndex(int index) {
        var curr = Head.Next;
        while(curr != Tail && index > 0) {
            curr = curr.Next;
            index--;
        }
        if(curr != Tail && index == 0) {
            curr.Prev.Next = curr.Next;
            curr.Next.Prev = curr.Prev;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
```