# Scala. Intuitive solution. Time: 100%

**Author:** densungkim
**Votes:** 0
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5676102/](https://leetcode.com/problems/island-perimeter/solutions/5676102/)

---

```
  def islandPerimeter(grid: Array[Array[Int]]): Int = {
    var perimeter = 0
    for (r <- grid.indices; c <- grid(0).indices) {
      if (grid(r)(c) == 1) {
        if (r == 0 || grid(r - 1)(c) == 0) perimeter += 1  // up
        if (r == grid.length - 1 || grid(r + 1)(c) == 0) perimeter += 1 // down
        if (c == 0 || grid(r)(c - 1) == 0) perimeter += 1 // left
        if (c == grid(r).length - 1 || grid(r)(c + 1) == 0) perimeter += 1 // right
      }
    }
    perimeter
  }
```

**If there is no neighbor that is equal to one, then increase the perimeter by one.**