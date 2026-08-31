# scala solution

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/3319199/](https://leetcode.com/problems/can-place-flowers/solutions/3319199/)

---

# Code
```
object Solution {
  def canPlaceFlowers(flowerbed: Array[Int], n: Int): Boolean = {
    lazy val fb2 = (0 +: flowerbed :+ 0)
    var leftFlowers = n
    (1 until fb2.size-1) foreach {i=>
      if(fb2.slice(i-1,i+2).forall(_==0)) {fb2(i)=1; leftFlowers=leftFlowers-1}
    }
    leftFlowers <= 0
  }
}
```