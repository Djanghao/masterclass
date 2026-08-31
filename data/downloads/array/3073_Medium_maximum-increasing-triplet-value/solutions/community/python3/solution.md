# [Python] No SortedList, sort and monotonic stack. O(n*log(n))

**Author:** cy171
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4839969/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4839969/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
examine all possible values of j to find the answer

# Approach
<!-- Describe your approach to solving the problem. -->
Similar to other (i, j, k) problems, we'll examine all possible values of j to find the answer. For each j, we try to identify the maximum value of nums[k] where nums[k] > nums[j] and k > j. This can be achieved by traversing the array from right to left, updating the maximum value encountered so far.

To find the i, if use the monotonic stack directly, for each j, we can find the i with i <j and nums[i] < nums[j], this approach does not guarantee that nums[i] is the maximum. Instead, we seek the largest i satisfying these conditions.
To accomplish this, we can reverse the process: sort the indices based on their values and then use their original indices to apply the monotonic stack method.

PS. you can think why we have to sorte base on (nums[x], -x)

# Complexity
- Time complexity: O(n*log(n)) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        max_right = [-1]*len(nums)
        curr = ans = 0
        for i in range(len(nums)-1,-1,-1):
            if nums[i] >= curr:
                curr = nums[i]
            else:
                max_right[i] = curr
        stack = []
        for i in sorted(range(len(nums)), key = lambda x: (nums[x], -x)):
            while stack and stack[-1] > i:
                stack.pop()
            if stack and max_right[i] >= 0:
                ans = max(ans, nums[stack[-1]]-nums[i]+max_right[i])
            stack.append(i)
        return ans
```