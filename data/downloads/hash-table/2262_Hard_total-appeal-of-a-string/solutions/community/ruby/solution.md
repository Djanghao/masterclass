# DP in Ruby

**Author:** Jared_S
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/4089121/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/4089121/)

---

# Approach
`prev` stores the last index of each character. This way, you know how far back in the string you've seen this character last.

`i - prev[ch]` tells you how many substrings **end** at the current character, `ch`.


# Code
```
def appeal_sum(s)
  tsum = cur = 0
  prev = Hash.new(-1)

  s.each_char.with_index do |ch, i|
    cur += i - prev[ch]
    prev[ch] = i
    tsum += cur
  end
  tsum
end

```

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$