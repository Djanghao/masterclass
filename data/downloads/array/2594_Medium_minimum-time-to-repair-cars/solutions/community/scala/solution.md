# [scala] - iterate on cars, PriorityQueue for mechanic cost

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3312309/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3312309/)

---

# Code
```
object Solution {

  case class Mech(rank: Int, repaired: Int) {
    private val nRepaired = repaired + 1
    val cost = rank.toLong * nRepaired * nRepaired
  }

  implicit val ord: Ordering[Mech] = Ordering.by(-_.cost)

  def repairCars(ranks: Array[Int], totalCars: Int): Long = {
    var time = 0L
    val mechs = scala.collection.mutable.PriorityQueue.from(ranks.map(r => Mech(r, 0)))
    (1 to totalCars).foreach { _ =>
      val mech = mechs.dequeue()
      time = math.max(time, mech.cost)
      mechs.enqueue(Mech(mech.rank, mech.repaired + 1))
    }
    time
  }
}
```