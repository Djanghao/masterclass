# scala - 100 % faster

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5143589/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5143589/)

---

```
object Solution {
  def prevPermOpt1(arr: Array[Int]): Array[Int] = {
    var break = 0

    // Find the index of the first decreasing pair from the end
    for (i <- 0 until arr.length - 1) {
      if (arr(i) > arr(i + 1)) break = i
    }

    var maxi = 0
    var j = 0
    for (i <- break + 1 until arr.length) {
      if (arr(i) < arr(break)) {
        if (maxi == arr(i)) {
          // Handle the case when the maximum element is repeated
        } else {
          j = i
          maxi = arr(i)
        }
      }
    }

    // Swap arr(break) and arr(j)
    val temp = arr(break)
    arr(break) = arr(j)
    arr(j) = temp

    arr
  }
}

```