# Python solution with explanation

**Author:** WhiteSeraph
**Votes:** 20
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/493713/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/493713/)

---

This is basically @fire4fly's solution but since there was no explanation I needed some time to figure out what exactly is being done and hopefully i'll help someone else with this post.

**Solution**

We are doing a one pass on the string. On each step we compare if our current and previous character are one after the other in the alphabet - with wrapping over for 'z' and 'a' (the % 26 helps with that).

The goal is to count for each character in `p` what's the longest matching substring before that character. We store the longest substring before the character in our dict `d`, and at the end return sum of all values in dict. Our dict[x] for letter `x` is actually storing the ammount of unique combinations we found that end with that letter `x`.

**Example**
If our string is `p = "abczbcde"`, our dict at the end will look something like this:
`'a': 1, 'b': 2, 'c': 3, 'z': 1, 'd': 3, 'e': 4}`
This means our final result is 14 unique strings.
When we iterate through the first 4 characters(`abcz`) we will find 7 unique combinations:
`a, b, ab, c, bc, abc, z` 
and our dict will look like:
`'a': 1, 'b': 2, 'c': 3, 'z': 1`
Once we get to the `bcde` part of the string, when we evaluate the `b` and `c`, they will have shorter streaks of matching characters before them, so we won't overwrite the values in our dict for those characters - because basically we already found the combinations `b, c, bc` before that, and the only remaining unique combinations are:
`d, bcd, cd, e, de, bcde, cde`

**Code**
```class Solution:
    def findSubstringInWraproundString(self, p: str) -> int:
        from collections import defaultdict
        d = defaultdict(int)
        streak = 0 
        for i in range(len(p)):
            streak = streak + 1 if (ord(p[i - 1]) - 96) % 26 == (ord(p[i]) - 97) else 1
            d[p[i]] = max(d[p[i]], streak)
        return sum(d.values())```