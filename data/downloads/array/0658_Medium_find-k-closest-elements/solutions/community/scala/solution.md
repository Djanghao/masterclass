# Scala Functional Binary Search Solution

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/1663058/](https://leetcode.com/problems/find-k-closest-elements/solutions/1663058/)

---

```scala
def findClosestElements(arr: Array[Int], k: Int, x: Int): List[Int] = {
    @annotation.tailrec
    def go(left: Int, right: Int): List[Int] =
      if(left >= right) arr.slice(left, left+k).toList
      else {
        val mid = left + (right - left) / 2
        if(x - arr(mid) > arr(mid+k) - x)
          go(mid + 1, right)
        else
          go(left, mid)
      }
        
    go(0, arr.length - k)
}
```
