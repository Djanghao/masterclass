# Scala with Heap (Priority Queue)

**Author:** yangnirinny
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/4218397/](https://leetcode.com/problems/design-a-leaderboard/solutions/4218397/)

---

# Code
```
import scala.collection.mutable
/**
addScore:
Time complexity: O(1)
Accessing or updating a key-value pair in a hashmap is constant time on average.
Space complexity: O(n)
n is the number of unique players. In the worst case, every call to addScore could introduce a new player.

top:
Time complexity: O(nlogK)
We iterate over all n entries in the hashmap (scores). For each entry, we might have to insert it into the heap of size K, which takes O(logK) time. So the total time becomes O(nlogK).
Space complexity: O(K)
The size of the heap is at most K.

reset:
Time complexity: O(1)
Updating a value in the hashmap is constant time on average.
Space complexity: O(n)
This is mainly due to the space occupied by the hashmap. The space used by the reset method itself is constant.
*/
class Leaderboard {
  private val scores: mutable.HashMap[Int, Int] = mutable.HashMap.empty

  def addScore(playerId: Int, score: Int): Unit = {
    scores(playerId) = scores.getOrElse(playerId, 0) + score
  }

  def top(K: Int): Int = {
    // Define an implicit ordering for a tuple (Int, Int) to be used in PriorityQueue.
    implicit val tupleOrdering: Ordering[(Int, Int)] = Ordering.by(_._2)

    val heap = mutable.PriorityQueue.empty[(Int, Int)].reverse // reverse to make it a min-heap

    // maintains a min-heap of size K which ensures that you always have the top K scores in the heap. When the heap size exceeds K, the smallest score (which would not be among the top K scores) gets dequeued, ensuring that only the highest scores remain.
    for ((player, score) <- scores) {
      heap.enqueue((player, score))
      if (heap.size > K) {
        heap.dequeue()
      }
    }

    heap.map(_._2).sum
  }

  def reset(playerId: Int): Unit = {
    scores(playerId) = 0
  }
}


/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
```