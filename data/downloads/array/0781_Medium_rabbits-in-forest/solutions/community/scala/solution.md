# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/5324038/](https://leetcode.com/problems/rabbits-in-forest/solutions/5324038/)

---

```scala
object Solution {
  def numRabbits(answers: Array[Int]): Int =
    answers.toList.groupMapReduce(identity)(_ => 1)(_ + _).iterator
      .map{case (k,v) => ((v-1)/(k+1)+1)*(k+1)}.sum
}
```