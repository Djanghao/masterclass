# C++ || Easy to understand

**Author:** datnguyen2k3
**Votes:** 98
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1962281/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1962281/)

---

If u use inorder traveral, problem will be find 2 mistakes in acending array and swap them
For example array: 1 2 3 4 5 6 7
-> swap random two elments -> 1 2 6 4 5 3 7 (swap 3 and 6)
-> Question is how can know 2 elements is 3 and 6?
-> First: find the first number have index i satisfy arr[i - 1] > arr[i] => first mistake have index i - 1 (in the exam, first mistake is 6)
-> Second: continue but don't change first mistake, if arr[i - 1] > arr[i] and u had found the first mistake => second mistake is i;
in the example second mistake in the first time is 4 change to 3

In the tree question, to keep compare, u need a variable is previous root.
By @LemonHerbs :
if we encounter a tree looking like this:

	   5
	  /   \\
	6     8
		 /
		 4
firstMistake will be assigned to 6, and in the same recursive call, secondMistake will be assigned to 5.
Then in the next recursive call, firstMistake will NOT be changed since it is not a null pointer, while secondMistake will be
updated to 4. Then in the following recursions the 2 mistake nodes remain unchanged.
When inorder() returns to the main function recoverTree(), the 2 mistakes swap values and hence the correct BST.

	   5
	  /   \\
	4     8
		 /
		 6
Code:

	class Solution {
	public:
		TreeNode* firstMistake, *secondMistake, *pre;
		void recoverTree(TreeNode* root) {
			pre = new TreeNode(INT_MIN);
			inorder(root);
			swap(firstMistake->val, secondMistake->val);
		}

		void inorder(TreeNode* root) {
			if(root == nullptr) 
				return;

			inorder(root->left);

			if(firstMistake == nullptr && root->val < pre->val)
				firstMistake = pre;
			if(firstMistake != nullptr && root->val < pre->val)
				secondMistake = root;
			pre = root;

			inorder(root->right);
		}
	};
