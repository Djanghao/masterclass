# O(n) Solution in one function. TypeScript/JavaScript

**Author:** evlbon
**Votes:** 3
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/4222249/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/4222249/)

---

# Intuition
Solution in one function
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
`flatten` function that recursively flattens a linked list. Has a `next` parameter to link the flattened child list to the next node of the parent list, null if the parent list is missing.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function flatten(head: Node | null, next: Node = null): Node | null {
    if(!head) return head
    
    let current = head
    while(current){
        if(current.child){
            current.next = flatten(current.child, current.next)
            current.next.prev = current
            current.child = null
        }
        
        if(!current.next && next){
            current.next = next
            next.prev = current
            break
        }
        else
            current = current.next
    }
       
    
    return head
};
```