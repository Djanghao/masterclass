# slow scala bfs recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/3083208/](https://leetcode.com/problems/map-of-highest-peak/solutions/3083208/)

---

# Code
```
  def highestPeak(arr: Array[Array[Int]]): Array[Array[Int]] = {
    for{ i <- (0 until (arr.size)) ; j <- (0 until (arr(0).size))}{arr(i)(j) = 1-arr(i)(j)}
    lazy val set = (0 until (arr.size)).flatMap{i =>
      (0 until (arr(0).size)).flatMap{j => Set(
        if(i>0 && arr(i)(j) != arr(i-1)(j)) {if(arr(i)(j)==0) Some((i,j)) else Some((i-1,j)) } else None,
        if(j>0 && arr(i)(j) != arr(i)(j-1)) {if(arr(i)(j)==0) Some((i,j)) else Some((i,j-1)) } else None
    ).flatten}.toSet}.toSet
    def impl(level: Int, set: Set[(Int,Int)], visited: Set[(Int,Int)]): Array[Array[Int]]  =
      if(set.isEmpty) arr else {
        lazy val newSet = set.flatMap{case (i,j) =>
          List((i-1, j), (i+1, j), (i, j-1), (i, j+1)).filter{case (a,b) =>
            a >= 0 && a < arr.size && b >= 0 && b < arr(0).size && arr(a)(b) != 0 && !visited.contains(a,b)
          }
        }
        newSet.foreach{case (i,j) => arr(i)(j) = level}
        impl(level+1, newSet, visited++newSet)
      }
    impl(1, set, set)
  }
```