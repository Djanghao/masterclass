# Python 3 || 2 lines, w/ explanation || T/S: 97% / 99%

**Author:** Spaulding_
**Votes:** 45
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3015443/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3015443/)

---

Here's the plan: 
- We use this bit map for assigning a string:
```
Bulky    Heavy    idx         bits    string
\u2013\u2013\u2013\u2013\u2013    \u2013\u2013\u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013\u2013\u2013\u2013     \u2013\u2013\u2013\u2013    \u2013\u2013\u2013\u2013\u2013\u2013\u2013
False    False    0+0 = 0     00      Neither
True     False    1+0 = 1     01      Bulky
False    True     0+2 = 2     10      Heavy
True     True     1+2 = 3     11      Both
```
- We use`idx` to address the correct string in a tuple of the possible strings `("Neither", "Bulky", "Heavy", "Both")`.
```
class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:

        idx = int(length >= 10000 or width >= 10000 or height >= 10000 or 
               length * width * height >= 10**9) + 2*(mass >= 100)
        
        return ("Neither", "Bulky", "Heavy", "Both")[idx]
```
[https://leetcode.com/problems/categorize-box-according-to-criteria/submissions/874510700/](https://leetcode.com/problems/categorize-box-according-to-criteria/submissions/874510700/)

I could be wrong, but I think that time complexity is O(1) and space complexity is O(1).