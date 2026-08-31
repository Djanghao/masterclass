# Go iterative solution | Time O(n); Space O(1)

**Author:** ivvasyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5984084/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5984084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In this particular case we can ignore the fact that the linked list is double-linked. We will traverse it from the beginning till the end until the node will not equal `nil`.

# Approach
<!-- Describe your approach to solving the problem. -->
- Create a resulting slice
- Iterate over the linked list until head is not equal to `nil`
- - On each iteration append `head.Val` to the resulting array
- - On each iteration update `head` to `head.Next`
- Return result

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ if we don't count the output slice

$$O(n)$$ otherwise

# Code
```golang []
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Prev *Node
 * }
 */

// Time O(n)
// Space O(1)
func toArray(head *Node) []int {
    var result []int
    for head != nil {
        result = append(result, head.Val)
        head = head.Next
    }
    return result
}
```