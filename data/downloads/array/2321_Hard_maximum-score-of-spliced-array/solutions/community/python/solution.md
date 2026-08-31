# Recursion + Memo | Tabulation | O(1) space solution

**Author:** shivambhagat02
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2200310/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2200310/)

---

Let's think recursively, 
for any index i, we will either choose a[i] or b[i] along with a variable say, j, that will denote the operation
case 1 : When j = 0, it denotes there is no operation done
case 2: When j = 1, it denotes one jump has been done
case 3: When j = 2, it denotes two jumps has been done and no further jumps are possible.

Let's have a look at the code below,

"""


	class Solution:
		def maximumsSplicedArray(self, a: List[int], b: List[int]) -> int:

			def rec(i, j, a, b):

				if i >= n:
					return 0

				if dp[i][j] != -1:
					return dp[i][j]

				if j == 2:
					dp[i][j] = a[i] + rec(i + 1, j, a, b)

				elif j == 1:
					dp[i][j] = max(a[i] + rec(i + 1, j + 1, a, b), b[i] + rec(i + 1, j, a, b))
				else:
					dp[i][j] = max(a[i] + rec(i + 1, j, a, b), b[i] + rec(i + 1, j + 1, a, b))

				return dp[i][j]

			n = len(a)
			
			dp = [[-1 for _ in range(3)] for _ in range(n)]
			start_from_a = rec(0, 0, a, b)
			
			dp = [[-1 for _ in range(3)] for _ in range(n)]
			start_from_b = rec(0, 0, b, a)

			return max(start_from_a, start_from_b)

"""
Time complexity = O(3 * n)
Space complexity = O(3 * n) + stack space

Let's reduce the stack space by writing tabulation, using the recurrence above
The tabulation code goes as

"""

	class Solution:
		def maximumsSplicedArray(self, a: List[int], b: List[int]) -> int:

			n = len(a)

			def C(a, b):
				dp = [[0 for _ in range(3)] for _ in range(n + 1)]

				for i in range(1, n + 1):

					dp[i][2] = a[i - 1] + dp[i - 1][2]
					dp[i][1] = max(a[i - 1] + dp[i - 1][2], b[i - 1] + dp[i - 1][1])
					dp[i][0] = max(a[i - 1] + dp[i - 1][0], b[i - 1] + dp[i - 1][1])

				return max(dp[n])

			start_from_a = C(a, b)
			start_from_b = C(b, a)

			return max(start_from_a, start_from_b)
        

"""

We can further reduce the space usage as dp[i] is only dependent on dp[i - 1]
The code with O(1) complexity goes as below,
"""


	class Solution:
		def maximumsSplicedArray(self, a: List[int], b: List[int]) -> int:

			n = len(a)

			def C(a, b):

				x, y, z = 0, 0, 0

				for i in range(n):

					x = max(a[i] + x, b[i] + y)
					y = max(a[i] + z, b[i] + y)
					z = a[i] + z

				return max(x, y, z)

			return max(C(a, b), C(b, a))
"""
