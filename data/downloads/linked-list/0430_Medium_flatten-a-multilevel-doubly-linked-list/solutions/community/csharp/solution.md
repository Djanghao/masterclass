# C#, iterative preorder traversal solution, beats 96% runtime

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/540211/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/540211/)

---

```
public class Solution {
    public Node Flatten(Node head) {
        if (head == null)
            return head;
        
        Node node = head;
        Stack<Node> stack = new Stack<Node>();
        stack.Push(node);
        while (stack.Count != 0) {
            node = stack.Pop();
            if (node.next != null) {
                stack.Push(node.next); 
            }
            else if (stack.Count != 0) {
                node.next = stack.Peek();
                stack.Peek().prev = node;
            }
            if (node.child != null) {
                stack.Push(node.child);
                node.next = node.child;
                node.child.prev = node;
                node.child = null;
            }
        }
        return head;
    }
}
```