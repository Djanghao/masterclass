# Ruby solution

**Author:** ozovalihasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3072021/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3072021/)

---

Thank [namasteDuniya](https://leetcode.com/namasteDuniya/) for [the clear explanation](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/217979/pictured-explanation-python-o-n-clean-solution-8-lines/?orderBy=most_votes).

# Code
```ruby []
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def subarrays_div_by_k(nums, k)
  result = 0
  sum = 0
  hash = Hash.new(0)
  hash[0] = 1

  nums.each do |num|
    sum += num
    result += hash[sum % k]
    hash[sum % k] += 1
  end

  result
end

```