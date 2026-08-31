# Go/Python O(n*log(n)) time | O(1) space

**Author:** vtalantsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/3032250/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/3032250/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func getMaximumConsecutive(coins []int) int {
    sort.Ints(coins)
    covered := 0
    for _,value :=range(coins){
        if value <= covered+1{
            covered+=value
        }
    }
    return covered+1
}
```
```python []
class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        coins.sort()
        covered = 0
        for value in coins:
            if value <= covered+1:
                covered+=value
        return covered+1
```