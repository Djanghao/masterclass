# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5218372/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5218372/)

---


# Code
```
# @param {String} s
# @return {String}
def make_smallest_palindrome(s)
    chars = s.chars
    l = 0
    r = chars.size - 1
    while l < r
        if chars[l] != chars[r]
            if chars[l] < chars[r]
                chars[r] = chars[l]
            else
                chars[l] = chars[r]
            end
        end
        l += 1
        r -= 1 
    end
    
    chars.join
end
```