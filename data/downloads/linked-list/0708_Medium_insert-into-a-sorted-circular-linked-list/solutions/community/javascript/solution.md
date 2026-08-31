# Javascript O(N) With Comments

**Author:** anna_F
**Votes:** 9
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/1843917/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/1843917/)

---

This approach follows a similar approach to what is described in the official LeetCode solution

```
var insert = function(head, insertVal) { 
    const newNode = new Node(insertVal);
    if (!head) {
        newNode.next = newNode;
        return newNode;
    } 
    
    let curr = head;
    let next = head.next;
    
    while (next != head) {
        // Condition 1 Example: [2, 3, 5, 1]  val = 4
        const condition1 = (insertVal >= curr.val && insertVal <= next.val);
        // Condition 2 Example: [2, 3, 5, 1]  val = 0
        const condition2 = (insertVal <= curr.val && insertVal <= next.val && next.val < curr.val);
        // Condition 3 Example: [2, 3, 5, 1]  val = 6
        const condition3 = (insertVal >= curr.val && next.val < curr.val);
        
        if  (condition1 || condition2 || condition3) {
            curr.next = newNode;
            newNode.next = next;
            return head;
        }
            
        curr = next;
        next = next.next;
    }
    
    // If we reach this point in the code, have not met any of the three conditions listed above.
    // By this point, "curr" is pointing to the last node in the cycle, and "next" is back at the head.
    // The following code will cover conditions like:
    // [3, 3] val = 0;  -> [3, 3, 0]
    // [3, 4, 1] val = 2;  -> [3, 4, 1, 2]
    // [3, 3] val = 5;   -> [3, 3, 5]
    // [3, 3] val = 3; -> [3, 3, 3]
    
    curr.next = newNode;
    newNode.next = head;
    return head;
};
```