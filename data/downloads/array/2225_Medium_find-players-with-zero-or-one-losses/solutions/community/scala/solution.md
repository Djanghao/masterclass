# scala one line solution

**Author:** lyk4411
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2098673/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2098673/)

---

```

def findWinners(matches: Array[Array[Int]]): List[List[Int]] = {
  List((matches.map(n => n(0)).toList.toSet diff matches.map(n => n(1)).toList.toSet).toList.sorted,
    (matches.map(n => n(1)).groupBy(identity).mapValues(_.size).filter(_._2 == 1).map(_._1)).toList.sorted)
  }
```