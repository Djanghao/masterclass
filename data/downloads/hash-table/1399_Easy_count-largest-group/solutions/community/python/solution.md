# Python easy to understand

**Author:** goodfine1210
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/611971/](https://leetcode.com/problems/count-largest-group/solutions/611971/)

---

```
class Solution(object):
    def countLargestGroup(self, n):
        """
        :type n: int
        :rtype: int
        """
        res = []
        for i in range(1, n+1):
            res.append(sum(int(x) for x in str(i)))
                   
        c = collections.Counter(res)
        x = [i for i in c.values() if i == max(c.values())]
        return len(x)
    
    
```