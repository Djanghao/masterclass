# Simple center-out approach

**Author:** WritInWater
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/5359817/](https://leetcode.com/problems/valid-palindrome-iv/solutions/5359817/)

---

A palindrome can always be made to remain a palindrome with either 1 or 2 operations. So we only need to consider words which are not currently palindromes

Start with two pointers in center and increment them at the same pace. If they do not match we need one operation. If needed operations exceeds 2 we return false.


# Code
```
# @param {String} s
# @return {Boolean}
def make_palindrome(s)
    return false if s.length == 0
    return true if s.length < 4

    s_a = s.split('')
    left = s_a.length / 2
    right = s_a.length / 2
    if(s_a.length % 2 == 0)
        left -= 1
    end

    ops = 0
    while(left >= 0 && right < s_a.length)
        if(s_a[left] != s_a[right])
            ops += 1
            return false if ops > 2
        end
        left -= 1
        right += 1
    end

    return true
end
```