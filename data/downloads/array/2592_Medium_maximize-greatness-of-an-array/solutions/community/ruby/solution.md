# Sorting + Greedy

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4834607/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4834607/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def maximize_greatness(nums)
    nums.sort!
    perm = []
    i = 0
    j = 0
    while nums[i] and j < nums.size
        num = nums[i]
        
        while nums[j] and nums[j] <= num
            j += 1
        end

        if nums[j] and nums[j] > num
            perm.push nums[j]
            j += 1
        end

        i += 1
    end

    perm.size
end
```