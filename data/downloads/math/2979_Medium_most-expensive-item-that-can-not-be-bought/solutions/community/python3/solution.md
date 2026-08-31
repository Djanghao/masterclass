# Python 3   |||   Sylvester's Problem   ||

**Author:** Spaulding_
**Votes:** 5
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4472098/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4472098/)

---

This  problem is an exercise in mathematics, not necessarily incoding. 

In 1884, Sylvester proposed this problem in the British Journal *Educational Times* :

*A man possess a large quantity of stamps of only two denominations: 5-cent stamps and 17-cent stamps. What is the largest (finite) amount of cents which the man cannot make up with a combination of these stamps?*


Sylvester's derivation of the formula, *p1 x p2 - p1 - p2*, is not as trivial as the formula may suggest. This result is the *Frobenius Number of order two*, as there are two denominations of coins available. In 2017, a closed formula for the *Frobenius Number of order three* was determined. A general solution for *order n* has not been published. It is known the general result is no worse than polynomial.

Anyone want to bet there will be a *Most Expensive Item That Can Not Be Bought II* soon?

```
class Solution:
    def mostExpensiveItem(self, primeOne: int, primeTwo: int) -> int:
        return primeOne*primeTwo - primeOne - primeTwo
```