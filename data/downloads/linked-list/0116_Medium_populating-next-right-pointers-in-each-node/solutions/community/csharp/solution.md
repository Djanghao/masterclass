# C# Simple Recursive DFS

**Author:** ilya-a-f
**Votes:** 3
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/3400134/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/3400134/)

---

```
public class Solution
{
    public Node Connect(Node root)
    {
        if (root?.left != null)
        {
            root.left.next = root.right;
            root.right.next = root.next?.left;
            Connect(root.left);
            Connect(root.right);
        }

        return root;
    }
}
```