# Ruby Solution

**Author:** rwash
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number/solutions/4254020/](https://leetcode.com/problems/confusing-number/solutions/4254020/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @return {Boolean}
def confusing_number(n)
  invert_hash = { '0' => '0', '1' => '1', '6' => '9', '8' => '8', '9' => '6' }
  res = ''

  n.to_s.each_char do |digit|
    return false unless invert_hash.key?(digit)

    res += invert_hash[digit]
  end

  res.reverse != n.to_s
end
```