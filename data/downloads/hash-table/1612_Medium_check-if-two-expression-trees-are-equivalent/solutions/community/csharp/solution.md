# beat 100% in c#

**Author:** xueshzhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/6042091/](https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/6042091/)

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
/**
 * Definition for a binary tree node.
 * public class Node {
 *     public char val;
 *     public Node left;
 *     public Node right;
 *     public Node(char val=' ', TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool CheckEquivalence(Node root1, Node root2)
{
    char[] r1=new char[26];
    char[] r2=new char[26];
    CheckEquivalenceDFS(root1 , r1);
    CheckEquivalenceDFS(root2, r2);
    for (int i = 0; i < 26; i++)
    {
        if (r1[i] != r2[i]) { return false; }
    }
    return true;
}

private void CheckEquivalenceDFS(Node root, char[] result)
{
    if (root == null) return;
    if (root.left==null && root.right == null)
    {
        result[root.val - 'a']++;
        return;
    }
    CheckEquivalenceDFS(root.left, result);
    CheckEquivalenceDFS(root.right, result);
}
}
```