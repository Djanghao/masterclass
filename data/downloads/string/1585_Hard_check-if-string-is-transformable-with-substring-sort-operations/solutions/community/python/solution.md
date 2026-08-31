# Python 3 || Two-pointer, O(n) / O(1), 95% / 100%

**Author:** zsq007
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/4667146/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/4667146/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check if there is enough amount of valid digits to allow the swap of the current digit.

# Approach
<!-- Describe your approach to solving the problem. -->
Take `s = "14532", t = "12345"` as an exmaple.

For `sptr = 4, tptr = 1, s[sptr] == t[tptr] == '2'`, if we want to move '2' from position 4 to position 1, we need to make sure that there are at least `4-1 == 3` digits in `s[:sptr]` that are larger than '2', so that '2' can reach position 1 by swapping with these digits afterward. 

This is checked by `sum(counter[d:]) >= sptr-tptr` in the code.

Similarly, when `sptr < tptr`, we check it reversely in the second pass. For `sptr = 1, tptr = 3, s[sptr] == t[tptr] == '4'`, there should be at least `3-1 == 2` digits in `s[sptr+1:]` that are smaller than '4', which is `sum(counter[:d]) >= tptr-sptr`. 


# Complexity
- Time complexity: $$O(dn)$$, $$d = 10$$ is the number of characters.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(d)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def isTransformable(self, s: str, t: str) -> bool:
        counter, n, sptr = [0]*10, len(s), 0
        for tptr in range(n):
            d = ord(t[tptr])-48
            if counter[d]:
                counter[d] -= 1
            else:
                while sptr < n and s[sptr] != t[tptr]:
                    counter[ord(s[sptr])-48] += 1
                    sptr += 1
                if sptr == n or sum(counter[d:]) < sptr-tptr:
                    return False
                sptr += 1
  
        sptr -= 1
        for tptr in range(n-1, -1, -1):
            d = ord(t[tptr])-48
            if counter[d]:
                counter[d] -= 1
            else:
                while sptr >= 0 and s[sptr] != t[tptr]:
                    counter[ord(s[sptr])-48] += 1
                    sptr -= 1
                if sptr == -1 or sum(counter[:d]) < tptr-sptr:
                    return False
                sptr -= 1
                
        return True
```