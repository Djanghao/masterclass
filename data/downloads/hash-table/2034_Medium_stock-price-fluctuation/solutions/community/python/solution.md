# Python - Clean 2 Heaps -  Commented Code

**Author:** AlexSzeto
**Votes:** 227
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/1513293/](https://leetcode.com/problems/stock-price-fluctuation/solutions/1513293/)

---

Keep a hashmap of timestamp to prices. When updating a timestamp, push it in a heap along with it's timestamp. 

When maximum or minimum is called, if the timestamp doesn't match it's current price, this indiciates it's value has been updated in the meantime. Keeping popping elements off the heap until an element matches it's current price


```
class StockPrice:

    def __init__(self):
        self.timestamps = {}
        self.highestTimestamp = 0
        self.minHeap = []
        self.maxHeap = []

    def update(self, timestamp: int, price: int) -> None:
	    #Keep track of current prices
        self.timestamps[timestamp] = price
        self.highestTimestamp = max(self.highestTimestamp, timestamp)
        
		#For maximum/minimum
        heappush(self.minHeap, (price, timestamp))
        heappush(self.maxHeap, (-price, timestamp))

    def current(self) -> int:
	    #Just return the highest timestamp in O(1)
        return self.timestamps[self.highestTimestamp]

    def maximum(self) -> int:
        currPrice, timestamp = heappop(self.maxHeap)
		
		#If the price from the heap doesn't match the price the timestamp indicates, keep popping from the heap
        while -currPrice != self.timestamps[timestamp]:
            currPrice, timestamp = heappop(self.maxHeap)
            
        heappush(self.maxHeap, (currPrice, timestamp))
        return -currPrice

    def minimum(self) -> int:
        currPrice, timestamp = heappop(self.minHeap)
		
		#If the price from the heap doesn't match the price the timestamp indicates, keep popping from the heap
        while currPrice != self.timestamps[timestamp]:
            currPrice, timestamp = heappop(self.minHeap)
            
        heappush(self.minHeap, (currPrice, timestamp))
        return currPrice
```