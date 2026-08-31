# 10 lines scala drop if needed one or two smallest non-null digits

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/5050560/](https://leetcode.com/problems/largest-multiple-of-three/solutions/5050560/)

---

```
// drop if needed one or two smallest non-null digits 
// to make sum of remaining digits multiple of three.
object Solution {
  import scala.math.Ordering.Implicits._
  def largestMultipleOfThree(digits: Array[Int]): String = {
    lazy val countingSorted = digits.groupMapReduce(identity)(_ => 1)(_ + _)
    def drop(aMap:Map[Int,Int], cnt: Int, rem: Int):Map[Int,Int] =
      if(cnt==0 || aMap.isEmpty) aMap
      else aMap.keys.toList.sorted.find(i =>(i!=0) && (i%3 == rem) && aMap(i)>0)
        .map{case k => drop(aMap + (k -> (aMap(k)-1)), cnt-1, rem)}.getOrElse(Map())
    lazy val x1 = Option(digits.sum % 3).find(_ != 0).map{case rem =>
      List((1,rem), (2,3-rem)).map{case (c,r) => drop(countingSorted,c,r)}.maxBy(_.values.sum)
    }.getOrElse(countingSorted).filter(_._2 != 0).toList.sorted.reverse
    if(x1.map(_._1).maxOption.contains(0)) "0"
    else x1.flatMap{case (d,n) => List.fill(n)(d)}.mkString
  }

  def largestMultipleOfThree_1(digits: Array[Int]): String = { // solution with default sort
    def max(s1: List[Int], s2: List[Int]) = 
      if(s1.size>s2.size) s1 else s2
    def drop(seq:List[Int], cnt: Int, rem: Int, acc: List[Int] = Nil): List[Int] = {
      if(cnt == 0) seq.reverse ++ acc
      else if(seq.isEmpty) Nil
      else if((seq.head % 3) == rem) drop(seq.tail, cnt - 1, rem, acc)
      else drop(seq.tail, cnt, rem, seq.head +: acc)
    }
    lazy val x0 = digits.toList.sorted
    (digits.sum % 3) match {
      case 1 => max(drop(x0,1,1), drop(x0,2,2))
      case 2 => max(drop(x0,1,2), drop(x0,2,1))
      case _ => x0.reverse
    } match {
      case Nil => ""
      case 0 :: t => "0"
      case other => other.mkString
    }
   }
}
```