# Pivot around the node

**Author:** akshayvijaynair
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5874900/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5874900/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since a doublly Linked list offers pointers to it's previous and next node, an array can be formed in order by considering the provided node as a pivot to the array

# Approach
<!-- Describe your approach to solving the problem. -->
1. Init an array with the node val
2. run a loop for all previous nodes and add them to left of array
3. run a second loop for all next nodes and add them to right of array

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```typescript []

function toArray(node: _Node | null): number[] {
        let arr = [node.val];

        let f = node.next;
        let b = node.prev;

        while(b!== null){
            arr.unshift(b.val);
            b = b.prev;
        }

         while(f!== null){
            arr.push(f.val);
            f = f.next;
        }

        return arr;
};
```