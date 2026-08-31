# Simple

**Author:** shivam_mahaajan03
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/4609357/](https://leetcode.com/problems/di-string-match/solutions/4609357/)

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
```
# @param {String} s
# @return {Integer[]}
def di_string_match(s)
    n = s.length
    result = []
    low, high = 0, n

    s.each_char do |char|
        if char == 'I'
            result << low
            low += 1
        else
            result << high
            high -= 1
        end
    end
    result << low
    result
end
```