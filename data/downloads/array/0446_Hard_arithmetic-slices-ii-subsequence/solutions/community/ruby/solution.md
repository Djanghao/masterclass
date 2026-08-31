# Dynamic Programming

**Author:** sumit_dhandale
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4524627/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4524627/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def number_of_arithmetic_slices(nums)
    dp = Hash.new(0)
    total_count = 0  
    (1...nums.size).each do |i|
        (0...i).each do |j|
            diff = nums[i] - nums[j]
            dp[[i, diff]] += 1
            if dp.has_key?([j,diff])
              dp[[i, diff]] += dp [[j, diff]] 
              total_count += dp[[j,diff]]
            end
        end
    end
    total_count
end
```