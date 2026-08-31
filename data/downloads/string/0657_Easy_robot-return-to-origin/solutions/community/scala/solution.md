# scala simulation

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/3051575/](https://leetcode.com/problems/robot-return-to-origin/solutions/3051575/)

---

# Code
```
object Solution {
  def judgeCircle(moves: String): Boolean = {
    def impl(seq: Seq[Char], acc: (Int,Int) = (0,0)): Boolean = {
      if(seq.isEmpty) acc == (0,0)
      else seq.head match {
        case 'R' => impl(seq.tail, (acc._1+1, acc._2))
        case 'L' => impl(seq.tail, (acc._1-1, acc._2))
        case 'U' => impl(seq.tail, (acc._1, acc._2+1))
        case 'D' => impl(seq.tail, (acc._1, acc._2-1))
        case _ => ???
      }
    }
    impl(moves.toList)
  }
}
```