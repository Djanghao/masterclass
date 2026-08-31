# Python - Binary Search - Easy to understand

**Author:** mr_ajay123
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027191/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027191/)

---

# Intuition

***For a given `target`, get the `maxFrequency`if we try to convert other numbers by doing at most `numOperations`***

1. Get the index of numbers >= target-k (left)
2. Get the index of numbers < target+k+1 (left)
3. So, `right-left` numbers are between `[target-k,target+k]`, so we can do operation on numbers in this range to convert them to target
4. But if the number is already equal to target, operation is not needed. So, `options = right-left-count[target]`
5. So, the frequency after converting at most numOperation numbers will be `min(options, numOperations) + count[target]`



# Code
```python3 []
class Solution:
    def maxFrequency(self, nums: List[int], k: int, numOperations: int) -> int:
        nums.sort()
        count = defaultdict(int)
        for i in nums: count[i] +=1 
            
        def maxFreq(target):
            left = bisect_left(nums, target-k)
            right = bisect_left(nums, target+k+1)
            options = right-left-count[target]
            return min(options, numOperations) + count[target]

        ans = 0
        for i in range(1,max(nums)+1):
            ans = max(ans, maxFreq(i))
        return ans
```