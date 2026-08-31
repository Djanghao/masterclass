# C# Solution

**Author:** rahulsharma347
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5944286/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5944286/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
First, we can start from the given node and traverse the linked list backward until we reach the head node. Second, we traverse the linked list forward from the head node, adding the values of the nodes we encounter to the result array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n), where is the number of nodes in the doubly linked list.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space compleixity O(n) as an array of size n is needed to store linked list values.

# Code
```csharp []
/*
// Definition for a Node.
public class Node {
    public int val;
    public Node prev;
    public Node next;
}
*/

public class Solution {
    public int[] ToArray(Node node) {
        //We can start from the given node and traverse the linked list 
        //backward until we reach the head node.
        while (node != null && node.prev != null) {
            node = node.prev;
        }

        //we traverse the linked list forward from the head node, 
        //adding the values of the nodes we encounter to the answer array.
        List<int> result = new List<int>();
        Node current = node;
        while (current != null) {
            result.Add(current.val);
            current = current.next;
        }
        return result.ToArray();
    }
}
```