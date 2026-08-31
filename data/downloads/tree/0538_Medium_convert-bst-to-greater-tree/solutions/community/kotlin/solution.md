# Kotlin. Explained, clear & Easy-understanding solution. O(n). Recursive.

**Author:** m-d-f
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1057481/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1057481/)

---

A tour of the tree, from right to left.
At each step add to the current node the value of the right tree, add to the amount we have accumulated so far the value of the current node, and add to each node in the left sub-tree the amount we have accumulated so far.
	
	
	class Solution {
		fun convertBST(root: TreeNode?): TreeNode? {
			var sum: Int = 0;
			fun sol(root: TreeNode?): TreeNode? {
				if (root != null) {
					sol(root.right);
					root.`val` += sum;
					sum = root.`val`;
					sol(root.left)
				}
				return root
			}
			return sol(root)
		}
	}