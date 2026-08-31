# Scala bitwise with groupBy, foldLeft

**Author:** Sunayna-Ray
**Votes:** 1
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/2263250/](https://leetcode.com/problems/cinema-seat-allocation/solutions/2263250/)

---

For detailed explanation, see my similar Java solution [here](https://leetcode.com/problems/cinema-seat-allocation/discuss/2263131/Java-Explained-with-Comments%3A-Bit-manipulation-HashMap-Greedy)

```
object Solution {
    def maxNumberOfFamilies(n: Int, reservedSeats: Array[Array[Int]]): Int = {
        
		//convert occupied column to impact on seating availability represented by bits
        val convertColToBitMap:Map[Int, Int] = Map(1->0, 10->0, 2->4, 3->4, 4->6, 5->6, 6->3, 7->3, 8->1, 9->1)
		
		//converted seating availability represented by bits to count of seating choices reduced
        val convertBitToSeatSubtract:Map[Int, Int] =  Map(0->0, 1->1, 2->0, 3->1, 4->1, 5->1, 6->1, 7->2)
        
        val seatUnavailableCount=reservedSeats.groupBy(_(0)).
            map{case (k, v) => 
                val seatBitRepresentation = v.map(arr=>convertColToBitMap(arr(1))).foldLeft(0)(_ | _)
                convertBitToSeatSubtract(seatBitRepresentation)}.
            sum
        
        2*n - seatUnavailableCount
    }
}
```