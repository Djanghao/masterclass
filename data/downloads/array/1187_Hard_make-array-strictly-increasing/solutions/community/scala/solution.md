# Scala beats 100%

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3555507/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3555507/)

---

# Intuition

The order of operations is not important. So for each elem in arr1 we can choose to :
- leave it the same (if increasing)
- assign it the value of any other elem from arr2 which takes one operation, we can be choose greedly from arr2: it's smallest to keep arr1 increasing

# Code
```
object Solution {
  def makeArrayIncreasing(arr1: Array[Int], arr2: Array[Int]): Int = {
    val n = arr1.length
    val arr2S = arr2.sort

    // min nb of ops to make arr1[i..] increasing given last value v
    val mem = scala.collection.mutable.Map[(Int, Int), Option[Int]]()
    def dp(i: Int, v: Int): Option[Int] = mem.getOrElseUpdate((i, v), {
      Option.when(i == n) { 0 } orElse {
        Seq(
          Some(arr1(i)).filter(v < _).flatMap(dp(i + 1, _)),      // without reassignment
          arr2Sorted.find(v < _).flatMap(dp(i + 1, _)).map(_ + 1) // with reassignment
        ).flatten.reduceOption(Math.min)
      }
    })

    dp(0, -1).getOrElse(-1)
  }
}
```

# Optimised Code

We should also keep track of index in arr2S such that a single pass is done.

```
object Solution {
  def makeArrayIncreasing(arr1: Array[Int], arr2: Array[Int]): Int = {
    val n = arr1.length
    val arr2S = arr2.sorted // IMPROVE find

    // min nb of ops to make arr1[i..] increasing with arr2S[j..] given last value v
    val mem = scala.collection.mutable.Map[(Int, Int), Option[Int]]()
    def dp(i: Int, j: Int, v: Int): Option[Int] = mem.getOrElseUpdate((i, v), {
      Option.when(i == n) { 0 } orElse {
        Seq(
          Some(arr1(i)).filter(v < _).flatMap(dp(i + 1, j, _)), // without reassignment
          Some(arr2S.indexWhere(v < _, j)).filterNot(_ == -1)   // first valid index arr2S
            .flatMap(k => dp(i + 1, k, arr2S(k))).map(_ + 1)    // with reassignment
        ).flatten.reduceOption(Math.min)
      }
    })

    dp(0, 0, -1).getOrElse(-1)
  }
}
```