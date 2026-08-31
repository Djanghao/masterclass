# Python | Odd and Even | O(nlogn)

**Author:** aryonbe
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/3607685/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/3607685/)

---

# Code
```
class Solution:
    def largestEvenSum(self, nums: List[int], k: int) -> int:
        nums.sort(reverse = True)
        res = sum(nums[:k])
        if res%2 == 0: return res
        odds1, evens1 = [], []
        for num in nums[:k]:
            if num%2: odds1.append(num)
            else: evens1.append(num)
        odds2, evens2 = [], []
        for num in nums[k:]:
            if num%2: odds2.append(num)
            else: evens2.append(num)
        tmpres = float('-inf')
        if odds1 and evens2:
            tmpres = max(tmpres, res - odds1[-1] + evens2[0])
        if evens1 and odds2:
            tmpres = max(tmpres, res - evens1[-1] + odds2[0])
        return tmpres if tmpres != float('-inf') else -1 


```