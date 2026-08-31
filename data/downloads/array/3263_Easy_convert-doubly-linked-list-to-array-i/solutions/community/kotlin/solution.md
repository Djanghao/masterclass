# Linear Traversal in Kotlin

**Author:** d_sushkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5671241/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5671241/)

---

# Intuition
The problem requires converting a doubly linked list into an array. The most straightforward way to do this is by iterating through the list from the head node to the end, collecting each node's value in an array. This way, the order of elements in the array will match the order in the linked list.

# Approach
1. Traverse the List: Start at the head of the doubly linked list and move forward node by node.
2. Collect Values: As you visit each node, collect its value and store it in an array.
3. Return the Array: Once you've reached the end of the list (when the current node is null), return the array containing all the values.

# Complexity
- Time complexity: $$\uD835\uDC42(n)$$ where $$n$$ is the number of nodes in the doubly linked list. This is because we need to visit each node exactly once to collect all the values.

- Space complexity: $$\uD835\uDC42(n)$$ because we need an array of size $$n$$ to store all the values from the linked list.

# Code
```Kotlin []
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var prev: Node? = null
 *     var next: Node? = null
 * }
 */

class Solution {
    fun toArray(root: Node?): IntArray {
        val result = mutableListOf<Int>()
        var current = root
        
        while (current != null) {
            result.add(current.`val`)
            current = current.next
        }
        
        return result.toIntArray()
    }
}   
```