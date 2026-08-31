# O(1) Beats 98% Python

**Author:** spshardulprabhu2
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3412270/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3412270/)

---

# Python 
```
class Solution:
    def distMoney(self, money: int, children: int) -> int:
        if children>money:
            return -1
        if money>8*children:
            return children-1
        money-=children
        if children-money//7==1 and money%7==3:
            return money//7-1
        return money//7
```