# [JavaScript] O(n) time --> Easy to Understand with explanation

**Author:** drewbie
**Votes:** 39
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/982696/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/982696/)

---

It's important to point out that we are looking for the **maximum path**. In the most simple case, a single node can be the max path, or even the entire tree could be the max path. To keep the max variable up to date, I create a global variable that will be updated over the run of the functions.

We are doing a DFS recursive function here.

We need a base case, and that base case is if we hit a null, we return 0. We are going going to finish the left subtree before going to the right subtree, which is denoted by `findSums(node.left)` then after is `findSums(node.right)`. After the left and right subtree are done (for an example, look at a single node), we have three different sums. All three nodes (left, right and node.val), left side (node.val and left), right side (node.val and right) or just the single node. We use these values (with the current max) to find the max.

The most important part is **what do we return for this recursive function?** The answer is we are returning

	The Max Path from this node
	
That can be node.val, leftNodeSum, or rightNodeSum. We cannot return allSum since that would not be a path. Very, very important to point that out.

```
const maxPathSum = (root) => {
	let max = -Infinity;

	const findSums = (node) => {
		// Base case / hit a null
		if (!node) return 0;

		let left = findSums(node.left),
			right = findSums(node.right),
			allSum = left + right + node.val,
			leftNodeSum = left + node.val,
			rightNodeSum = right + node.val;

		// Max is all possible combinations
		max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);
		
		// Return the MAX path, which can be node.val, left + node.val, or right + node.val
		return Math.max(leftNodeSum, rightNodeSum, node.val);
	};

	findSums(root);

	return max;
};
```