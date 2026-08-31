# Python 99% One-line solution, (its math)

**Author:** berelt
**Votes:** 90
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/383285/](https://leetcode.com/problems/bulb-switcher/solutions/383285/)

---

```
def bulbSwitch(self, n: int) -> int:
        return int(n**(1/2))
```

There is a pattern for it
for 1th bulb : 1
2nd : 1 0
3rd : 1 0 0
4th : 1 0 0 1
5th : 1 0 0 1 0
6th : 1 0 0 1 0 0
7th : 1 0 0 1 0 0 0
8th : 1 0 0 1 0 0 0 0
9th : 1 0 0 1 0 0 0 0 1

Meaning the **I-th bulb that is on** only on when its on **I\\*\\*2 turn**, for example if you want 2 bulb on then you will have to go to 4th round, 3 bulb on -> 9th round. 
so for (n-th round) you can get at most floor(square_root(n)) bulb.

Please star it if you like my solution and explanation :), any advice or correction would be appreciated.

Thanks !