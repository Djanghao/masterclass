# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/3261614/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/3261614/)

---

# Code
```
object Solution {
  def matchPlayersAndTrainers(players: Array[Int], trainers: Array[Int]): Int = {
    def impl(ps: Seq[Int], ts: Seq[Int], acc: Int): Int = {
      if(ps.isEmpty || ts.isEmpty) acc
      else if(ps.head>ts.head) impl(ps.tail,ts,acc)
      else impl(ps.tail,ts.tail,acc+1)
    }
    impl(players.toList.sorted.reverse, trainers.toList.sorted.reverse, 0)
  }
}
```