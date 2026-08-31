# Simple JS Solution w/ Comments - DFS

**Author:** qkrrbtjd90
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2184750/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2184750/)

---

```
/**
 * *Time: O(N)
 * *Time: O(N)
 */
// Runtime: 87 ms, faster than 94.83% of JavaScript online submissions for Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree.
// Memory Usage: 49.1 MB, less than 65.52% of JavaScript online submissions for Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree.
const isValidSequence = (root, arr) => {
	const traverse = (root, i) => {
		if (!root) return false;
		if (root.val !== arr[i]) return false; // value mismatch

		// exhausted all values
		if (i === arr.length - 1) {
			// if leaf node, true
			if (!root.left && !root.right) return true;

			return false; // not valid path
		}

		const L = traverse(root.left, i + 1);
		const R = traverse(root.right, i + 1);

		return L || R;
	};

	return traverse(root, 0);
};

```