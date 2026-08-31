# scala oneliner and ordered set recursion solutions

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5141197/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5141197/)

---

```
object Solution {
  def kthSmallestPrimeFractionOneliner(arr: Array[Int], k: Int): Array[Int] =
    arr.indices.flatMap {case i:Int => (i+1 until arr.size).map {case j:Int =>Array(arr(i),arr(j))
    }}.toList.sortBy{a => (a.head.toDouble) / (a.last.toDouble) }.drop(k-1).head

  def kthSmallestPrimeFraction(arr: Array[Int], k: Int): Array[Int] =
    lazy val set = collection.immutable.TreeSet
    .from(arr.iterator.zipWithIndex.map((a,i) => (a.toDouble / arr.last) -> (i,arr.size-1)))
    def f(set:Set[(Double,(Int,Int))], rem: Int): Array[Int] =
      lazy val (fst,snd) = set.head._2
      if(rem<=0)  Array(arr(fst),arr(snd))
      else f(set.tail + ((arr(fst).toDouble/arr(snd-1)) ->  (fst,snd-1)), rem-1 )
    f(set,k-1)
}
```