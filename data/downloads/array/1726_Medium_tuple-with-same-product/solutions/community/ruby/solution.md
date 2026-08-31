# Tuple with Same Product

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/6121730/](https://leetcode.com/problems/tuple-with-same-product/solutions/6121730/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def tuple_same_product(nums)
  products_map = {}

  n = nums.size

  1.upto(n - 1) do |i|
    num1 = nums[i]

    0.upto(i - 1) do |j|
      num2 = nums[j]
      key = num1 * num2
      products_map[key] = products_map[key].to_i + 1
    end
  end

  result = 0
  products_map.each do |_k, val|
    next if val == 1
    result += combination(val)
  end 

  result * 8
end

def combination(n)
  product = 1

  3.upto(n) do |i|
    product *= i
  end

  2.upto(n - 2) do |i|
    product /= i
  end

  product
end
```