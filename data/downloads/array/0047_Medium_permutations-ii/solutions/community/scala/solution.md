# Scala functional backtracking short

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/2264094/](https://leetcode.com/problems/permutations-ii/solutions/2264094/)

---

```
object Solution {
    def permuteUnique(nums: Array[Int]): List[List[Int]] = {
      permute(nums.zipWithIndex.map { case (v, i) => (i, v) }.toMap).distinct
    }
    def permute(nums: Map[Int, Int]): List[List[Int]] = {
      nums.size match {
        case 0 => List.empty[List[Int]]
        case 1 => List(List(nums.head._2))
        case _ => nums.flatMap {
          case (i,v) => permute(nums - i).map(v :: _)
        }.toList.distinct
      }
    }
  }
```
