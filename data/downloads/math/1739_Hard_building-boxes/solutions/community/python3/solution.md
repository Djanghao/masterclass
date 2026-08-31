# [Python3] math

**Author:** ye15
**Votes:** 12
**Link:** [https://leetcode.com/problems/building-boxes/solutions/1032104/](https://leetcode.com/problems/building-boxes/solutions/1032104/)

---

**Algo**
The **1st observation** is that the base increases as 1, 1+2, 1+2+3, 1+2+3+4, ... When the bases is of the form 1+2+3+...+x, there can be at most `1*x + 2*(x-1) + 3*(x-2) + ... + x*1 = x*(x+1)*(x+2)//6` blocks. So we find the the largest `x` such that `x*(x+1)*(x+2)//6 <= n` as the starting point for which there will be `x*(x+1)//2` blocks at the bottom. 

The **2nd observation** is that once we add blocks to a well-developed piramid 
next block add 1 bottom block
next 2 blocks add 1 bottom block
next 3 blocks add 1 bottom block
Then we can just count how many bottom blocks to add to obsorb all `n` blocks. 

**Implementation**
```
class Solution:
    def minimumBoxes(self, n: int) -> int:
        x = int((6*n)**(1/3))
        if x*(x+1)*(x+2) > 6*n: x -= 1
        
        ans = x*(x+1)//2
        n -= x*(x+1)*(x+2)//6
        k = 1
        while n > 0: 
            ans += 1
            n -= k
            k += 1
        return ans 
```

**Analysis**
Time complexity `O(sqrt(N))`
Space complexity `O(1)`

**Edited on 1/24/2021**
Adding a `O(1)` solution
This implementation is to elaborate on the aforementioned algo. Here, we solve two equations. First, we find largest integer `x` such that `x*(x+1)*(x+2) <= 6*n`. This represents a fully-developed piramid with `x*(x+1)*(x+2)//6` blocks and `x*(x+1)//2` bottom blocks. 
Then, we remove `x*(x+1)*(x+2)//6` from `n`. For the remaining blocks (`rem = n - x*(x+1)*(x+2)//6`), suppose we need another `y` bottom blocks. Then, `1 + 2 + ... + y = y*(y+1) >= rem`, where `y` can be calculated by solving the quadratic equation. 

```
class Solution:
    def minimumBoxes(self, n: int) -> int:
        x = int((6*n)**(1/3))
        if x*(x+1)*(x+2) > 6*n: x -= 1
        n -= x*(x+1)*(x+2)//6
        return x*(x+1)//2 + ceil((sqrt(1+8*n)-1)/2)
```