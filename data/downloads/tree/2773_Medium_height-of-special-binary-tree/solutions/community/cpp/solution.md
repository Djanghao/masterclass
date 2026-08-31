# 1-liner (although the structure is a graph, not a tree) ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/height-of-special-binary-tree/solutions/3778337/](https://leetcode.com/problems/height-of-special-binary-tree/solutions/3778337/)

---

```
int heightOfTree(TreeNode* r) 
{
	return !r or r->right and r==r->right->left ? 0 : 1+max(heightOfTree(r->left), heightOfTree(r->right));
}
```