# Go/Python O(N) time | O(1) space

**Author:** vtalantsev
**Votes:** 6
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/2689261/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/2689261/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(N) time

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1) space

# Code
```Go []
import "math"

func increasingTriplet(nums []int) bool {
    first := math.MaxInt
    second := math.MaxInt
    for _,n :=range(nums){
        if n <= first{
            first = n
        }else if n <= second{
            second = n
        }else{
            return true
        }
    }
    return false
}
```
```python []
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = second = float('inf')
        for n in nums:
            if n <= first:
                first = n
            elif n <= second:
                second = n
            else:
                return True
        return False
```
