# 100%

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/5255974/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/5255974/)

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
# @return {Boolean}
def check_string(s)
    b_found = false
    s.each_char do |el|
        if el == 'a' && b_found == true
            return false
        elsif el == 'b'
            b_found = true
        end
    end
    return true
    
end
```