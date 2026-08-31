# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 27
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/456057/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/456057/)

---

### The idea
1. Use a stack to keep track of different levels of child nodes
2. For each node, link back to the `prev` node. This way it's easier to link the end of a child list to the parent list.
``` javascript
var flatten = function(head) {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);

    let stack = [head];
    let current = dummyHead;
    let prev = null;

    while(stack.length!=0) {        
        current = stack.pop();
        
        if (prev) {
            current.prev = prev;
            prev.next = current;
        } 

        if (current.next!=null) stack.push(current.next);
        if (current.child!=null) { // has a child
            stack.push(current.child);
            current.child = null; // remove child reference
        }
        
        prev = current;   
    }
    
    return dummyHead.next;
};
```