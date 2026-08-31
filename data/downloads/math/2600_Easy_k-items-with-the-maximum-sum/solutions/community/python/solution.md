# One-Liner

**Author:** votrubac
**Votes:** 42
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3342004/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3342004/)

---

We do not even need to use `numNegOnes`.

If `numOnes + numZeros` is not enough, we will have to pick `k - numZeros - numOnes` negatives.

**Python 3**
```python
class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int, numNegOnes: int, k: int) -> int:
        return min(k, numOnes) - max(0, k - numZeros - numOnes)
```
**C++**
```cpp
int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
    return min(k, numOnes) - max(0, k - numOnes - numZeros);
}
```