# Divide-and-conquer.  F(i) = G(i-1) * G(n-i)

**Author:** liaison
**Votes:** 348
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/31508/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/31508/)

---

This problem is a variant of the problem of [Unique Binary Search Trees][1]. 

I provided a solution along with explanation for the above problem, in the question ["DP solution in 6 lines with explanation"](https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i))

It is intuitive to solve this problem by following the same algorithm. Here is the code in a divide-and-conquer style. 

    public List<TreeNode> generateTrees(int n) {
    	return generateSubtrees(1, n);
    }
 
	private List<TreeNode> generateSubtrees(int s, int e) {
		List<TreeNode> res = new LinkedList<TreeNode>();
		if (s > e) {
			res.add(null); // empty tree
			return res;
		}

		for (int i = s; i <= e; ++i) {
			List<TreeNode> leftSubtrees = generateSubtrees(s, i - 1);
			List<TreeNode> rightSubtrees = generateSubtrees(i + 1, e);

			for (TreeNode left : leftSubtrees) {
				for (TreeNode right : rightSubtrees) {
					TreeNode root = new TreeNode(i);
					root.left = left;
					root.right = right;
					res.add(root);
				}
			}
		}
		return res;
	}

  [1]: https://oj.leetcode.com/problems/unique-binary-search-trees/
  [2]: https://oj.leetcode.com/discuss/24282/dp-solution-in-6-lines-with-explanation-f-i-g-i-1-g-n-i