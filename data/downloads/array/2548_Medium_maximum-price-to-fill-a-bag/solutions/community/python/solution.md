# Python | Greedy + Heap

**Author:** tonyluitonylui
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3108545/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3108545/)

---

```python
from dataclasses import dataclass, field
from heapq import heapify, heappop
from itertools import starmap


@dataclass(order=True)
class Item:
    _key: float = field(init=False)
    price: int
    weight: int
    ratio: float = field(init=False)

    def __post_init__(self):
        self.ratio = self.price / self.weight
        self._key = -self.ratio


class Solution:
    def maxPrice(self, items: list[list[int]], capacity: int) -> float:
        pq = [*starmap(Item, items)]
        heapify(pq)
        total_price = 0
        while pq:
            item = heappop(pq)
            weight_taken = min(capacity, item.weight)
            total_price += weight_taken * item.ratio
            capacity -= weight_taken
            if capacity == 0:
                return total_price
        return -1
```