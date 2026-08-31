# Kotlin/Java, Iterative Method

**Author:** Mahoraga_JJK
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/4471836/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/4471836/)

---

# Intuition & Approach
From the example in the problem description, it is clear that we need to connect the entire child list between the parent and the next one to the parent.

# Complexity
- Time complexity:
$$O(n)$$, where n = total no of nodes

- Space complexity:
$$O(1)$$

# Code
``` kotlin []
class Solution {
    fun flatten(root: Node?): Node? {
        var node=root
        while(node!=null) {
            if (node?.child!=null) { // if child present we need to rearrange
                
                var rightMost = node?.child // find the right end of the child list
                
                while (rightMost?.next!=null) {
                    rightMost = rightMost?.next // reach right end of child list
                }

                // store the current node's next in a variable for future use
                var nextNode = node?.next 
                
                // connect node and child as if there are next to each to other
                node?.next = node?.child // change current node next to node child
                node?.child?.prev = node // change the child prev to connect to current node
                
                // connect rightend of child list to current node's next as if there are next to each to other
                rightMost?.next = nextNode // change the rightend next to current node's next
                nextNode?.prev = rightMost // change the current node's next prev's to right most end of child
                
                // mark node child to null
                node?.child = null 
            }

            node=node?.next
        }
        return root
    }
}
```
``` Java []
class Solution {
    public Node flatten(Node head) {
        var node=head;
        while(node!=null) {
            if (node.child!=null) { // if child present we need to rearrange
                
                var rightMost = node.child; // find the right end of the child list
                
                while (rightMost.next!=null) {
                    rightMost = rightMost.next; // reach right end of child list
                }

                // store the current node's next in a variable for future use
                var nextNode = node.next;
                
                // connect node and child as if there are next to each to other
                node.next = node.child; // change current node next to node child
                node.child.prev = node; // change the child prev to connect to current node
                
                // connect rightend of child list to current node's next as if there are next to each to other
                rightMost.next = nextNode; // change the rightend next to current node's next
                if (nextNode!=null)
                    nextNode.prev = rightMost; // change the current node's next prev's to right most end of child
                
                // mark node child to null
                node.child = null; 
            }

            node=node.next;
        }
        return head;
    }
}
```