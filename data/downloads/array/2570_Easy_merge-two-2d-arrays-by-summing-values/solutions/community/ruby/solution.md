# 60 ms | Beats 60.00%

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/5490525/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/5490525/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
   First lets collect value for each id in a hash. Iterate the hash and calculate its sum.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} nums1
# @param {Integer[][]} nums2
# @return {Integer[][]}
def merge_arrays(nums1, nums2)
   hash = {}
   [nums1,nums2].each do |nums|
     nums.each do |num|
       hash[num[0]].nil? ? hash[num[0]] = [num[1]] : hash[num[0]] += [num[1]]
     end
   end 
   res = []
   sorted_keys = hash.keys.sort
   sorted_keys.each do |key|
     res << [key, hash[key].sum]
   end
   res
end
```