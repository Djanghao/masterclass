# ✅ Deepest Leaves Sum | Short & Easy Solutions w/ Explanation | BFS & DFS Approach

**Author:** archit91
**Votes:** 209
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/1152947/](https://leetcode.com/problems/deepest-leaves-sum/solutions/1152947/)

---

The problem can be easily solved with simple tree traversals. We just need to correctly reset the `sum` (when a new depth is reached), then accumulate into `sum` (when current depth is the maximum reached till now).

---

\u2714\uFE0F ***Solution - I (DFS Traversal)***

We can do a simple Depth-First Traversal on the Tree. We can obviously do one dfs traversal and find the depth of the deepest level and in the second dfs pass, we will add only those nodes that are on the deepest level. But we don't actually need two passes. This can be done in just one DFS pass.

We maintain `sum` which will store sum of values of deepest level nodes till now and `deepest` which will store the depth or level of the deepest nodes. There will be following cases available to us where current Node is -

* **Not a Leaf Node**  - Traverse the left and right node of the current node.
* **A Leaf Node** - This case will have 3 sub-cases possible -
	* *`depth > deepest`* - If current node is the deepest node observed till now, reset the sum to current node value and set `deepest = depth`.
	* *`depth == deepest`* - The current node is part of the deepest nodes observed till now. Add current root value to sum.
	* *`depth < deepest`* - This node is not the deepest node. Just ignore this node.
* **A NULL Node** - We can't traverse any further. So just return.

Lastly, we will return the sum accumulated till now. The finaly value stored in sum will contain only the sum of value of the nodes (leaves) at deepest level. The implementation of this is given below -

```
int deepest = 0, sum = 0;
int deepestLeavesSum(TreeNode* root, int depth = 0) {
	if(!root) return 0;  // current node is NULL - just return.
	if(!root -> left && !root -> right) // if current is a leaf node
		if(depth == deepest) sum += root -> val;  // if depth is exactly equal to deepest, add to sum
		else if(depth > deepest) sum = root -> val, deepest = depth; // found a more deeper leaf node, reset sum and update deepest
	deepestLeavesSum(root -> left, depth + 1);   // recurse for the left, 
	deepestLeavesSum(root -> right, depth + 1);  // and the right node of the current node
	return sum; // finally return the sum accumulated till now which will be sum of value of deepest leaves
}
```

***Time Complexity :*** **`O(N)`**, where, `N` is the total number of nodes in the given Tree.
***Space Complexity :*** **`O(N)`**, In the worst case, the tree may have all nodes only to the left or right making the max recursion depth equal to `N`.


----

\u2714\uFE0F ***Solution - II (BFS Traversal)***

We can also do a Breadth-First Traversal or Level-Order Traversal. 

In this we visit each depth level one by one. Just reset `sum` to 0 at start of each depth level and add the values of all nodes on that level. At the end, `sum` will store the sum of all values of the last level or the sum of values or deepest leaves.

```
int deepestLeavesSum(TreeNode* root) {
	int sum = 0, n;
	queue<TreeNode*> q; // required for level-order traversal
	q.push(root);
	while(!q.empty()){
		sum = 0, n = size(q); // reset sum when deeper level is reached and accumulate for that level
		for(int i = 0; i < n; i++){
			auto top = q.front(); q.pop();
			sum += top -> val;     
			if(top -> left) q.push(top -> left);
			if(top -> right) q.push(top -> right);
		}                
	}
	return sum; // final value held by 'sum' will be sum of values of nodes at the deepest level
}
```

***Time Complexity :*** **`O(N)`**, where, `N` is the total number of nodes in the given Tree.
***Space Complexity :*** **`O(N)`**

----

*Best Runtime -*

<table><tr><td><img src=https://assets.leetcode.com/users/images/8be5a42a-d12a-4053-9f53-1a6ea8dae47b_1618129416.660641.png /></td></tr></table>


---

*Q. DFS vs BFS. Which would be more efficient ? When would you prefer one over the other ?*
Ans : If you were to get such a problem in interview, it's very likely that the interviewer would proceed to ask a follow-up question such as this one. The DFS vs BFS is a vast topic of discussion. But one thing that's for sure (and helpful to know) is none is always better than the other. You would need to have an idea of probable structure of Tree/Graph that would be given as input (and ofcourse what you need to find depending on the question ) to make a better decision about which approach to prefer.

A **DFS** is easy to implement and generally has advantage of being space-efficient, especially in a balanced / almost balanced Tree and the space required would be `O(h)` (where `h` is the height of the tree) while we would require `O(2^h)`  space complexity for **BFS** traversal which could consume huge amount of memory when tree is balanced & for `h` is larger.

 On the other hand, **BFS** would perform well if you don't need to search the entire depth of the tree or if the tree is skewed and there are only few branches going very deep. In worst case, the height of a tree `h` could be equal to `n` and if there are huge number of nodes, DFS would consume huge amounts of memory & may lead to stackoverflow.
 
 In this question, the DFS performed marginally better giving better space efficiency than BFS. Again, this depends on the structure of trees used in the test cases. 
 
 These points I mentioned may sound very general and common, but I have just mentioned them here. Maybe someone might find it useful someday :)

---
---

\uD83E\uDDD1\u200D\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any questions or mistakes in my post, please do comment below \uD83D\uDC47 

---
---