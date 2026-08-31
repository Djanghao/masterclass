# Simple Clean Java Solution

**Author:** ayyild1z
**Votes:** 82
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/367682/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/367682/)

---

**Short explanation:**

When you find the selected node, there are three different paths you can block: `left` `right` `parent` In order to guarantee your win, one of those paths should include more nodes than the sum of other two paths. 

.

```java
public boolean btreeGameWinningMove(TreeNode root, int n, int x) {
	if(root == null) return false;

	if(root.val == x){
		int left = count(root.left);
		int right = count(root.right);
		int parent = n - (left+right+1);

		return parent > (left + right) || left > (parent + right) || right > (left + parent);
	}

	return btreeGameWinningMove(root.left, n, x) || btreeGameWinningMove(root.right, n, x);
}

private int count(TreeNode node){
	if(node == null) return 0;
	return count(node.left) + count(node.right) + 1;
}
```