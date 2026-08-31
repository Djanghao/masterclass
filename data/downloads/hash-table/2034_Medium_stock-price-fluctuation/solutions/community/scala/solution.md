# Scala solution - HashMap & Heaps (Beats 100%)

**Author:** swathi146
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/4949088/](https://leetcode.com/problems/stock-price-fluctuation/solutions/4949088/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable._
import scala.math._

class StockPrice() {

    val store = new HashMap[Int, Int]()
    var latestTimestamp = 0

    val maxHeap = new PriorityQueue[(Int, Int)]()(Ordering.by((_:Int, _:Int)._2))
    val minHeap = new PriorityQueue[(Int, Int)]()(Ordering.by((_:Int, _:Int)._2)).reverse

    def update(timestamp: Int, price: Int): Unit = {
        if(!store.contains(timestamp)){
            store.put(timestamp, price)
        }
        store(timestamp) = price

        latestTimestamp = max(latestTimestamp, timestamp)
        maxHeap.enqueue((timestamp, price))
        minHeap.enqueue((timestamp, price))
    }

    def current(): Int = {
        store(latestTimestamp)
    }

    def maximum(): Int = {
        var temp = maxHeap.head
        while(maxHeap.nonEmpty && store(temp._1) != temp._2){
            maxHeap.dequeue()
            temp = maxHeap.head
        }
        temp._2
    }

    def minimum(): Int = {
        var temp = minHeap.head
        while(minHeap.nonEmpty && store(temp._1) != temp._2){
            minHeap.dequeue()
            temp = minHeap.head
        }
        temp._2
    }

}

/**
 * Your StockPrice object will be instantiated and called as such:
 * val obj = new StockPrice()
 * obj.update(timestamp,price)
 * val param_2 = obj.current()
 * val param_3 = obj.maximum()
 * val param_4 = obj.minimum()
 */
```