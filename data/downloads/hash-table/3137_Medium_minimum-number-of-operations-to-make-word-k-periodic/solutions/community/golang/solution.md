# Python/Go Solution in one line

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5648151/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5648151/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Python []
class Solution:
    def minimumOperationsToMakeKPeriodic(self, word: str, k: int) -> int:
        return len(word) // k - max(Counter(word[i - k:i] for i in range(k, len(word) + 1, k)).values())
```
``` Go []
func minimumOperationsToMakeKPeriodic(word string, k int) int {
	n := len(word)
	count := make(map[string]int)
	for i := k; i <= n; i += k {
		count[word[i-k:i]]++
	}
	var mx int
	for _, cnt := range count {
		mx = max(mx, cnt)
	}
	return n/k - mx
}
```