# beat 100% in c# with pointer

**Author:** xueshzhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/6053120/](https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/6053120/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
/*
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
*/

public class Solution {
    public Node FlipBinaryTree(Node root, Node leaf)
{
    Node cur = leaf;
    Node parent = null;
    while (cur != null && cur.parent!=null)
    {
        parent = cur.parent;
if (cur == parent.left)
{
    parent.left = null;
}
else
{
    parent.right = null;
}
if (cur.left != null)
{
    cur.right = cur.left;
}
cur.left = parent;
cur = parent;
    }
    return leaf;
}

}
```