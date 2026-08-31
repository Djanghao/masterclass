# Easy Python3 and Ruby Solution with Explanation

**Author:** mitchell000
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-permutation/solutions/4371775/](https://leetcode.com/problems/next-permutation/solutions/4371775/)

---

# Approach
Two Pointer

# Video Explanation
https://youtu.be/hBahlzhHi5c

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```Ruby []
# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def next_permutation(nums)
    i = nums.length - 2
    while i >= 0 && nums[i] >= nums[i+1]
        i -= 1
    end
    if i >= 0
        j = nums.length - 1
        while j >=0 && nums[j] <= nums[i]
            j -= 1
        end
        nums[i], nums[j] = nums[j], nums[i]
    end
    nums[i + 1..-1] = nums[i + 1..-1].reverse
end
```
```Python []
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = len(nums)-2
        while i>= 0 and nums[i] >= nums[i+1]:
            i -= 1

        if i >=0 :
            j = len(nums)-1
            while j >=0 and nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        
        nums[i+1:] = nums[i+1:][::-1]
```