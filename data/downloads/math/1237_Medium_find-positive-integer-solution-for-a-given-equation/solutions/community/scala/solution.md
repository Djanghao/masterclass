# scala oneliner, brute force

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/3152347/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/3152347/)

---

# Code
```
object Solution {
  def findSolution(c: CustomFunction, z: Int): List[List[Int]] =
    (1 to 1000).flatMap{x=> (1 to 1000).collect{case y:Int if c.f(x,y)==z => List(x,y)}}.toList
}
```