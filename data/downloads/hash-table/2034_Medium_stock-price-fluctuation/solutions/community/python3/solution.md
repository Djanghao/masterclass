# [Python3] hash map & 2 heaps

**Author:** ye15
**Votes:** 44
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/1513324/](https://leetcode.com/problems/stock-price-fluctuation/solutions/1513324/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/933e9b50b2532374ab8252f431da84b6675663a8) for solutions of weekly 262.
```
class StockPrice:

    def __init__(self):
        self.mp = {}
        self.maxp = [] # max-heap 
        self.minp = [] # min-heap 
        self.latest = 0 # latest timestamp

    def update(self, timestamp: int, price: int) -> None:
        self.mp[timestamp] = price 
        if self.latest <= timestamp: self.latest = timestamp
        heappush(self.maxp, (-price, timestamp))
        heappush(self.minp, (price, timestamp))

    def current(self) -> int:
        return self.mp[self.latest]

    def maximum(self) -> int:
        while self.mp[self.maxp[0][1]] != -self.maxp[0][0]: heappop(self.maxp)
        return -self.maxp[0][0]

    def minimum(self) -> int:
        while self.mp[self.minp[0][1]] != self.minp[0][0]: heappop(self.minp)
        return self.minp[0][0]
```