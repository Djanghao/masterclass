# Simple. O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/4952634/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/4952634/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {String} s
# @param {String[]} words
# @return {Boolean}
def is_prefix_string(s, words)
    i = 0
    j = 0
    k = 0
    while i < s.size
        if words[k] == nil || words[k][j] == nil || s[i] != words[k][j]
            return false
        end

        i += 1

        if words[k][j+1] == nil
            k += 1
            j = 0
        else
            j += 1
        end
    end
    
    if k > 0 and j == 0
        return true
    else
        return false
    end
end
```