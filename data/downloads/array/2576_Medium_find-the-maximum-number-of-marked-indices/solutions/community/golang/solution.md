# Go/Python O(n) time | O(1) space

**Author:** vtalantsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3232532/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3232532/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maxNumOfMarkedIndices(nums []int) int {
    n := len(nums)
    sort.Ints(nums)
    answer := 0
    i := n / 2 - 1
    j := n - 1
    for i >= 0{
        if nums[i] * 2 <= nums[j]{
            answer+=2
            j--
        }
        i--
    }
    return answer
}
```
```python []
class Solution:
    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        n = len(nums)
        nums.sort()
        answer = 0
        i = n // 2 - 1
        j = n - 1
        while i >= 0:
            if nums[i] * 2 <= nums[j]:
                answer+=2
                j-=1
            i-=1
        return answer
```