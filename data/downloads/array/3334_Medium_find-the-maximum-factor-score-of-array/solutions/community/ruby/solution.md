# Short Ruby solution. No libraries.

**Author:** OneUnknownUser
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/6003481/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/6003481/)

---

# Intuition
Straight forward

# Approach
Brute-force

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def max_score(nums)
  n = nums.size    
  return 0 if n == 0
  return nums[0] * nums[0] if n == 1
  
  max = reducer(:lcm, nums, 1) * reducer(:gcd, nums, 1)

  nums.each_with_index do |v, idx|
    (nums[0], nums[idx]) = [nums[idx], nums[0]] # swap a head
    max = [reducer(:lcm, nums) * reducer(:gcd, nums), max].max
  end

  max
end

def gcd(a, b)
  b == 0 ? a : gcd(b, a % b)
end

def lcm(a, b)
  a == 0 || b == 0 ? a : a * b / gcd(a, b)
end

def reducer(mtd, arr, shift = 0)
  arr[(2 - shift)..].reduce(arr[1 - shift]) { |el, res| res = method(mtd).call(res, el) }
end
```