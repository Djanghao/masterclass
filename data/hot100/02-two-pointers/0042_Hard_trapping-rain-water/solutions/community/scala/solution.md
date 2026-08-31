# scala solution.

**Author:** lyk4411
**Votes:** 3
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/2062627/](https://leetcode.com/problems/trapping-rain-water/solutions/2062627/)

---

```

 def trap(height: Array[Int]): Int = {
    def help(left:Int, right: Int, level:Int, result: Int): Int ={
      (left, right) match {
        case (l, r) if l >= r => result
        case (l, r) if height(l) <= height(r) => help(left + 1, right, level max height(l), result + (0 max (level - height(l))))
        case (l, r) if height(l) >  height(r) => help(left, right - 1, level max height(r), result + (0 max (level - height(r))))
      }
    }

    help(0, height.length - 1, 0, 0)
  }
```