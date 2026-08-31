# Easy Java recursive solution with explanation

**Author:** yangjun085
**Votes:** 18
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/448708/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/448708/)

---

**Test case explanation:**
1. [1,2,3]: 2 and 3 both leaves, so return 1, output [1,2,3] is the serialization of root 1
1. [1,2,3,4]: 4 is the only leaf, so return 4 itself, output [4] is the serialization of leaf 4
1. [1,2,3,4,5]: 4 and 5 both deepest leaves, so return their lca 2, output [2,4,5] is the serialization of node 2

**so solution here is using dfs by always choosing the child with larger height until we find a node of both children with same height**


	class Solution {
		public TreeNode lcaDeepestLeaves(TreeNode root) {
			if(root == null){
				return null;
			}

			int left = height(root.left);
			int right = height(root.right);
			if(left == right){
				return root;
			}else if(left > right){
				return lcaDeepestLeaves(root.left);
			}else{
				return lcaDeepestLeaves(root.right);
			}
		}

		private int height(TreeNode root){
			if(root == null){
				return 0;
			}
			return 1 + Math.max(height(root.left), height(root.right));
		}
	}
