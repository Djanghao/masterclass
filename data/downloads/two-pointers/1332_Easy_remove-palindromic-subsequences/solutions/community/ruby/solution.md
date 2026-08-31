# Beats 100.00% of users with Ruby

**Author:** shivam_mahaajan03
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4592551/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4592551/)

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
# @return {Integer}
def remove_palindrome_sub(s)
    if s.empty?
        return 0
    elsif s == s.reverse
        return 1
    else
        return 2
    end
end
```