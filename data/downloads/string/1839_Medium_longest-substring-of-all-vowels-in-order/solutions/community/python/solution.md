# [Python3] Simple single pass

**Author:** danwuSBU
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1342506/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1342506/)

---

**Explanation:**
`g` holds the unique vowels seen so far, in order.
`count` holds the size of the current substring.
`m` holds the max size, and is what we return at the end.

We do one pass through `word`, and if we encounter a vowel, we do one of two things:
1. If `g` isn't empty and `g[-1]` is greater than the new vowel, then we do a reset - we set `count` back to 0 and empty out `g`.
2. If `g` is blank or `g[-1]` is smaller than the new vowel, then we simply append the new vowel to `g`.

We do this every iteration, as well:
1. `count += 1` obviously.
2. We check if `g == 'aeiou'`. If this is true, then we have a valid substring of size `count`. We compare it with `m`, naturally.

At the end, we spit out `m`, which is our correct answer.

**Code:**
```
class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        g = ''
        count = m = 0
        for x in word:
            if g and x < g[-1]:
                count = 0
                g = ''
            if not g or x > g[-1]:
                g += x
            count += 1
            if g == 'aeiou':
                m = max(m, count)
        return m
```