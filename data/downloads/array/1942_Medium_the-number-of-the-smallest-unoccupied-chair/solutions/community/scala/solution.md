# FP (but mutable PriorityQueue)

**Author:** admiral_bulba
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899929/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899929/)

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
```scala []
import scala.collection.mutable
import scala.collection.immutable.Queue
object Solution {
    def smallestChair(times: Array[Array[Int]], targetFriend: Int): Int = {
        val indexedTimes: List[((Int, Int), Int)] = times.zipWithIndex.toList.map { case (time, index) => ((time(0), time(1)), index) }.sortBy(_._1._1)

        val usedChairs = mutable.PriorityQueue.empty[(Int, Int)](Ordering.by(-_._1))
        val availableChairs = mutable.PriorityQueue.empty[Int](Ordering.by(-_))
        (0 until indexedTimes.length).foreach(i => availableChairs.enqueue(i))
        
        def assignChairs(remaining: List[((Int, Int), Int)]): Int = {
            remaining match {
                case Nil => -1 
                case ((start, end), index) :: rest =>
                    while (usedChairs.nonEmpty && usedChairs.head._1 <= start) {
                        val (_, chair) = usedChairs.dequeue()
                        availableChairs.enqueue(chair)
                    }

                    val chair = availableChairs.dequeue()
                    usedChairs.enqueue((end, chair))

                    if (index == targetFriend) {
                        chair
                    } else {
                        assignChairs(rest)
                    }
            }
        }

        assignChairs(indexedTimes)
    }
}
```