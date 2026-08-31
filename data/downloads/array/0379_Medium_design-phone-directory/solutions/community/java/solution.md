# [Java] Clean O(1)-time,  No HashSet  || detailed explanations

**Author:** xieyun95
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/1270950/](https://leetcode.com/problems/design-phone-directory/solutions/1270950/)

---

Denote **n := maxNumbers** and we create nodes which is n LinkedList Node as follows. Nodes[i] represent number i for each i in [0, n-1]
```
//   index       0          1           2          ...        n-1
//   Nodes    Node(0) ->  Node(1) ->  Node(2)  ->  ...  -> Node(n-1)  ->  null
//              curr
```

The **curr** pointers points to the first valid node. Once we want to get a new value, we aim to return 0 by doing following: 
1.  nullify nodes[0] since it's being used
2.  move curr to nodes[1]


```
class PhoneDirectory {
    /** Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory. */
    class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
        }
    }
    
    Node[] nodes;
    Node curr;
    
    public PhoneDirectory(int maxNumbers) {
        nodes = new Node[maxNumbers];
        
        nodes[0] = new Node(0);
        for (int i = 1; i < maxNumbers; i++) {
            nodes[i] = new Node(i);
            nodes[i-1].next = nodes[i];
        }
        
        curr = nodes[0];
    }
    
    /** Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available. */
    public int get() {
        if (curr == null) return -1;
        
        int res = curr.val;
        curr = curr.next;         // move curr to next position
        
        nodes[res] = null;        // remove the used node
        return res;
    }
    
    /** Check if a number is available or not. */
    public boolean check(int number) {
        return nodes[number] != null;
    }
    
    /** Recycle or release a number. */
    public void release(int number) {
        if (nodes[number] != null) return;
        
        nodes[number] = new Node(number);
        nodes[number].next = curr;         // add the released node before the head
        curr = nodes[number];              // set curr to the released node
    }
}
```