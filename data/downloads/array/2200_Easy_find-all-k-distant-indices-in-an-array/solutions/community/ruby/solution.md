# Simple Iterative Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4888669/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4888669/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums
# @param {Integer} key
# @param {Integer} k
# @return {Integer[]}
def find_k_distant_indices(nums, key, k)
    ans = []
    i = 0
    while i < nums.size
        j = 0
        while j < nums.size
            if nums[j] == key and (i-j).abs <= k
                ans << i
                break
            end
            j += 1
        end
        i += 1
    end
      
    ans
end
```