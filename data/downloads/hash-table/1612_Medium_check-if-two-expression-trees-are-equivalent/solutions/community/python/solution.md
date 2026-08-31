# Simple Python3 using BFS

**Author:** kyd9848
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/1622913/](https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/1622913/)

---

"""
	
	class Solution:
			
		def checkEquivalence(self, root1: 'Node', root2: 'Node') -> bool:
				return self.chars(root1) == self.chars(root2)

		def chars(self, root):
			q = deque([(root)])
			res = defaultdict(int)

			while q:
				curr = q.popleft()
				if curr.val.isalpha():
					res[curr.val] += 1

				if curr.left:
					q.append(curr.left)
				if curr.right:
					q.append(curr.right)
        
        return res
		"""
		
Since there is only "+" sign, we don't need to consider the order or other calculation.