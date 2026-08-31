# ✅ Ruby || 100% fastest one-liner

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/2788338/](https://leetcode.com/problems/maximum-69-number/solutions/2788338/)

---

# Intuition
Convert to string, substitute first 6 with 9, convert to integer

# Approach
the same

# Complexity
- Time complexity:
O(n.to_s.size)

- Space complexity:
O(n.to_s.size)

# Code
```ruby
# @param {Integer} num
# @return {Integer}

def maximum69_number (num)
    num.to_s.sub('6', '9').to_i
end
```