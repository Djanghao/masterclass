# 4 Lines of Code --->Binary Search and Normal For Loop Approach

**Author:** GANJINAVEEN
**Votes:** 45
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/3309179/](https://leetcode.com/problems/arranging-coins/solutions/3309179/)

---

# 1. Using while Loop 
```
class Solution:
    def arrangeCoins(self, n: int) -> int:        
        i=0
        while n>=0:
            i+=1
            n=n-i
        return i-1

  #please upvote me it would encourage me alot

```
# 2. using For Loop
```
class Solution:
    def arrangeCoins(self, n: int) -> int:
        if n==1:return n
        for i in range(1,n+1):
            n=n-i
            if n<0: return i-1

    //please upvote me it would encourage me alot


```
# 3. Binary Search Approach
```

class Solution:
    def arrangeCoins(self, n: int) -> int:
        left,right=1,n
        while left<=right:
            mid=(right+left)//2
            num=(mid/2)*(mid+1)
            if num<=n:
                left=mid+1
            else:
                right=mid-1
        return right

    //please upvote me it would encourage me alot


```
# please upvote me it would encourage me alot

