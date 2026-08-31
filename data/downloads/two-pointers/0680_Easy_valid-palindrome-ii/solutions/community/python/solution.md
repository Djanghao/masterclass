# Python 3 || Two Pointer Approach || Self-Understandable

**Author:** bug_buster
**Votes:** 140
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/1409641/](https://leetcode.com/problems/valid-palindrome-ii/solutions/1409641/)

---

```
class Solution:
    def validPalindrome(self, s: str) -> bool:
            p1=0
            p2=len(s)-1
            while p1<=p2:
                if s[p1]!=s[p2]:
                    string1=s[:p1]+s[p1+1:]
                    string2=s[:p2]+s[p2+1:]
                    return string1==string1[::-1] or string2==string2[::-1]
                p1+=1
                p2-=1
            return True
```

***Do Upvote If you found my solution helpful :)***