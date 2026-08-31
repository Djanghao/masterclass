# My scala solution

**Author:** Anamorphism
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1198887/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1198887/)

---

```scala
object Solution {
    def maxBoxesInWarehouse(boxes: Array[Int], warehouse: Array[Int]): Int = {
        val sortedBoxes = boxes.sorted
        val sortedWarehouse = warehouse.tail.scanLeft(warehouse.head) {case (acc, x) => Math.min(acc, x)}
        
        @annotation.tailrec
        def helper(room: Int, box: Int, count: Int): Int = {
            if(room == -1 || box == boxes.length) {
                count
            } else {
                if(sortedBoxes(box) <= sortedWarehouse(room)) {
                    helper(room - 1, box + 1, count + 1)
                } else {
                    helper(room - 1, box, count)
                }
            }
        }
        
        helper(warehouse.length - 1, 0, 0)
    }
}
```