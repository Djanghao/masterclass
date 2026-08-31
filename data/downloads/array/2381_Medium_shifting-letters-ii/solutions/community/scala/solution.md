# [scala] - Sorted shifts and simple recursion

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2454343/](https://leetcode.com/problems/shifting-letters-ii/solutions/2454343/)

---

```scala
case class Shift(start: Int, finish: Int, up: Boolean)

def shiftingLetters(s: String, shifts: Array[Array[Int]]): String = {
  val shfts = shifts.map {
    case Array(start, finish, 0) => Shift(start, finish, false)
    case Array(start, finish, 1) => Shift(start, finish, true)
    case _ => ???
  }
  val start = shfts.sortBy(_.start)
  val finish = shfts.sortBy(_.finish)
  val chars = s.map(_ - 'a').zipWithIndex
  goShift(chars.toList, 0, start.toList, finish.toList, List.empty).map(toChar).mkString
}

def goShift(chars: List[(Int, Int)], k:  Int, start: List[Shift], finish: List[Shift], acc: List[Int]): List[Int] =
  chars match {
    case Nil => acc.reverse
    case (c, i) :: tail =>
      val started = start.takeWhile(_.start <= i).map(s => if(s.up) 1 else -1)
      val finished = finish.takeWhile(_.finish < i).map(s => if(s.up) -1 else 1)
      val nK = k + started.sum + finished.sum
      goShift(tail, nK, start.drop(started.size), finish.drop(finished.size), c + nK :: acc)
  }

def toChar(i: Int) = ('a' + math.floorMod(i, 26)).toChar
```