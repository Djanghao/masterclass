# 100% Faster || Ruby

**Author:** yashwardhan24_sharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4891384/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4891384/)

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
def is_substring_present(s)
    temp = s.reverse
    i = 1
    while(i<s.length)
        j = 1
        while(j<temp.size)
            ts = temp[j]+temp[j-1]
            if(ts==(s[i]+s[i-1]))
                return true
            end
            j+=1
        end
        i+=1
    end
    return false
end
```