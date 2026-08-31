# Go/Python O(n) time | O(n) space

**Author:** vtalantsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3763312/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3763312/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func longestSubsequence(arr []int, difference int) int {
    dp := make(map[int]int)
    answer := 1
    for _,item := range(arr){
        dp[item] = dp[item-difference]+1
        answer = max(answer,dp[item])
    }
    return answer
}

func max(a,b int) int{
    if a > b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        dp = defaultdict(int)
        answer = 1
        for item in arr:
            dp[item] = dp[item-difference]+1
            answer = max(answer,dp[item])
        return answer
```