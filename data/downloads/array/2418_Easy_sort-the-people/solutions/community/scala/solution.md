# scala one line solution.

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/2646172/](https://leetcode.com/problems/sort-the-people/solutions/2646172/)

---

```
  def sortPeople(names: Array[String], heights: Array[Int]): Array[String] =
    (names zip heights) sortBy(- _._2) map(_._1)

```