# [scala] simple

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5702748/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5702748/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def maxEnergyBoost(energyDrinkA: Array[Int], energyDrinkB: Array[Int]): Long = {
    eval(1, energyDrinkA.head.toLong, energyDrinkB.head.toLong) {
      case (i, a, b) =>
        if(i == energyDrinkA.size) Right(a.max(b))
        else Left(i + 1, b.max(a + energyDrinkA(i)), a.max(b + energyDrinkB(i)))
    }
  }
  @scala.annotation.tailrec
  def eval[A, B](a: A)(f: A => Either[A, B]): B = {
   f(a) match {
     case Left(aa) => eval(aa)(f)
     case Right(b) => b
   }
  }
}
```