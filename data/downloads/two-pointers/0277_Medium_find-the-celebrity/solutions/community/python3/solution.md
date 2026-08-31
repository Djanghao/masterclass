# [Py/Py3] Simple solution w/ comments and explanation

**Author:** ssshukla26
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/1581666/](https://leetcode.com/problems/find-the-celebrity/solutions/1581666/)

---

```
class Solution:
    def findCelebrity(self, n: int) -> int:
        
        # Find a possible celebrity candidate,
        # if a candidate know any other member
        # he/she can't be a celebrity, but
        # the member they know can be then
        # considered as celebrity candidate
        candidate = 0
        for member in range(n):
            if knows(candidate, member):
                candidate = member
        
        # Check if candidate select doesn't know any other member
        # and the member must know the canidate, else return -1
        for member in range(n):
            # Check: member is not itself the candidate
            # Check: if candidate knows the member or if member doesn't know the candidate
            if member != candidate and (knows(candidate, member) or not knows(member, candidate)):
                return -1
        
        return candidate
```