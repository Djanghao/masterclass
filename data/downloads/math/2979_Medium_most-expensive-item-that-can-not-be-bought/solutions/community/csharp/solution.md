# Single line solution that beats everybody

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4915026/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4915026/)

---

# Code
```
public class Solution 
{
    public int MostExpensiveItem(int primeOne, int primeTwo) => primeOne * primeTwo - primeOne - primeTwo;
}
```