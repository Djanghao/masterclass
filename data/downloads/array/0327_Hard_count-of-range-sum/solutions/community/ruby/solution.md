# Ruby simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/5208383/](https://leetcode.com/problems/count-of-range-sum/solutions/5208383/)

---



# Approach
Range sum(i, j) is defined as the sum of the elements in nums between indices i and j inclusive, where i <= j

We need to find number of elements for current sum_j = sum(0, j) 
We need to count all the sum_i = sum(0, i) where i < j  so
lo <= sum_j - sum_i <= up

That problem is equivalent to for "the current sum_j find all sum_i (that we saw before) that statisfy"
sum_j - up <= sum_i <= sum_j - lo


# Code
```
# @param {Integer[]} nums
# @param {Integer} lower
# @param {Integer} upper
# @return {Integer}
def count_range_sum(nums, lo, up)
  return 0 if nums.all?(nums.first) && !(lo..up).include?(nums.first) 
  sum_j, arr  = 0, [0]
  find_index = -> compare { i = arr.bsearch_index{|sum_i| sum_i >= compare }; i ? i : arr.size }

  nums.inject(0) do |count, x|
    sum_j += x
    l, r, i = find_index[sum_j - up], find_index[sum_j - lo + 1], find_index[sum_j]
    arr.insert i, sum_j
    count + r - l
  end

end
```