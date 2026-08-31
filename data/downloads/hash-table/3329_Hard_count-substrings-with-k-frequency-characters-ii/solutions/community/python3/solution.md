# Easy two pointers

**Author:** cjcoax
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5954669/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5954669/)

---

Not a hard problem at all!

# Intuition
Two pointers.
* Keep $$l$$ and $$r$$ pointers.
* Keep moving $$r$$ towards the end.
* Once frequency of character at $$r$$ $$\\ge k$$, add $$n-r$$ to the result. (from r to the end of the string).
* Keep moving $$l$$ towards $$r$$ until the frequency of character at the left (or basically the only character with the requency $$\\ge k$$) goes below $$k$$.
* As moving $$l$$ towards end, add $$n-r$$ to the result


# Complexity
- Time complexity:
- $$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```python3 []
class Solution:
    def numberOfSubstrings(self, s: str, k: int) -> int:
        cnt = [0 for _ in range(256)]
        l,r,n,res = 0,0,len(s),0
        while r < n:
            cur = ord(s[r])
            cnt[cur] += 1
            while l <= r and cnt[cur] >= k:
                res += n-r
                cnt[ord(s[l])] -= 1
                l += 1
            r += 1
        return res
```