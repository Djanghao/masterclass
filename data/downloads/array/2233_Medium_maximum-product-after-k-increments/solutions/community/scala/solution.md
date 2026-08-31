# Compiles on 2.13; Clean Solution.

**Author:** gatear
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5185774/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5185774/)

---

# Intuition
Use a minheap to increment the smallest number.

When doing the product it's very important to
- maximize total product and apply mod on each step. 
If we do only 1 mod at the end we may get 0 as `(n * 10e9+7) % 10e9+7= 0`

- use `Long` multiplication with `(_ * _) % 10e9+7`. Result may overflow with `Int`. 

# Code
```
import scala.collection.mutable

object Solution {
  
  def maximumProduct(nums: Array[Int], k: Int): Int = {
    val min =
      mutable.PriorityQueue[Int]()(Ordering.Int.reverse) ++ nums

    for(_ <- 0 until k)
      min.enqueue(min.dequeue() + 1)
      
    min
      .foldLeft(1L) { case (ans, n) => (ans * n) % 1000000007 }
      .toInt
  }
}
```