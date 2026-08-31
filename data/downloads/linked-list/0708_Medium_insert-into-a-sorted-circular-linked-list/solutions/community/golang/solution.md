# Solution with explanation, comments and examples

**Author:** alohamoraTardis
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/3392436/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/3392436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Need to traverse the linked list, compare node value to x and check for end of linked list i.e. when it connects back to the initially provided starting node.

# Approach
<!-- Describe your approach to solving the problem. -->
Check for no elements in linked list and single element in linked list.

Start with the provided node as the current node and traverse linked list with a loop that runs until the next node is the same as the initially provided node.
In this loop, check using examples for:
- Inserted value (4) being greater or equal to than current node value (3) and less than next node value (5).
- Inserted value (1) being less than or equal to current node value (5) and less than next node value (2) while the latter (2) is less than current node value (5).
- Inserted value (5) being greater than or equal to current node value (5) and greater than next node value (1) while the latter (1) is less than current node value (5).

If you reach the last node (next for the current node is the initially provided node), then insert the new node at the end of the list and update its end to point to the beginning of the list.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 * }
 */

func insert(aNode *Node, x int) *Node {
    // Initialize node with new value (x) to be inserted
    newNode := &Node {
        x, 
        nil,
    }

    // Empty linked list
    if aNode == nil {
        newNode.Next = newNode
        return newNode
    }

    // Single node in linked list
    if aNode.Next == aNode {
        newNode.Next = aNode
        aNode.Next = newNode
        return aNode
    }

    currentNode := aNode
    // For all middle nodes
    for currentNode.Next != aNode {
        // e.g. inserting 4 between 3 and 5
        if (x >=currentNode.Val && x<currentNode.Next.Val) ||
        // e.g. inserting 1 between 5 and 2
        (x<=currentNode.Val && x<currentNode.Next.Val && currentNode.Val>currentNode.Next.Val) ||
        // e.g. inserting 5 between 5 and 1
        (x>=currentNode.Val && x>currentNode.Next.Val && currentNode.Val>currentNode.Next.Val){
            newNode.Next=currentNode.Next
            currentNode.Next=newNode  
            break
        }

        currentNode=currentNode.Next
    }

    // End of linked list
    if currentNode.Next == aNode {
        currentNode.Next = newNode
        newNode.Next = aNode
    }
    return aNode
}
```