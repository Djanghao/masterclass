# Python 3 Simple and linear time.

**Author:** sethhritik
**Votes:** 35
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1240095/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1240095/)

---

Iterative over string and increase the counter if all characters of length 3 string are different.

```
 def countGoodSubstrings(self, s: str) -> int:
        ans=0
        for i in range(len(s)-2):
            if len(set(s[i:i+3]))==3:
                ans+=1
        return ans
```