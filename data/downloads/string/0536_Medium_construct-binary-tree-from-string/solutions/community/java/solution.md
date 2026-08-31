# Java | Iterative approach with Stack | with comments

**Author:** rainbowh
**Votes:** 5
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1111443/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1111443/)

---

Time: O(n), 
Space: O(h) - height of the tree

The logic here is that we use the **stack** to keep track of the nodes we are adding children to. 
- We always try to handle the node on top of the stack, current = stack.peek() 
- If encounters a close parenthesis, ')', we need to go up one level 

To handle the numbers, 
- If encounters a negative sign, '-', we mark the mulitplier to be -1
- If encounters a digit, we delay the construction of a tree node when all digits of this number are seen. 



```
public TreeNode str2tree(String s) {
	if (s == null || s.length() == 0) return null;

	int multiplier = 1, num = 0;
	TreeNode curr, root = null;
	Stack<TreeNode> stack = new Stack<>();
	char c;

	for (int i = 0; i < s.length(); i++) {
		c = s.charAt(i);
		if (isDigit(c)) {
			// adds the current digit as the lowest digit of a number
			num = 10 * num + (c - '0');
			// delay construction of a tree node
			if (i == s.length() - 1 || !isDigit(s.charAt(i + 1))) {
				// if this is the last char or next char is not a digit
				curr = new TreeNode(num * multiplier);

				// checks if there is a parent node
				// if so, determines whether adding curr to its left or right
				addCurrToParent(curr, stack);

				// add current node to stack
				stack.push(curr);

				// set root
				if (root == null) root = curr;

				// reset
				num = 0;
				multiplier = 1;
			}
		} else if (c == ')') {
			// go up one level
			stack.pop();
		} else if (c == '-') {
			// sets multiplier to be negative
			multiplier = -1;
		}
	}
	return root;
}

//checks if there is a parent node
private boolean hasParent(Stack<TreeNode> stack) {
	return !stack.isEmpty();
}

// if there is a parent node, determines whether adding curr to its left or right
private void addCurrToParent(TreeNode curr, Stack<TreeNode> stack) {
	if (!hasParent(stack)) return;
	TreeNode parent = stack.peek();
	if (parent.left == null) { // always add to left first
		parent.left = curr;
	} else {
		parent.right = curr;
	}
}

private boolean isDigit(char c) {
	return c <= '9' && c >= '0';
}
