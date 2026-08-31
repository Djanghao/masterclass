# beat 100% for 1261. Find Elements in a Contaminated Binary Tree

**Author:** xueshzhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/6034193/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/6034193/)

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
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class FindElements {

    TreeNode root = null;
public FindElements(TreeNode root)
{
    this.root = root;
    RecoverElements(this.root, 0);
}

public bool Find(int target)
{
    var s = this.GetPath4Target(target);
    TreeNode cur = this.root;
    while (s.Count > 0)
{
    int v = s.Pop();
    if (cur == null || cur.val != v)
    {
        return false;
    }
    if (s.Count > 0 && cur.left != null && cur.left.val == s.Peek())
    {
        cur = cur.left;
    }
    else
    {
        cur = cur.right;
    }
}
    return true;
}
private void RecoverElements(TreeNode root, int rootValue)
{
    root.val = rootValue;
    if (root.left != null)
    {
        RecoverElements(root.left, rootValue * 2 + 1);
    }
    if (root.right!=null)
    {
        RecoverElements(root.right, rootValue * 2 + 2);
    }
}
private Stack<int> GetPath4Target(int target)
{
    Stack<int> result = new Stack<int>();
    while (target > 0)
    {
        result.Push(target);
        int reminder = target % 2 != 0 ? 1 : 2;
        target = (target - reminder) >> 1;
    }
    result.Push(0);
    return result;
}
}

/**
 * Your FindElements object will be instantiated and called as such:
 * FindElements obj = new FindElements(root);
 * bool param_1 = obj.Find(target);
 */
```