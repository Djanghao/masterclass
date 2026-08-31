# Scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4776045/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4776045/)

---

# Code
```
object Solution {
    import scala.annotation.tailrec
    def findAllPeople(n: Int, meetings: Array[Array[Int]], firstPerson: Int): List[Int] = {
        @tailrec def conquer(conquerer: Set[Int], rem: List[Set[Int]]): (Set[Int], List[Set[Int]]) = {
            val (next, others) = rem.partition(_.exists(conquerer contains _))
            (next,others) match {
                case (Nil, _)  => (conquerer, others)
                case (n, Nil) => (conquerer ++ n.reduce(_ ++ _), others)
                case (n, o) => conquer(conquerer ++ n.reduce(_ ++ _), o)
            }
        } 
        
        (Array(0, firstPerson, 0) :: meetings.toList).map(arr => (arr.take(2).toSet, arr(2)))
        .groupBy(_._2).map{case (k,v) => (k,v.toList)}
        .toList.sortBy(_._1)
        .map(_._2)
        .map(_.map(_._1))
        .foldLeft(Set(0))((conq, others) => conquer(conq, others)._1)
        .toList
    }
}
```