# scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/5276189/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/5276189/)

---

```scala
object Solution {
  val vSet = Set('a', 'e', 'i', 'o', 'u')
  def beautifulSubstrings(s: String, k: Int): Int = {
    s.map(vSet.contains(_).compare(false).abs.sign).zipWithIndex
    .foldLeft((0,List.empty[Int])){case ((acc,l0),(b,i)) => 
      lazy val l = b +: l0
      lazy val y3 = l.scanLeft(0)(_ + _).drop(1).zipWithIndex
        .count{case (vowels,i) =>
          lazy val consonants = i+1 - vowels
          consonants == vowels && (consonants*vowels)%k == 0 
        }
      (acc+y3, l)
    }._1
  }
}
```