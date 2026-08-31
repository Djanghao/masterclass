# Python Two Liner Beats ~95%

**Author:** constantine786
**Votes:** 18
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2085849/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2085849/)

---

```
class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        counter_s = Counter(s)        
        return min(counter_s[c] // count for c,count in Counter(target).items())
```

**Time - O(n)
Space - O(n)**

--- 
***Please upvote if you find it useful***