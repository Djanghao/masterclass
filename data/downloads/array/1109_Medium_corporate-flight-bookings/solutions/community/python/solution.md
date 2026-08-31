# Python O(n) solution | Top 98% Speed | 9 Lines of Code

**Author:** Aragorn_
**Votes:** 8
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/731022/](https://leetcode.com/problems/corporate-flight-bookings/solutions/731022/)

---

**Python O(n) solution | Top 98% Speed | 9 Lines of Code**

"Cummulative Sum" Algorithm Optmized for Maximum speed.

```
class Solution:
    def corpFlightBookings(self, bookings, n: int):
        ans = [0]*(n+1)
        for i,j,k in bookings:
            ans[i-1] += k
            ans[j]   -= k
        ans.pop()
        prev = ans[0]
        for i in range(1,n):
            prev = ans[i] = prev + ans[i]
        return ans
```

**PS.** This standard variation seems to be 8% slower:
```
class Solution:
    def corpFlightBookings(self, bookings, n: int):
        ans = [0]*(n+1)
        for i,j,k in bookings:
            ans[i-1] += k
            ans[j]   -= k
        ans.pop()
        for i in range(1,n):
            ans[i] += ans[i-1]
        return ans
```

**Benchmarking Methods**
```
from time import time
from random import randint
def genAn():
    lenA = int(2e6)
    n    = int(2e6)
    kmax = int(2e6)
    A = []
    for x in range(lenA):
        i = randint(1,n)
        j = randint(i,n)
        k = randint(1,kmax)
        A.append([i,j,k])
    return A,n
A,n = genAn()
def benchmark(f):
    t1 = time()
    f(A,n)
    return time() - t1
#
print('A: ',benchmark(solutionA))
print('B: ',benchmark(solutionB))
```