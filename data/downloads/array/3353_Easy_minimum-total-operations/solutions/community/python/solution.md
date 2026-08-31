# Track balance

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-operations/solutions/6050988/](https://leetcode.com/problems/minimum-total-operations/solutions/6050988/)

---

It does not make any sence to change the last element as it will only increase number of ops...
Check all numbers equal to the last number using `nums[i] + prev_balance != nums[-1] -> need an op`.

A few examples (right to left):
```
         1  4  2
        -2 -2  0
        +3
balance  1 -2  0 (2 changes)

         1 -4  2
         6  6  0
        -5
balance  1  6  0 (2 changes)
       
         2  2  1  4  2
        -2 -2 -2 -2  0
        +3 +3 +3
        -1 -1
		 0 
balance  0  0  1 -2  0 (3 changes)
```
Implementation:
```
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        ops = 0
        b = 0
        for i in reversed(range(len(nums))):
            ops += (nums[i] + b) != nums[-1]
            b += nums[-1] - (nums[i] + b)
        return ops
```
From the above we can observe that an `op` is needed only when `nums[i] != nums[i + 1] `
```
        return sum(nums[i] != nums[i + 1] for i in reversed(range(len(nums) - 1)))
```