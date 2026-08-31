# Beats 100%

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5232909/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5232909/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} pivot
# @return {Integer[]}
def pivot_array(nums, pivot)
        smaller = []
        larger = []
        equal = []
        i = 0
        while i < nums.length
            if nums[i] < pivot
                smaller << nums[i]
            elsif nums[i] > pivot
                larger << nums[i]
            else 
                equal << pivot
            end
            i = i + 1
        end
        smaller + equal + larger
end
```