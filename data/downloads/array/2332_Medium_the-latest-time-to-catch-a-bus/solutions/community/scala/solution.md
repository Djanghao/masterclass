# 12 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/5206453/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/5206453/)

---

```scala
object Solution {
  def latestTimeCatchTheBus(buses: Array[Int], passengers: Array[Int], capacity: Int): Int =
    def f(bs: Seq[Int], ps:Seq[Int], lineSize: Int, lastP: Int, lastTime: Int): Int = 
      lazy val time = bs.head min ps.head
      lazy val line1 = lineSize-capacity
      lazy val lastTime1 = if(bs.last > lastP) bs.last else lastTime
      lazy val lastTime2 = if(line1<0 && lastP < time) time else lastTime
      lazy val lastTime3 = if(ps.head-1 > lastP) ps.head-1 else lastTime
      if(bs.isEmpty)              lastTime
      else if(lineSize>=capacity) f(bs.tail, ps, line1 max 0, lastP, lastTime)
      else if(ps.isEmpty)         lastTime1
      else if(bs.head < ps.head)  f(bs.tail, ps, line1 max 0, lastP, lastTime2)
      else                        f(bs, ps.tail, lineSize+1, ps.head, lastTime3)
    f(buses.to(List).sorted, passengers.to(List).sorted, 0, -2, -2)
}

```