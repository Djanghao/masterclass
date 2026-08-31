# 9 lines scala resursion with immutable SortedMap

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/3155388/](https://leetcode.com/problems/hand-of-straights/solutions/3155388/)

---



# Code
```
object Solution {
  def isNStraightHand(hand: Array[Int], groupSize: Int): Boolean = {
    def impl(map: Map[Int,Int]): Boolean = {
      lazy val minCard = map.min._1
      lazy val newGroup = (minCard until minCard+groupSize)
      lazy val newMap = newGroup.foldLeft(map){case (_map,i) =>
        _map.updatedWith(i){_.flatMap{x => if(x>1) Some(x-1) else None}}
      }
      map.isEmpty || (newGroup.forall(map.contains) && impl(newMap))
    }
    impl(hand.toList.groupMapReduce(identity)(_ => 1)(_ + _).to(collection.immutable.SortedMap))
  }
}
```