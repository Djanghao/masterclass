# Scala: simple Queue simulation with indices

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5002698/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5002698/)

---

# Code
```
object Solution {
  def deckRevealedIncreasing(deck: Array[Int]): Array[Int] = {
    val q = collection.mutable.Queue.range(0, deck.length)
    
    deck.sorted.foreach { c => 
      deck(q.dequeue) = c
      if (q.nonEmpty) q.enqueue(q.dequeue)
    }

    deck
  }
}
```