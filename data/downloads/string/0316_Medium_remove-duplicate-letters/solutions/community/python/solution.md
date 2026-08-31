# Python || O(n) Beats 98% || Stack || Detailed Explanation || Simple

**Author:** brainstormer26
**Votes:** 205
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/1859515/](https://leetcode.com/problems/remove-duplicate-letters/solutions/1859515/)

---

We will be using a stack question. Approach is shown below

last_occ = used to capture last occurence of any character in string

1. We traverse sequentially on the string
2. For each s[i], we check whether it's already in stack or not 
3. if its not in the stack, we need to push it to the stack. But we need to check another condition before pushing.
4. If s[i] is not in the stack (we can check using this in O(1) using a set), and it is smaller than previous elements in stack (lexicographically), and those elements are repeating in future (can check with last_occ), we need to pop these elements
5. Now we can push s[i] in stack
6. Finally just join the characters in stack to form the result

We are using visited set to check whether s[i] is in stack or not in O(1) time, to improve time complexity

Example:
s = 'bcabc'
last_occ = { a : 2, b : 3, c : 4 }
stack trace:
[]
[ 'b' ]
[ 'b', 'c' ]
[ 'a' ]                   (b & c got popped because a < c, a < b and b and c both were gonna repeat in future)
[ 'a' , 'b' ]
[ 'a' , 'b', 'c' ]

```
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        
		last_occ = {}
		stack = []
		visited = set()

		for i in range(len(s)):
			last_occ[s[i]] = i

		for i in range(len(s)):

			if s[i] not in visited:
				while (stack and stack[-1] > s[i] and last_occ[stack[-1]] > i):
					visited.remove(stack.pop())

				stack.append(s[i])
				visited.add(s[i])

		return ''.join(stack)
```


Thanks to [@christ7622](https://leetcode.com/christ7622/) for pointing out the correct time complexity!