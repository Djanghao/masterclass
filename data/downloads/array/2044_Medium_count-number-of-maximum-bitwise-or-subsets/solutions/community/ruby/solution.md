# Ruby solution

**Author:** nehady40
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931914/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931914/)

---


# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def count_max_or_subsets(nums)
    dp = Hash.new(0)
    dp[0] = 1
    nums.each do |nums|
      cl = dp.clone
      cl.each do |k, v|
        dp[k | nums] += v
      end
    end
    dp[dp.keys.max]
end
```