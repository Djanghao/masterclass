# Python O(N) DP Solution

**Author:** dabdabdab
**Votes:** 2
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/2706258/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/2706258/)

---

```
class Solution:
    def distinctSubseqII(self, s: str) -> int:
        count = 1
        count_dict = {}        
        for c in s:
            if c in count_dict:
                new_add = count - count_dict[c]
            else:
                new_add = count
            if c in count_dict:
                count_dict[c] += new_add
            else:
                count_dict[c] = new_add
            count += new_add 
        return (count-1) % (10**9 + 7)
```