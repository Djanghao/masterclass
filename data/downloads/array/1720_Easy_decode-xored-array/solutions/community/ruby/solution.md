# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/6050878/](https://leetcode.com/problems/decode-xored-array/solutions/6050878/)

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
# @param {Integer[]} encoded
# @param {Integer} first
# @return {Integer[]}
def decode(encoded, first)
  arr = []

  arr[0] = first
  (0..encoded.size - 1).each { |i|  arr << (encoded[i] ^ arr[i]) }

  arr
end
```