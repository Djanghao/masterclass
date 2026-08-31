# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/2087281/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/2087281/)

---

```

  def findSmallestSetOfVertices(n: Int, edges: List[List[Int]]): List[Int] = {
    edges.flatten.toSet.toList diff edges.map(_.last)
  }
```