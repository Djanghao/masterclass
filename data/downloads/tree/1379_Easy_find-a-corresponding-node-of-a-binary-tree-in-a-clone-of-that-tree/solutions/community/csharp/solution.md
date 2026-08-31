# Very concise recursive solution

**Author:** anikit
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/2047443/](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/2047443/)

---

```csharp
public TreeNode GetTargetCopy(TreeNode a, TreeNode b, TreeNode x)
{
	if (a is null) return a;
	if (a == x) return b;
	return GetTargetCopy(a.left, b.left, x) ?? GetTargetCopy(a.right, b.right, x);
}
```

Alternatively, just for fun, you can write it all on one line:
```csharp
public TreeNode GetTargetCopy(TreeNode a, TreeNode b, TreeNode x) => a is null ? a : a == x ? b : GetTargetCopy(a.left, b.left, x) ?? GetTargetCopy(a.right, b.right, x);
```