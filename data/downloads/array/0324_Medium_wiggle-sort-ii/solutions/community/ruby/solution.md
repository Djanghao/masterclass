# Ruby solution with O(1) extra space RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/5188055/](https://leetcode.com/problems/wiggle-sort-ii/solutions/5188055/)

---


# Code
```
# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def wiggle_sort(nums)
  sz = nums.sort!.size
  j = (sz + 1) / 2 - 1
  0.step(sz - 1, 2) do |i|    
    nums.insert(i, nums.delete_at(j)) and j += 1
    nums.insert(i + 1, nums.delete_at(-1)) if i < sz - 1  
  end
end
```