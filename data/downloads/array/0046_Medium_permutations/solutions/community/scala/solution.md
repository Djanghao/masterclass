# Scala solution with tail recursion

**Author:** danielOlivo
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutations/solutions/4499042/](https://leetcode.com/problems/permutations/solutions/4499042/)

---

# Code
```
object Solution {
    import scala.annotation.tailrec
    implicit class InsertableList[A](l: List[A]){
        def insert(idx: Int, v: A) = {
            val (front, back) = l.splitAt(idx)
            front ++ List(v) ++ back
        }
    }
    def permute(nums: Array[Int]): List[List[Int]] = {
        @tailrec def loop(rem: List[Int], res: List[List[Int]] = List.empty): List[List[Int]] = rem match {
            case Nil => res
            case h :: t => res match {
                case h2 :: _ => 
                    loop(t, (0 to h2.size).flatMap(i => res.map(c => c.insert(i,h))).toList)
                case Nil => loop(t, List(List(h)))
            }
        }
        loop(nums.toList)
    }
}
```