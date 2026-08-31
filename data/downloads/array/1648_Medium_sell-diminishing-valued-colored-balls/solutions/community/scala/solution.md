# Scala AC math math math

**Author:** sparker123
**Votes:** 0
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1748192/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1748192/)

---

```
  // Time Complexity: O(nlogn)
  // Space complexity: O(1)
  def maxProfit(inventory: Array[Int], orders: Int): Int = {
    val kMod = (scala.math.pow(10, 9) + 7).toInt
    val n = inventory.size
    val sortedInventory = inventory.sorted.reverse
    var cur = sortedInventory(0)
    var ans: Long = 0
    var groupCount = 1
    var newOrders = orders
    // 10, 9, 6, 6, 4, 2
    while (newOrders != 0) {
      while (groupCount < n && sortedInventory(groupCount) == cur) groupCount += 1
      val nxt = if (groupCount == n) 0 else sortedInventory(groupCount)
      val count = newOrders.min(groupCount * (cur - nxt))
      val (times, r): (Long, Long) =
        if (newOrders >= groupCount * (cur - nxt)) {
          (cur - nxt, 0) // 10 - 9, 9 - 6
        } else {
          (newOrders / groupCount, newOrders % groupCount)
        }
      val next_point: Long = cur - times // 10 - 1, 9 - 3 = (6)

      // ((6 + 1) + 9) * 3 / 2 * 2 (idx: 0 and 1 )
      ans += ((next_point + 1) + cur) * times / 2 * groupCount + next_point * r
      newOrders -= count
      cur = nxt
    }
    (ans % kMod).toInt
  }
```