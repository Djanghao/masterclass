# One Line of code Python-->Two Approaches

**Author:** GANJINAVEEN
**Votes:** 47
**Link:** [https://leetcode.com/problems/perfect-number/solutions/3326058/](https://leetcode.com/problems/perfect-number/solutions/3326058/)

---



# 1. Only 5 perfect Number exist until 10^8
```
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        return num in [6,28,496,8128,33550336]
//please upvote me it would encourage me alot

```
# 2. Rooting Approach [Accepted]
```
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num==1:
            return False
        count=1
        for i in range(2,int(num**0.5)+1):
            if num%i==0:
                count+=i+num//i
        return num==count

//please upvote me it would encourage me alot


```
# please upvote me it would encourage me alot
