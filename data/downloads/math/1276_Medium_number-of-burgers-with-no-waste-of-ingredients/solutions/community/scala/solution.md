# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/5379865/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/5379865/)

---

```scala
object Solution {
  def numOfBurgers(tomatoSlices: Int, cheeseSlices: Int): List[Int] =
    lazy val jb = (tomatoSlices - cheeseSlices*2) / 2
    lazy val sb = (tomatoSlices - jb*4) / 2
    Option.when((sb min jb) >= 0 &&
        ((sb*2 + jb*4) == tomatoSlices) && 
        jb+sb == cheeseSlices
    ){List(jb,sb)}.getOrElse(Nil)
}
```