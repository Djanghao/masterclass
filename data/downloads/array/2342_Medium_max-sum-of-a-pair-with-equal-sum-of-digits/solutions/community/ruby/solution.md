# [Ruby] Simple solution

**Author:** user0350bU
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/3198900/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/3198900/)

---

# Approach
Build a hash with key of digit sum and value of max value.
If the max value for each key is greater than the ans, update the ans.
Return the ans.

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

# Code
```
def maximum_sum(nums)
  sums = {}
  ans = -1

  for num in nums do 
    digit_sum = num.to_s.chars.map { |c| c.to_i }.sum
    ans = [ans, num + sums[digit_sum]].max if sums[digit_sum]
    sums[digit_sum] = [num, sums[digit_sum].to_i].max
  end

  ans
end
```