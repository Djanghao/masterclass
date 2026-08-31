# Python3 || SortedLists  || T/S: 95% / 92%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/5752851/](https://leetcode.com/problems/design-movie-rental-system/solutions/5752851/)

---


```python3 []
from sortedcontainers import SortedList

class MovieRentingSystem:

    def __init__(self, n: int, entries: List[List[int]]):
        
        self.store = defaultdict(int)
        self.films = defaultdict(SortedList)
        self.rental = set()

        for shop, movie, price in entries:
            self.store[(shop, movie)] = price
            self.films[movie].add((price, shop))
            

    def search(self, movie: int) -> List[int]:
        return map(lambda x: x[1], self.films[movie][:5])


    def rent(self, shop: int, movie: int) -> None:

        price = self.store[(shop, movie)]
        self.films[movie].discard((price, shop))
        self.rental.add((price, shop, movie))
        return 
        

    def drop(self, shop: int, movie: int) -> None:
 
        price = self.store[(shop, movie)]
        self.films[movie].add((price, shop))
        self.rental.discard((price, shop, movie))
        
        return     


    def report(self) -> List[List[int]]:

        report_stores = sorted(self.rental)[:5]
        return map(lambda x: (x[1], x[2]), report_stores)
```

[https://leetcode.com/problems/design-movie-rental-system/submissions/1382583437/](https://leetcode.com/problems/design-movie-rental-system/submissions/1382583437/)