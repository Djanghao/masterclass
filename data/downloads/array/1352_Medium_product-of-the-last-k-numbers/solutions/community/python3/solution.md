# Python3 97% solution

**Author:** tjucoder
**Votes:** 32
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/514694/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/514694/)

---

```python
class ProductOfNumbers:
    def __init__(self):
        self.data = []
        self.product = 1

    def add(self, num: int) -> None:
        if num != 0:
            self.product *= num
            self.data.append(self.product)
        else:
            self.data = []
            self.product = 1

    def getProduct(self, k: int) -> int:
        if len(self.data) < k:
            return 0
        if len(self.data) == k:
            return self.data[-1]
        else:
            return int(self.data[-1] / self.data[-1-k])
```