# Dinamic, Kotlil Solution with accurate description

**Author:** ogurcovwm
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4140899/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4140899/)

---


# Approach
Using DP we can calculate -> How many arrays can be long N, with maximal element M and score K?

-> Base: We have exactly one array of lenght 0, with 0 score.
-> Step: There are two possible ways to get n, m, k array:
---> First: Take array of size = n - 1, maxElement = m, and score = k, then add any element not greather than m to the end.
---> Second: Take size = n - 1, maxElement - any less than n, score = k - 1 and add elemen = n to the end.
-> Answer: In current approach the answer is the sum of `d[n][...][k]`

# Complexity
- Time complexity: $O(n * m * k)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n * m * k)$
How to make $O(m * k)$??

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const val Module = (1e9 + 7).toLong()

class Solution {
	fun numOfArrays(n: Int, m: Int, k: Int): Int {
		if (m < k || n < k || k == 0) return 0
		// How many arrays can be long N, with maximal element M and count K
		val dp = MutableList(n + 1) { MutableList(m + 1) { MutableList(k + 1) { 0 } } }
		dp[0][0][0] = 1
		for (size in 1..n) {
			for (maxElement in 1..m) {
				for (score in 1..k) {
                    // DP Step:
					var currentScore: Long = 0
					// Take size - 1, maxElement, score and add any value no more than maxElement
					currentScore += dp[size - 1][maxElement][score].toLong() * maxElement
					// Take size - 1, maxElement - any less current, score - 1 and add maxElement
					for (prevMaxVal in 0..<maxElement) currentScore += dp[size - 1][prevMaxVal][score - 1]

					dp[size][maxElement][score] = (currentScore % Module).toInt()
				}
			}
		}
		return (dp[n].map { it[k].toLong() }.sum() % Module).toInt()
	}
}
```