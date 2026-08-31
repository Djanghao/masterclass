# Simple Ruby Backtracking

**Author:** Pout1ne
**Votes:** 0
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/5672440/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/5672440/)

---

# Complexity
- Time complexity: $$O(2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {String} s
# @return {Boolean}
def split_string(s)
  backtrack(s, 0, '')
end

def backtrack(s, idx, prev)
  (idx...s.length).each do |i|
    current = s[idx..i].to_i

    if (prev.empty? || prev.to_i - 1 == current)
      if (i == s.length - 1 && idx != 0)
        return true
      else
        return true if backtrack(s, i + 1, s[idx..i])
      end
    end

    break if (!prev.empty? && current > prev.to_i - 1)
  end

  return false
end
```