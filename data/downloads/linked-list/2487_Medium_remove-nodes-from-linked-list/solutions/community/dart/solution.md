# BEATS 100% DART solution with Explanation

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5120276/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5120276/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to remove nodes from a linked list if there exists a node with a greater value to its right. This problem can be solved using a stack data structure. The stack will help us keep track of the nodes that should be kept in the final linked list.
# Approach
<!-- Describe your approach to solving the problem. -->
The approach is to traverse the linked list from left to right and use a stack to keep track of the nodes. For each node, we check if it is greater than the top node of the stack. If it is, we pop the nodes from the stack until we find a node that is greater or the stack becomes empty. This ensures that for each node, all the nodes to its left in the stack are greater than it. We then add the current node to the stack. At the end of the traversal, the stack contains the nodes that should be kept in the final linked list, in the correct order.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n), where n is the number of nodes in the linked list. This is because we are traversing the linked list once and for each node, we are performing a constant amount of work.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n), where n is the number of nodes in the linked list. This is because in the worst case, we might end up adding all the nodes to the stack.
# Code
```
class Solution {
  ListNode? removeNodes(ListNode? head) {
    // If the head is null, return null
    if(head==null) return null;

    // Initialize a pointer to the head of the list
    ListNode? p = head;

    // Initialize an empty stack to keep track of the nodes
    List<ListNode> stack = [];

    // Traverse the list
    while(p!=null){
        // Pop the nodes from the stack that are less than the current node
        while(stack.isNotEmpty && stack.last.val<p.val){
            stack.removeLast();
        }

        // If the stack is not empty, set the next of the top node to the current node
        if(stack.isNotEmpty) stack.last.next = p;

        // Add the current node to the stack
        stack.add(p);

        // Move to the next node
        p=p.next;
    }

    // Return the first node in the stack, which is the head of the modified list
    return stack.first;
  }
}
```