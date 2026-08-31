# 100% Ruby O(n) time, O(1) space

**Author:** stanislav_sydorenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/4359146/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/4359146/)

---



# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_alternating_sum(nums)
  sum_odd = sum_even = 0

  (nums.size - 1).downto(0) do |index|
    tmp_even = [sum_odd + nums[index], sum_even].max
    tmp_odd = [sum_even - nums[index], sum_odd].max
    sum_even, sum_odd = tmp_even, tmp_odd
  end

  sum_even 
end


```