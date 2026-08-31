# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/5964510/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/5964510/)

---

```scala []
object Solution {
  def repeatLimitedString(s: String, repeatLimit: Int): String = {
    lazy val aMap = s.groupMapReduce(identity)(_ => 1)(_ + _)
      .to(collection.immutable.SortedMap)
    def f(aMap:Map[Char,Int], acc: List[(Char,Int)]): List[(Char,Int)] = {
      lazy val cMap = aMap.updatedWith(aMap.last._1){
        case None => ???; case Some(v) => Some(v-repeatLimit)
      }.updatedWith(aMap.init.last._1){
        case Some(1)|None => None; case Some(v) => Some(v-1)
      }
      lazy val acc2 = (aMap.init.last._1, 1) +: (aMap.last._1, repeatLimit) +: acc
      if(aMap.isEmpty) acc
      else if(aMap.size == 1) (aMap.last._1, (aMap.last._2 min repeatLimit)) +: acc
      else if(aMap.last._2 <= repeatLimit) f(aMap.init, aMap.last +: acc)
      else f(cMap, acc2)
    }
    f(aMap,Nil).reverse.map{case (c,n) => s"$c"*n}.mkString
  }
}
```