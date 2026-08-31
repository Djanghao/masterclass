# Simplest Java solution with explanation. Inorder traversal,  in place, no dummy node needed

**Author:** pickChicken69
**Votes:** 39
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/1494821/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/1494821/)

---

	class Solution {
		Node head;
		Node tail;

		public Node treeToDoublyList(Node root) {
			if (root == null)
				return null;
			dfs(root);
			tail.right = head;
			head.left = tail;
			return head;
		}

		private void dfs(Node node) {
			if (node == null)
				return;

			dfs(node.left);
			
			// head only need to be dealt with once
			if (head == null)
				head = node;
			// for tail, keep moving the tail right. if the tail ptr is already assigned, need to attach curNode as new tail. Then reassign tail
			if (tail != null) {
				tail.right = node;
				node.left = tail;        
			} 
			tail = node;

			dfs(node.right);
		}
	}
	
The top voted answers look complicated so here is my answer. Standard inorder recursion. Just mark head and tail during recursion.