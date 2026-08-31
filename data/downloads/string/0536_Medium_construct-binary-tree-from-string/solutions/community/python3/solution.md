# Python O(n) solution using stacks

**Author:** siddheshgadkar
**Votes:** 51
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/971469/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/971469/)

---

Every time an opening brace is seen
If a number is present in num, Create a TreeNode and append it to the stack.
Every time a closing brace is seen, If a number is present in num, Create a TreeNode, check if the parent at the top of the stack has a left child, if true, attach the node to the parent's left child, if false, attach the node to the parent's right child

If a number is not present in num, it means that the node at the top of the stack has already been assigned its children
Pop the node from the stack
Check if the current topmost element of stack has a left child
if true, attach the node to the left
if false, attch the node to the right

return top most element of the stack

Time Complexity: O(n) where n is the length of the string
Space Complexity: O(N) where N is the number of Nodes in the Tree (or the number of integers in the string)

		
		def str2tree(self, s: str) -> TreeNode:
     
			num = ''
			stack = []
			for i in s:
				if i.isdigit() or i == '-': 
					num+=i
				elif i=='(': 
					if num: 
						node = TreeNode(num)
						num=''
						stack.append(node)
				else:
					if num:
						node = TreeNode(num)
						num =''
						if stack[-1].left==None:
							stack[-1].left = node 
						elif stack[-1].right==None:
							stack[-1].right = node 
					else: 
						node = stack.pop()
						if stack[-1].left==None:
							stack[-1].left = node
						else:
							stack[-1].right = node


			return stack[-1] if stack else TreeNode(num) if s else None
    
            
