# Python solution using dicts

**Author:** h0td0g123
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/1602761/](https://leetcode.com/problems/design-movie-rental-system/solutions/1602761/)

---

I'm coming from a Ruby background so am not too familiar with Python's more robust data structure offerings. I attempted this solution in Ruby but trying to sort the `@rented` array of arrays resulted in an error in Leetcode even though it worked locally (the age old predicament). I took the same approach into Python and this is what I ended up with. 

The crux of this problem for me was finding out a way to query for the 5 cheapest rented movies in `report`. I originally had everything stored in dicts but that resulted in TLE when it came to sorting. My approach for this was to store rented movie data as a list of lists for faster sorting.

Happy for feedback.

```
class MovieRentingSystem(object):

    def __init__(self, n, entries):
        """
        :type n: int
        :type entries: List[List[int]]
        """
        self.avail = defaultdict(dict)
        self.prices = defaultdict(dict)
        self.rented = []
        
        for s, m, p in entries:
            self.avail[m][s] = p
            self.prices[m][s] = p


    def search(self, movie):
        shop_inventory = self.avail[movie]
        if len(shop_inventory) == 0:
            return [] 
    
        return [m[0] for m in sorted(shop_inventory.items(), key=lambda(k,v): (v,k))][:5]
        

    def rent(self, shop, movie):
        price = self.avail[movie][shop]
        self.avail[movie].pop(shop)
        
        self.rented.append([price, shop, movie])
        

    def drop(self, shop, movie):
        price = self.prices[movie][shop]
        
        self.rented.remove([price, shop, movie])
        self.avail[movie][shop] = price
        

    def report(self):
        sorted_output = sorted(self.rented)[:5]
        return map(lambda x: x[-2:], sorted_output)
```

`__init__`: O(n)
`search`: O(nlogn) because of the sorting
`rent`: O(1)
`drop`: O(n) because of `.remove`
`map`: O(n) as sorted is O(nlogn) and map is O(n)
